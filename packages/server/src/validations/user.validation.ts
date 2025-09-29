import { z } from "zod";

export const userUpdateSchema = z
  .object({
    email: z.string().email({ message: "L'email n'est pas valide" }).optional(),
    password: z
      .string()
      .min(8, {
        message: "Votre mot de passe doit contenir au moins 8 caractères.",
      })
      .refine(
        (val) =>
          /[a-z]/.test(val) &&
          /[A-Z]/.test(val) &&
          /[\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(val),
        {
          message:
            "Le mot de passe doit contenir une minuscule, une majuscule et un chiffre ou symbole.",
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
      .optional(),
  })
  .refine(
    (data) =>
      !!data.email || !!data.password || !!data.roleId || !!data.username,
    { message: "Au moins un champ doit être renseigné." }
  );
