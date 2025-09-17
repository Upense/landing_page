// src/app/layout.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

// Google Inter (variable)
const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mobile App Development | Upense",
  description:
    "Студия разработки мобильных продуктов. CFA, MVP и бизнес-решения под iOS и Android.",
  // Эти поля можно оставить — но ключевое, что мы дублируем ещё и явными <link> в <head>
  icons: {
    icon: [
      { url: "/favicon.ico", rel: "icon" }, // базовый .ico
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  // Чтобы iOS/Android корректно подкрашивали UI
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0F14" },
  ],
  applicationName: "Upense",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <head>
        {/* ====== Favicon / Icons (явные ссылки) ====== */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        {/* PWA manifest (из архива favicon.io) */}
        <link rel="manifest" href="/site.webmanifest" />
        {/* Safari pinned tab (нужен монохромный svg) */}
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#DCFF0F" />

        {/* ====== Цвета оболочки браузера ====== */}
        <meta name="theme-color" content="#0B0F14" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />

        {/* (опционально) для Windows tiles */}
        <meta name="msapplication-TileColor" content="#0B0F14" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>

      <body className={`${inter.variable} antialiased bg-black text-[#EBF1FF]`}>
        {children}
      </body>
    </html>
  );
}