"use client";

import React, { useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { id: "cases", label: "Проекты" },
  { id: "packages", label: "Услуги и цены" },
  { id: "process", label: "Как мы работаем" },
  { id: "contact", label: "Контакты" }, // ← новый пункт
];

export function Header() {
  const [open, setOpen] = useState(false);

  // Прогресс-бар прокрутки
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.3,
  });

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Полоска прогресса поверх хедера */}
      <div className="relative">
        <motion.div
          style={{ scaleX }}
          className="pointer-events-none absolute inset-x-0 top-0 h-0.5 sm:h-1 origin-left bg-[#DCFF0F] z-[60]"
        />

        {/* Навбар */}
        <div className="bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/55 border-b border-white/5">
          {/* Ссылка для скринридеров */}
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[#DCFF0F] focus:px-3 focus:py-2 focus:text-black"
          >
            Перейти к содержанию
          </a>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between gap-4">
              {/* Логотип */}
              <motion.a
                href="#main"
                whileHover={{ rotate: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3"
              >
                <img
                  src="/upense_logo_split.png"
                  alt="Upense"
                  className="h-8 w-auto select-none"
                  draggable={false}
                />
                <span className="sr-only">Upense</span>
              </motion.a>

              {/* Десктоп-меню */}
              <nav className="hidden md:flex items-center gap-8">
                {links.map((l) => (
                  <a
                    key={l.id}
                    href={`#${l.id}`}
                    className="group relative text-[#EBF1FF]/80 hover:text-[#EBF1FF] transition-colors ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DCFF0F] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    <span>{l.label}</span>
                    <span className="pointer-events-none absolute -bottom-1 left-0 block h-[2px] w-0 bg-[#DCFF0F] transition-[width] duration-300 ease-out group-hover:w-full" />
                  </a>
                ))}
              </nav>

              {/* CTA + бургер */}
              <div className="flex items-center gap-3">
                <motion.a
                  href="mailto:hello@upense.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden md:inline-flex items-center justify-center rounded-xl border border-[#DCFF0F]/40 bg-[#DCFF0F] px-4 py-2 text-sm font-semibold text-black shadow-[0_0_0_1px_rgba(220,255,15,0.2)] hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DCFF0F]"
                >
                  Обсудить проект
                </motion.a>
                <button
                  className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-[#EBF1FF] hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DCFF0F]"
                  aria-label={open ? "Закрыть меню" : "Открыть меню"}
                  onClick={() => setOpen((v) => !v)}
                >
                  {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Мобильное меню */}
          <AnimatePresence>
            {open && (
              <motion.nav
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="md:hidden border-t border-white/10 bg-black/90"
              >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 space-y-1">
                  {links.map((l) => (
                    <motion.a
                      key={l.id}
                      href={`#${l.id}`}
                      onClick={() => setOpen(false)}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                      className="block rounded-lg px-3 py-2 text-[#EBF1FF] hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DCFF0F]"
                    >
                      {l.label}
                    </motion.a>
                  ))}
                  <motion.a
                    href="mailto:hello@upense.com"
                    onClick={() => setOpen(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-2 inline-flex w-full items-center justify-center rounded-xl border border-[#DCFF0F]/40 bg-[#DCFF0F] px-4 py-2 text-sm font-semibold text-black"
                  >
                    Обсудить проект
                  </motion.a>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}