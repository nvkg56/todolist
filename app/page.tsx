import { prisma } from "@/app/lib/prisma";
import TodosComponent from "@/app/component/todo-component";

export default async function Home() {
  const todos = await prisma.todo.findMany();

  return (
    <main className="flex flex-col min-h-screen items-center w-full p-24">
      <div className="text-5xl">List To Do</div>
      <TodosComponent todos={todos} />
    </main>
  );
}
