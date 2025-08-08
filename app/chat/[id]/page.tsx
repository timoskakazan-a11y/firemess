"use client";
import { useParams } from "next/navigation";
import MessageBubble from "@/components/MessageBubble";
import MessageInput from "@/components/MessageInput";

export default function ChatPage() {
  const { id } = useParams();

  return (
    <main className="flex flex-col h-screen p-4">
      <h2 className="text-xl font-bold mb-2">Чат #{id}</h2>
      <div className="flex-1 overflow-y-auto space-y-2">
        <MessageBubble from="user" text="Привет!" />
        <MessageBubble from="other" text="Здравствуйте!" />
      </div>
      <MessageInput />
    </main>
  );
}
