import "../styles/globals.css";

export const metadata = {
  title: "Firemess",
  description: "Патриотичный корпоративный мессенджер",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="bg-red-50 text-gray-900">{children}</body>
    </html>
  );
}
