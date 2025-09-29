import { z } from "zod";

export const userUpdateSchema = z
  .object({
    email: z
      .string()
      .email({ message: "L'email n'est pas valide" })
      .max(255, { message: "L'email ne doit pas dépasser 255 caractères." })
      .optional(),

    password: z
      .string()
      .min(8, {
        message: "Votre mot de passe doit contenir au moins 8 caractères.",
      })
      .max(255, {
        message: "Le mot de passe ne doit pas dépasser 255 caractères.",
      })
      .refine(
        (val) =>
          /[a-z]/.test(val) &&
          /[A-Z]/.test(val) &&
          /[\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(val),
        {
          message:
            "Le mot de passe doit contenir au moins 8 caractères, au moins une majuscule et minuscule, un chiffre ou symbole parmi !@#$%^&*()_+-=[]{};':\"\\|,.<>/?.",
        }
      )
      .optional(),

    roleId: z
      .string()
      .uuid({ message: "Le rôle doit être un UUID valide." })
      .optional(),

    username: z
      .string()
      .min(3, {
        message: "Le nom d'utilisateur doit contenir au moins 3 caractères.",
      })
      .max(50, {
        message: "Le nom d'utilisateur ne doit pas dépasser 50 caractères.",
      })
      .optional(),
  })
  .refine(
    (data) =>
      !!data.email || !!data.password || !!data.roleId || !!data.username,
    {
      message:
        "Au moins un champ doit être renseigné pour mettre à jour l'utilisateur.",
    }
  );
