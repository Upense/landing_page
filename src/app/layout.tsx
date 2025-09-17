// src/app/layout.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google"; // ← Inter variable
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"], // кириллица для русского
  display: "swap",
  variable: "--font-inter",       // CSS-переменная
  // Если хочешь строго фиксированные веса, укажи:
  // weight: ["400","500","600","700","800"],
  // Иначе оставь пустым — будет variable по оси wght
});

export const metadata: Metadata = {
  title: "Mobile App Development | Upense",
  description:
    "Студия разработки мобильных продуктов. CFA, MVP и бизнес-решения под iOS и Android.",
  icons: {
    icon: "/favicon.ico",
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#DCFF0F" />
      </head>
      <body className={`${inter.variable} antialiased bg-black text-[#EBF1FF]`}>
        {children}
      </body>
    </html>
  );
}