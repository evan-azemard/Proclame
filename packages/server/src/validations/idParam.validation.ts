import z from "zod";

export const idParamSchema = z.object({
  id: z.string().uuid({ message: "L'identifiant doit être un UUID valide." }),
});
