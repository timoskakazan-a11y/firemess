"use client";

import Link from "next/link";

const chats = [
  { id: 1, name: "Отдел маркетинга" },
  { id: 2, name: "Разработчики" },
];

export default function ChatList() {
  return (
    <ul className="space-y-2">
      {chats.map((chat) => (
        <li key={chat.id}>
          <Link href={`/chat/${chat.id}`} className="block p-4 rounded-lg bg-white hover:bg-red-100 shadow">
            {chat.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
