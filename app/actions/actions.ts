"use server";

import { prisma } from "@/app/lib/prisma";
import { revalidatePath } from "next/cache";

export async function addTodo(formData: FormData) {
  const work = formData.get("work");
  await prisma.todo.create({
    data: {
      work: work as string,
    },
  });

  revalidatePath("/");
}
