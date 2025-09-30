import { userModel } from "@/models";
import { AuthService } from "@/types/auth/auth.service.interface";
import { throwIfDuplicate } from "@/utils/throwIfDuplicate";
import { roleService } from "@/services";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import { env } from "@/config";
const { JWT_SECRET, NODE_ENV } = env;

export const authService: AuthService = {
  getUserById: async (userId: string) => {
    try {
      return (await userModel.getById(userId)) ?? "USER_NOT_FOUND";
    } catch (error) {
      return "ERROR_GET_USER: " + String(error);
    }
  },

  register: async (userData) => {
    try {
      const { password } = userData;
      const hash = await argon2.hash(password);
      if (!hash) {
        return "ERROR_HASHING_PASSWORD";
      }
      const roleId = await roleService.getByName("USER");
      if (roleId === "NO_ROLE") {
        return "NO_ROLE";
      }
      const result = await userModel.create({
        ...userData,
        password: hash,
        roleId: roleId.id,
      });
      return result ?? "NO_USER_CREATED";
    } catch (error: any) {
      throwIfDuplicate(error, "CREATING", "USER", ["email", "username"]);
      return "ERROR_CREATING_USER: " + String(error);
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
      res.cookie("token", token, {
        httpOnly: true,
        sameSite: "strict",
        secure: NODE_ENV === "prod",
        maxAge: 60 * 60 * 1000, // 1 heure
      });
      return {
        user: { id, email, role, username, createdAt, updatedAt, lastLogin },
      };
    } catch (error: any) {
      throwIfDuplicate(error, "CREATING", "USER", ["email", "username"]);
      return "ERROR_LOGIN: " + String(error);
    }
  },

  me: async (userId: string) => {
    try {
      const user = await userModel.getById(userId);
      if (!user) return "USER_NOT_FOUND";

      const { id, email, roleId, username, createdAt, updatedAt, lastLogin } =
        user;

      const resultRole = await roleService.getById(roleId);
      if (resultRole === "NO_ROLE") return "NO_ROLE";
      
      const { label: role } = resultRole;
      return { id, email, role, username, createdAt, updatedAt, lastLogin };
    } catch (error) {
      throw new Error("ERROR_ME: " + String(error));
    }
  },
};
