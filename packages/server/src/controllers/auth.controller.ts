import jwt from "jsonwebtoken";
import { authService } from "@/services/auth.service";
import argon2 from "argon2";
import { roleService } from "@/services";

import { env } from "@/config";
import { AuthController } from "@/types";
const { JWT_SECRET, NODE_ENV } = env;

export const authController: AuthController = {
  me: async (req, res) => {
    const userId = req.user.id;
    const user = await authService.getUserById(userId);

    if (user === "USER_NOT_FOUND") {
      res.status(404).json({ message: "Utilisateur non trouvé" });
      return;
    }

    const { id, email, roleId, username, createdAt, updatedAt, lastLogin } =
      user;

    const resultRole = await roleService.getById(roleId);
    if (resultRole === "NO_ROLE") {
      res.status(400).json({ message: "Aucun role trouvé" });
      return;
    }
    const { label: role } = resultRole;

    res.json({
      user: { id, email, role, username, createdAt, updatedAt, lastLogin },
    });
  },

  register: async (req, res) => {
    try {
      const { password } = req.body;
      const hash = await argon2.hash(password);

      if (!hash) {
        res
          .status(400)
          .json({ message: "Un problème est survenu lors du hash" });
        return;
      }

      const roleId = await roleService.getByName("USER");
      if (roleId === "NO_ROLE") {
        res.status(400).json({ message: "Aucun role trouvé" });
        return;
      }
      const result = await authService.create({ ...req.body, password: hash, roleId: roleId.id });
      if (result === "NO_USER_CREATED") {
        res.status(400).json({ message: "Aucun utilisateur créé" });
        return;
      }
      res.status(201).json(result);
    } catch (error) {
      const err = error as Error;
      if (err.message.includes("DUPLICATE_EMAIL")) {
        res.status(409).json({ message: "Cet email est déjà utilisé" });
        return;
      }
      if (err.message.includes("DUPLICATE_USERNAME")) {
        res
          .status(409)
          .json({ message: "Ce nom d'utilisateur est déjà utilisé" });
        return;
      }
      res
        .status(500)
        .json({ message: "Erreur lors de la création de l'utilisateur" });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const result = await authService.getPassword(email);

      if (result === "NO_EMAIL") {
        res.status(400).json({ message: "L'email n'existe pas" });
        return;
      }

      const { id, password: hash } = result;

      const verify = await argon2.verify(hash, password);

      if (!verify) {
        res.status(400).json({ message: "Le mot de passe est inccorrecte" });
        return;
      }
      const userResult = await authService.getUserById(id);
      if (userResult === "USER_NOT_FOUND") {
        res.status(404).json({ message: "Utilisateur non trouvé" });
        return;
      }
      const { roleId, username, createdAt, updatedAt, lastLogin } = userResult;

      const resultRole = await roleService.getById(roleId);

      if (resultRole === "NO_ROLE") {
        res.status(400).json({ message: "Aucun role trouvé" });
        return;
      }

      const { label: role } = resultRole;
      const token = jwt.sign({ id, role }, JWT_SECRET, {
        expiresIn: "1h",
      });

      res.cookie("token", token, {
        httpOnly: true,
        sameSite: "strict",
        secure: NODE_ENV === "prod",
        maxAge: 60 * 60 * 1000,
      });

      res.json({
        user: { id, email, role, username, createdAt, updatedAt, lastLogin },
      });
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la connexion" });
    }
  },
};
