import { z } from "zod";

export const UpdateBoard = z.object({
  title: z
    .string({
      required_error: "Nombre es requerido",
      invalid_type_error: "Nombre es requerido",
    })
    .min(3, {
      message: "Nombre es muy corto",
    }),
  id: z.string(),
});
