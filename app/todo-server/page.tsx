import { prisma } from "@/app/lib/prisma";
import { revalidatePath } from "next/cache";

export default async function Home() {
  const todos = await prisma.todo.findMany();

  async function addTodo(formData: FormData) {
    "use server";
    const work = formData.get("work");
    await prisma.todo.create({
      data: {
        work: work as string,
      },
    });
    revalidatePath("/");
  }
  return (
    <main className="flex flex-col min-h-screen items-center w-full p-24">
      <div className="text-5xl">List To Do</div>
      <form action={addTodo} className="flex flex-col w-[300px] my-16">
        <label>
          <input
            className="text-slate-900 px-4 py-2 mb-3"
            type="text"
            name="work"
            placeholder="Write your todo..."
            required
          />
        </label>

        <label>
          <button
            className="bg-orange-500 rounded px-4 py-2"
            type="submit"
            name="submitButton"
          >
            ADD
          </button>
        </label>
      </form>
      <hr />
      {todos.map((todo) => (
        <li key={todo.id}>{todo.work}</li>
      ))}
    </main>
  );
}
