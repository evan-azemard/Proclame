import { z } from "zod";

export const roleCreateValidation = z.object({
  label: z.string().min(2, { message: "Le libellé doit contenir au moins 2 caractères." }).max(50, { message: "Le libellé ne doit pas dépasser 50 caractères." }),
  description: z.string().min(10, { message: "La description doit contenir au moins 10 caractères." }).max(255, { message: "La description ne doit pas dépasser 255 caractères." }).optional(),
});

export const roleUpdateValidation = z.object({
  label: z.string().min(2, { message: "Le libellé doit contenir au moins 2 caractères." }).max(50, { message: "Le libellé ne doit pas dépasser 50 caractères." }).optional(),
  description: z.string().min(10, { message: "La description doit contenir au moins 10 caractères." }).max(255, { message: "La description ne doit pas dépasser 255 caractères." }).optional(),
}).refine((data) => !!data.label || !!data.description, {
  message: "Au moins un champ doit être renseigné pour mettre à jour le rôle.",
});
