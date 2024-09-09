import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "../providers/StoreProvider";
import NextAuthSessionProvider from "@/providers/sessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chamados",
  description: "Organização das demandas internas realizadas pela autarquia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <NextAuthSessionProvider>
        <StoreProvider>
          <body className={inter.className}>{children}</body>
        </StoreProvider>
      </NextAuthSessionProvider>
    </html>
  );
}
