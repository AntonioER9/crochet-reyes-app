import type { Metadata } from "next";
import { inter } from "@/config/fonts";

import "./globals.css";


export const metadata: Metadata = {
  title: {
    template: '%s - Crochet Reyes | Tienda',
    default: 'Crochet Reyes | Tienda'
  },
  description: "Tienda virtual de Amigurumis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
