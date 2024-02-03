"use server";

import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";

export async function deleteBoard(id: string) {
  await db.board.delete({
    where: {
      id,
    },
  });

  revalidatePath("/organization/org_2bpgSVsz4AXjA815od47Tln5E6o");
}
