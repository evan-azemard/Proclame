import { authService } from "@/services";
import { AuthController } from "@/types";

export const authController: AuthController = {
  me: async (req, res) => {
    try {
      const userId = req.user.id;
      const result = await authService.me(userId);
      if (result === "USER_NOT_FOUND") {
        res.status(404).json({ message: "Utilisateur non trouvé" });
        return;
      }
      if (result === "NO_ROLE") {
        res.status(403).json({ message: "Aucun rôle attribué" });
        return;
      }
      res.status(200).json({ user: result });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Erreur lors de la récupération de l'utilisateur" });
    }
  },

  register: async (req, res) => {
    try {
      const result = await authService.register(req.body);

      if (result === "NO_ROLE") {
        res.status(400).json({ message: "Aucun rôle trouvé" });
        return;
      }
      if (result === "NO_USER_CREATED") {
        res.status(400).json({ message: "Aucun utilisateur créé" });
        return;
      }
      if (result === "ERROR_HASHING_PASSWORD") {
        res
          .status(400)
          .json({ message: "Erreur lors du hash du mot de passe" });
        return;
      }
      res.status(201).json({ user: result });
    } catch (error) {
      const err = error as Error;

      if (err.message === "DUPLICATE_EMAIL") {
        res.status(409).json({ message: "Cet email est déjà utilisé" });
        return;
      }
      if (err.message === "DUPLICATE_USERNAME") {
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
      const result = await authService.login(email, password, res);
      if (result === "NO_EMAIL") {
        res.status(400).json({ message: "L'email n'existe pas" });
        return;
      }
      if (result === "INVALID_PASSWORD") {
        res.status(401).json({ message: "Le mot de passe est incorrect" });
        return;
      }
      if (result === "USER_NOT_FOUND") {
        res.status(404).json({ message: "Utilisateur non trouvé" });
        return;
      }
      if (result === "NO_ROLE") {
        res.status(400).json({ message: "Aucun rôle trouvé" });
        return;
      }
      res.status(200).json({ user: result });
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la connexion" });
    }
  },
};
