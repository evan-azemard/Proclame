import { z } from "zod";

export const statusCreateValidation = z.object({
  label: z
    .string()
    .min(2, { message: "Le libéllé doit contenir au moins 2 caractères" })
    .max(50, { message: "Le libellé doit contenir au maximum 50 caractères" }),
  description: z
    .string()
    .min(5, { message: "La description doit contenir au moins 5 caractères" })
    .max(255, {
      message: "La description doit contenir au maximum 255 caractères",
    })
    .optional(),
});


export const statusUpdateValidation = z.object({
  label: z
    .string()
    .min(2, { message: "Le libéllé doit contenir au moins 2 caractères" })
    .max(50, { message: "Le libellé doit contenir au maximum 50 caractères" }),
  description: z
    .string()
    .min(5, { message: "La description doit contenir au moins 5 caractères" })
    .max(255, {
      message: "La description doit contenir au maximum 255 caractères",
    })
    .optional(),
});
