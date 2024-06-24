import React from "react";
import { useFormStatus } from "react-dom";

export default function Button() {
  const { pending } = useFormStatus();

  return (
    <button className="bg-orange-500 rounded px-4 py-2">
      {pending ? "Adding todo ..." : "Add"}
    </button>
  );
}
