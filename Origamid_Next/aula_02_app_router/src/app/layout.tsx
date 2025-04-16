import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/menu";


export const metadata: Metadata = {
  title: "Next - App Router",
  description: "Curso Origamid Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Menu />
        {children}
      </body>
    </html>
  );
}
