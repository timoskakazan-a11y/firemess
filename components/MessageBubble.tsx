export default function MessageBubble({ from, text }: { from: "user" | "other", text: string }) {
  const isUser = from === "user";
  return (
    <div className={\`flex \${isUser ? "justify-end" : "justify-start"}\`}>
      <div className={\`px-4 py-2 rounded-lg max-w-xs \${isUser ? "bg-red-200" : "bg-gray-200"}\`}>
        {text}
      </div>
    </div>
  );
}
