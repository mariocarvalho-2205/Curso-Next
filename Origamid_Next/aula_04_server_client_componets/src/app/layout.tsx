import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/menu/menu";



export const metadata: Metadata = {
  title: "Curso Next - Server and Client",
  description: "Curso Origamid Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body >
        <Menu />
        {children}
      </body>
    </html>
  );
}
