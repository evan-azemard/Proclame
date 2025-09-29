import { z } from "zod";

export const categoryCreateValidation = z.object({
  title: z
    .string()
    .min(2, {
      message: "Le titre est requis et doit contenir au moins 2 caractères.",
    })
    .max(50, { message: "Le titre ne doit pas dépasser 50 caractères." }),
  statusId: z
    .string()
    .uuid({ message: "L'ID du statut doit être un UUID valide." }),
  userId: z
    .string()
    .uuid({ message: "L'ID de l'utilisateur doit être un UUID valide." }),
});

export const categoryUpdateValidation = z
  .object({
    title: z
      .string()
      .min(2, {
        message: "Le titre est requis et doit contenir au moins 2 caractères.",
      })
      .max(50, { message: "Le titre ne doit pas dépasser 50 caractères." })
      .optional(),
    statusId: z
      .string()
      .uuid({ message: "L'ID du statut doit être un UUID valide." })
      .optional(),
    userId: z
      .string()
      .uuid({ message: "L'ID de l'utilisateur doit être un UUID valide." })
      .optional(),
  })
  .refine((data) => !!data.title || !!data.statusId || !!data.userId, {
    message:
      "Au moins un champ doit être fourni pour la mise à jour de la catégorie.",
  });
