"use server";

import { z } from "zod";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type State = {
  errors?: {
    title?: string[];
  },
  message?: string | null;
};

const CreateBoard = z.object({
  title: z.string().min(3, {
    message: "Minimo de 3 caracteres es requerido",
  }),
});

export async function create(prevState: State, formData: FormData) {
  const validatedFields = CreateBoard.safeParse({
    title: formData.get("title"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Campos faltantes.",
    };
  }

  const { title } = validatedFields.data;

  try {
    await db.board.create({ data: { title } });
  } catch (error) {
    return {
      message: "Error de db",
    };
  }

  revalidatePath("/organization/org_2bpgSVsz4AXjA815od47Tln5E6o");
  redirect("/organization/org_2bpgSVsz4AXjA815od47Tln5E6o");
}
