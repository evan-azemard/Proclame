import { z } from "zod";

export const authLoginValidation = z.object({
  email: z
    .string()
    .email({ message: "L'email n'est pas valide" })
    .max(255, { message: "L'email ne doit pas dépasser 255 caractères." }),
  password: z
    .string()
    .min(8, { message: "Le mot de passe doit contenir au moins 8 caractères." })
    .max(255, {
      message: "Le mot de passe ne doit pas dépasser 255 caractères.",
    })
    .refine(
      (val: string) =>
        /[a-z]/.test(val) &&
        /[A-Z]/.test(val) &&
        /[\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(val),
      {
        message:
          "Le mot de passe doit contenir au moins 8 caractères, au moins une majuscule et minuscule, un chiffre ou symbole parmi !@#$%^&*()_+-=[]{};':\"\\|,.<>/?.",
      }
    ),
});

export const authRegisterValidation = z.object({
  email: z
    .string()
    .email({ message: "L'email n'est pas valide" })
    .max(255, { message: "L'email ne doit pas dépasser 255 caractères." }),
  username: z
    .string()
    .min(3, { message: "Le nom d'utilisateur doit contenir au moins 3 caractères." })
    .max(50, { message: "Le nom d'utilisateur ne doit pas dépasser 50 caractères." })
    .regex(/^[a-zA-Z0-9_]+$/, { message: "Le nom d'utilisateur ne peut contenir que des lettres, des chiffres et des underscores." }),
  password: z
    .string()
    .min(8, { message: "Le mot de passe doit contenir au moins 8 caractères." })
    .max(255, { message: "Le mot de passe ne doit pas dépasser 255 caractères." })
    .refine(
      (val: string) =>
        /[a-z]/.test(val) &&
        /[A-Z]/.test(val) &&
        /[\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(val),
      {
        message:
          "Le mot de passe doit contenir au moins 8 caractères, au moins une majuscule et minuscule, un chiffre ou symbole parmi !@#$%^&*()_+-=[]{};':\"\\|,.<>/?.",
      }
    ),
});
