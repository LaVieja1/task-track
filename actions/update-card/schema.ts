import { z } from "zod";

export const UpdateCard = z.object({
  boardId: z.string(),
  description: z.optional(
    z
      .string({
        required_error: "Descripción es requerida",
        invalid_type_error: "Descripción es requerida",
      })
      .min(3, {
        message: "Descripción es muy corta",
      })
  ),
  title: z.optional(
    z
      .string({
        required_error: "Nombre es requerido",
        invalid_type_error: "Nombre es requerido",
      })
      .min(3, {
        message: "Nombre es muy corto",
      })
  ),
  id: z.string(),
});
