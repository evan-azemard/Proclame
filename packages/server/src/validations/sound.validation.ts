import { z } from "zod";

export const soundCreateValidation = z.object({
  label: z
    .string()
    .min(2, { message: "Le libéllé doit contenir au moins 2 caractères." })
    .max(50, { message: "Le libéllé ne doit pas dépasser 50 caractères." }),
  description: z
    .string()
    .min(10, {
      message: "La description doit contenir au moins 10 caractères.",
    })
    .max(255, {
      message: "La description ne doit pas dépasser 255 caractères.",
    })
    .optional(),
  iconUri: z
    .string()
    .url({ message: "L'URL de l'icône n'est pas valide." })
    .max(255, {
      message: "L'URL de l'icône ne doit pas dépasser 255 caractères.",
    }),
  soundUri: z
    .string()
    .url({ message: "L'URL du son n'est pas valide." })
    .max(255, { message: "L'URL du son ne doit pas dépasser 255 caractères." }),
  statusId: z
    .string()
    .uuid({ message: "L'identifiant du statut doit être un UUID valide." }),
});

export const soundUpdateValidation = z.object({
  label: z
    .string()
    .min(2, { message: "Le libéllé doit contenir au moins 2 caractères." })
    .max(50, { message: "Le libéllé ne doit pas dépasser 50 caractères." })
    .optional(),
  description: z
    .string()
    .min(10, {
      message: "La description doit contenir au moins 10 caractères.",
    })
    .max(255, {
      message: "La description ne doit pas dépasser 255 caractères.",
    })
    .optional(),
  iconUri: z
    .string()
    .url({ message: "L'URL de l'icône n'est pas valide." })
    .max(255, {
      message: "L'URL de l'icône ne doit pas dépasser 255 caractères.",
    })
    .optional(),
  soundUri: z
    .string()
    .url({ message: "L'URL du son n'est pas valide." })
    .max(255, { message: "L'URL du son ne doit pas dépasser 255 caractères." })
    .optional(),
  statusId: z
    .string()
    .uuid({ message: "L'identifiant du statut doit être un UUID valide." })
    .optional(),
});
