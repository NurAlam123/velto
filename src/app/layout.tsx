import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "@/fonts";

export const metadata: Metadata = {
  title: "Velto",
  description:
    "A collection of interactive UI components and micro-interactions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased font-montserrat`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
