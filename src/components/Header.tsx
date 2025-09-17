"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { id: "cases", label: "Проекты" },
  { id: "packages", label: "Услуги и цены" },
  { id: "process", label: "Как мы работаем" },
  { id: "contact", label: "Контакты" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  // Прогресс-бар оставим только ≥ md
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.3 });
  const onNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault();
  setOpen(false);

  const el = document.getElementById(id);
  if (!el) return;

  const header = document.querySelector("header");
  const offset = header
    ? (header as HTMLElement).getBoundingClientRect().height
    : 0;

  // позиция секции относительно документа
  const top = window.scrollY + el.getBoundingClientRect().top - offset - 8; // небольшой зазор

  window.scrollTo({ top, behavior: "smooth" });
};
  useEffect(() => {
    const onHashChange = () => setOpen(false);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="relative">
        {/* Прогресс-полоска: видно только на десктопе, лежит ПОВЕРХ блюра */}
        <motion.div
          style={{ scaleX, transformOrigin: "left" }}
          className="pointer-events-none absolute inset-x-0 top-0 hidden md:block h-[3px] bg-[#DCFF0F] z-20"
        />

        {/* Сам бар */}
        <div className="bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/55 border-b border-white/5">
          {/* skip link */}
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[#DCFF0F] focus:px-3 focus:py-2 focus:text-black"
          >
            Перейти к содержанию
          </a>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 safe-y">
            <div className="flex items-center justify-between gap-4">
              {/* Лого */}
              <a href="#main" className="flex items-center gap-3">
                <img
                  src="/upense_logo_split.png"
                  alt="Upense"
                  className="h-8 w-auto select-none"
                  draggable={false}
                />
                <span className="sr-only">Upense</span>
              </a>

              {/* Десктоп-меню */}
              <nav className="hidden md:flex items-center gap-8">
                {links.map((l) => (
  <a
    key={l.id}
    href={`#${l.id}`}
    onClick={(e) => onNavClick(e, l.id)}
    className="group relative text-[#EBF1FF]/80 hover:text-[#EBF1FF] ..."
  >
    <span>{l.label}</span>
    <span className="pointer-events-none absolute -bottom-1 left-0 block h-[2px] w-0 bg-[#DCFF0F] transition-[width] duration-300 ease-out group-hover:w-full" />
  </a>
))}
              </nav>

              {/* CTA + бургер */}
              <div className="flex items-center gap-3">
                <a
                  href="mailto:hello@upense.com"
                  className="hidden md:inline-flex items-center justify-center rounded-xl border border-[#DCFF0F]/40 bg-[#DCFF0F] px-4 py-2 text-sm font-semibold text-black shadow-[0_0_0_1px_rgba(220,255,15,0.2)] hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DCFF0F]"
                >
                  Обсудить проект
                </a>
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
                    <a
                      key={l.id}
                      href={`#${l.id}`}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-2 text-[#EBF1FF] hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DCFF0F]"
                    >
                      {l.label}
                    </a>
                  ))}
                  <a
                    href="mailto:hello@upense.com"
                    onClick={() => setOpen(false)}
                    className="mt-2 inline-flex w-full items-center justify-center rounded-xl border border-[#DCFF0F]/40 bg-[#DCFF0F] px-4 py-2 text-sm font-semibold text-black"
                  >
                    Обсудить проект
                  </a>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}