import { z } from "zod";

export const CreateBoard = z.object({
  title: z
    .string({
      required_error: "Nombre es requerido",
      invalid_type_error: "Nombre es requerido",
    })
    .min(3, {
      message: "Nombre es muy corto",
    }),
  image: z.string({
    required_error: "Imagen es requerida",
    invalid_type_error: "Imagen es requerida",
  }),
});
