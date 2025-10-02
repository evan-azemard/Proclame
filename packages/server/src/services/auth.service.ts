import { userModel } from "@/models";
import {
  AuthService,
  AuthenticatedUser,
} from "@/types/auth/auth.service.interface";
import { throwIfDuplicate } from "@/utils/throwIfDuplicate";
import { roleService } from "@/services";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import { env } from "@/config";
const { JWT_SECRET, NODE_ENV } = env;

const toAuthenticatedUser = (
  user: {
    id: string;
    email: string;
    username: string;
    createdAt: Date | null;
    updatedAt: Date;
    lastLogin: Date | null;
  },
  role: string
): AuthenticatedUser => ({
  id: user.id,
  email: user.email,
  role,
  username: user.username,
  createdAt: user.createdAt,
  updatedAt: user.updatedAt,
  lastLogin: user.lastLogin,
});

export const authService: AuthService = {
  me: async (userId: string) => {
    try {
      const user = await userModel.getById(userId);
      if (!user) return "USER_NOT_FOUND";

      const { id, email, roleId, username, createdAt, updatedAt, lastLogin } =
        user;

      const resultRole = await roleService.getById(roleId);
      if (resultRole === "NO_ROLE") return "NO_ROLE";

      const { label: role } = resultRole;
      return toAuthenticatedUser(
        { id, email, username, createdAt, updatedAt, lastLogin },
        role
      );
    } catch (error) {
      throw new Error("ERROR_ME: " + String(error));
    }
  },

  register: async (userData) => {
    try {
      const { password } = userData;
      const hash = await argon2.hash(password);
      if (!hash) return "ERROR_HASHING_PASSWORD";

      const role = await roleService.getByName("USER");
      if (role === "NO_ROLE") return "NO_ROLE";

      const createdUser = await userModel.create({
        ...userData,
        password: hash,
        roleId: role.id,
      });
      if (!createdUser) return "NO_USER_CREATED";

      return toAuthenticatedUser(createdUser, role.label);
    } catch (error: unknown) {
      throwIfDuplicate(error, "CREATING", "USER", ["email", "username"]);
      throw new Error("ERROR_CREATING_USER: " + String(error));
    }
  },

  login: async (email: string, password: string, res) => {
    try {
      const result = await userModel.getPassword(email);
      if (!result) {
        return "NO_EMAIL";
      }
      const { id, password: hash } = result;
      const verify = await argon2.verify(hash, password);
      if (!verify) {
        return "INVALID_PASSWORD";
      }
      const userResult = await userModel.getById(id);
      if (!userResult) {
        return "USER_NOT_FOUND";
      }
      const { roleId, username, createdAt, updatedAt, lastLogin } = userResult;
      const resultRole = await roleService.getById(roleId);
      if (resultRole === "NO_ROLE") {
        return "NO_ROLE";
      }
      const { label: role } = resultRole;
      const token = jwt.sign({ id, role }, JWT_SECRET, {
        expiresIn: "1h",
      });
      res.cookie("accessToken", token, {
        httpOnly: true,
        sameSite: "strict",
        secure: NODE_ENV === "prod",
        maxAge: 60 * 60 * 1000, // 1 heure
      });
      return toAuthenticatedUser(
        { id, email, username, createdAt, updatedAt, lastLogin },
        role
      );
    } catch (error: unknown) {
      throw new Error("ERROR_LOGIN: " + String(error));
    }
  },
};
