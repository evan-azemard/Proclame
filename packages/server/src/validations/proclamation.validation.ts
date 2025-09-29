import { z } from "zod";

export const proclamationCreateValidation = z.object({
  title: z
    .string()
    .min(3, { message: "Le titre doit contenir au moins 3 caractères." })
    .max(50, { message: "Le titre ne peut pas dépasser 50 caractères." }),
  description: z
    .string()
    .min(10, {
      message: "La description doit contenir au moins 10 caractères.",
    })
    .optional(),
  categoryId: z
    .string()
    .uuid({ message: "L'ID de la catégorie doit être un UUID valide." }),
  statusId: z
    .string()
    .uuid({ message: "L'ID du statut doit être un UUID valide." }),
  userId: z
    .string()
    .uuid({ message: "L'ID de l'utilisateur doit être un UUID valide." }),
});

export const proclamationUpdateValidation = z
  .object({
    title: z
      .string()
      .min(3, { message: "Le titre doit contenir au moins 3 caractères." })
      .max(50, { message: "Le titre ne peut pas dépasser 50 caractères." })
      .optional(),
    description: z
      .string()
      .min(10, {
        message: "La description doit contenir au moins 10 caractères.",
      })
      .optional(),
    categoryId: z
      .string()
      .uuid({ message: "L'ID de la catégorie doit être un UUID valide." })
      .optional(),
    statusId: z
      .string()
      .uuid({ message: "L'ID du statut doit être un UUID valide." })
      .optional(),
  })
  .refine(
    (date) =>
      !!date.title ||
      !!date.description ||
      !!date.categoryId ||
      !!date.statusId,
    {
      message:
        "Au moins un champ doit être renseigné pour mettre à jour la proclamation.",
    }
  );
