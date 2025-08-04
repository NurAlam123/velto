import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "@/fonts";

export const metadata: Metadata = {
  title: "Velto",
  description: "Velto is a collection of random ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased font-montserrat`}>
        {children}
      </body>
    </html>
  );
}
