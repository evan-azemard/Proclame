import { authService } from "@/services";
import { AuthController } from "@/types";
import { logger } from "@/utils";

export const authController: AuthController = {
  me: async (req, res) => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        logger.info("Accès /me sans authentification valide");
        res.status(401).json({ message: "Non authentifié" });
        return;
      }
      const result = await authService.me(userId);
      if (result === "USER_NOT_FOUND") {
        logger.info({ user: userId }, "Utilisateur non trouvé (me)");
        res.status(404).json({ message: "Utilisateur non trouvé" });
        return;
      }
      if (result === "NO_ROLE") {
        logger.info({ user: userId }, "Aucun rôle attribué (me)");
        res.status(403).json({ message: "Aucun rôle attribué" });
        return;
      }
      logger.info({ user: userId }, "Récupération des infos utilisateur (me)");
      res.status(200).json({ user: result });
    } catch (error) {
      logger.error(
        { err: error },
        "Erreur lors de la récupération de l'utilisateur (me)"
      );
      res
        .status(500)
        .json({ message: "Erreur lors de la récupération de l'utilisateur" });
    }
  },

  register: async (req, res) => {
    try {
      const result = await authService.register(req.body);
      if (result === "NO_ROLE") {
        logger.info(
          { user: req.body?.username },
          "Aucun rôle trouvé (register)"
        );
        res.status(400).json({ message: "Aucun rôle trouvé" });
        return;
      }
      if (result === "NO_USER_CREATED") {
        logger.info(
          { user: req.body?.username },
          "Aucun utilisateur créé (register)"
        );
        res.status(400).json({ message: "Aucun utilisateur créé" });
        return;
      }
      if (result === "ERROR_HASHING_PASSWORD") {
        logger.info(
          { user: req.body?.username },
          "Erreur hash mot de passe (register)"
        );
        res
          .status(400)
          .json({ message: "Erreur lors du hash du mot de passe" });
        return;
      }
      logger.info({ user: req.body?.username }, "Utilisateur créé (register)");
      res.status(201).json({ user: result });
    } catch (error) {
      logger.error(
        { err: error },
        "Erreur lors de la création de l'utilisateur (register)"
      );
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
        logger.info({ email }, "Email inexistant (login)");
        res.status(400).json({ message: "L'email n'existe pas" });
        return;
      }
      if (result === "INVALID_PASSWORD") {
        logger.info({ email }, "Mot de passe incorrect (login)");
        res.status(401).json({ message: "Le mot de passe est incorrect" });
        return;
      }
      if (result === "USER_NOT_FOUND") {
        logger.info({ email }, "Utilisateur non trouvé (login)");
        res.status(404).json({ message: "Utilisateur non trouvé" });
        return;
      }
      if (result === "NO_ROLE") {
        logger.info({ email }, "Aucun rôle trouvé (login)");
        res.status(400).json({ message: "Aucun rôle trouvé" });
        return;
      }
      logger.info({ email }, "Connexion utilisateur réussie (login)");
      res.status(200).json({ user: result });
    } catch (error) {
      logger.error({ err: error }, "Erreur lors de la connexion (login)");
      res.status(500).json({ message: "Erreur lors de la connexion" });
    }
  },

  logout: (_req, res) => {
    res.clearCookie("accessToken");
    res.status(200).json({ message: "Déconnexion réussie" });
    return;
  },
};
