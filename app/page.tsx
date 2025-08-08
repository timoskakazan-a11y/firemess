import ChatList from "../components/ChatList";

export default function HomePage() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Ваши чаты</h1>
      <ChatList />
    </main>
  );
}
