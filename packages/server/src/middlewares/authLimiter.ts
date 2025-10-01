import rateLimit from "express-rate-limit";

export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message:
    "Trop de requêtes ont été effectuées depuis cette adresse IP, veuillez réessayer plus tard.",
});
