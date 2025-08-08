"use client";
import { useState } from "react";

export default function MessageInput() {
  const [message, setMessage] = useState("");

  return (
    <form className="mt-2 flex gap-2" onSubmit={(e) => { e.preventDefault(); setMessage(""); }}>
      <input
        className="flex-1 p-2 border rounded-lg"
        placeholder="Сообщение..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" className="px-4 py-2 bg-red-500 text-white rounded-lg">Отправить</button>
    </form>
  );
}
