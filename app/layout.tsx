import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";



export const metadata: Metadata = {
  title: "Link Sharing App",
  description: "Sharing Links Accross Board",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
