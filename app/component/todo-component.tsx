"use client";

import { addTodo } from "@/app/actions/actions";
import Button from "@/app/component/button";
import React, { useRef } from "react";

type Todo = {
  id: number;
  work: string;
};
type TodosComponentProps = {
  todos: Todo[];
};

export default function TodosComponent({ todos }: TodosComponentProps) {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <div>
      <form
        ref={ref}
        action={async (formData) => {
          ref.current?.reset();
          await addTodo(formData);
        }}
        className="flex flex-col w-[300px] my-16"
      >
        <label>
          <input
            className="text-slate-900 px-4 py-2 mb-3"
            type="text"
            name="work"
            placeholder="Write your todo..."
            required
          />
        </label>
        <Button />
      </form>
      <hr />
      <ul className="list-disc">
        {todos.map((todo) => (
          <li key={todo.id}>{todo.work}</li>
        ))}
      </ul>
    </div>
  );
}
