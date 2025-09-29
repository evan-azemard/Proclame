import { z } from "zod";

export const favoriteCreateValidation = z.object({
  userId: z
    .string()
    .uuid({ message: "L'ID de l'utilisateur doit être un UUID valide." }),
  proclamationId: z
    .string()
    .uuid({ message: "L'ID de la proclamation doit être un UUID valide." }),
});
