import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <nav>
          <a href="/products">Produtos</a>
          <br />
          <a href="/">Home</a>
        </nav>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
