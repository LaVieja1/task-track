import { z } from "zod";

export const CreateList = z.object({
  title: z
    .string({
      required_error: "Nombre es requerido",
      invalid_type_error: "Nombre es requerido",
    })
    .min(3, {
      message: "Nombre es muy corto",
    }),
  boardId: z.string(),
});
