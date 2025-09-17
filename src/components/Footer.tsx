"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer 
    id="contact"
    className="relative overflow-hidden border-t border-white/5 bg-[#0B0F14]">
      {/* Фоновое «дышащее» свечение */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 -bottom-24 h-80 w-80 rounded-full bg-[#DCFF0F]/10 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Верхний CTA-блок */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
        <div className="flex items-start justify-between gap-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-[#EBF1FF]">
              Давайте создадим что-то классное{" "}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10 text-[#DCFF0F]">вместе</span>
                <span
                  aria-hidden
                  className="absolute inset-x-1 -bottom-1 -z-0 block h-2 rounded-full bg-[#DCFF0F]/20 blur-[2px]"
                />
              </span>
              .
            </h2>
            <p className="mt-4 text-base text-[#A3AEC2]">
              Красиво, надёжно и в срок: мы поможем вырастить идею в продукт.
            </p>

            <motion.a
              href="mailto:hello@upense.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#DCFF0F] px-5 py-3 font-semibold text-black shadow-[0_0_0_1px_rgba(220,255,15,0.25)] hover:brightness-95"
            >
              Обсудить проект
            </motion.a>
          </div>

          <motion.img
            src="/upense_symbol.png"
            alt="Upense"
            className="hidden sm:block h-16 w-auto select-none"
            draggable={false}
            whileHover={{ rotate: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          />
        </div>

        <div className="mt-10 border-t border-white/10" />
      </section>

      {/* Средняя часть: 2 столбца — Навигация и Контакты */}
<section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
  <div className="grid grid-cols-2 gap-8">
    {/* Навигация */}
    <div>
      <h3 className="text-sm font-semibold text-[#EBF1FF]">Навигация</h3>
      <ul className="mt-4 space-y-3 text-sm">
        {[
          { href: "#main", label: "Главная" },
          { href: "#cases", label: "Проекты" },
          { href: "#packages", label: "Услуги и цены" },
          { href: "#process", label: "Как мы работаем" },
        ].map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="group inline-block text-[#A3AEC2] transition-colors hover:text-[#EBF1FF]"
            >
              {l.label}
              <span className="block h-px w-0 bg-[#DCFF0F] transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Контакты */}
    <div>
      <h3 className="text-sm font-semibold text-[#EBF1FF]">Контакты</h3>
      <ul className="mt-4 space-y-3 text-sm">
        {/* Email */}
        <li>
          <a
            href="mailto:hello@upense.com"
            className="group inline-flex sm:inline-grid sm:grid-cols-[1fr_auto] sm:items-center gap-2 text-[#A3AEC2] transition-colors hover:text-[#EBF1FF]"
          >
            <span className="inline-flex items-center gap-2">
              <svg aria-hidden className="h-4 w-4 opacity-80 group-hover:opacity-100" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.01L12 12 4 6.01V6h16ZM4 18V8l8 6 8-6v10H4Z" />
              </svg>
              <span className="relative inline-block">
                <span>hello@upense.com</span>
                <span className="pointer-events-none absolute -bottom-1 left-0 block h-px w-0 bg-[#DCFF0F] transition-all duration-300 group-hover:w-full" />
              </span>
            </span>
          </a>
        </li>

        {/* Telegram */}
        <li>
          <a
            href="https://t.me/upense_dev"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex sm:inline-grid sm:grid-cols-[1fr_auto] sm:items-center gap-2 text-[#A3AEC2] transition-colors hover:text-[#EBF1FF]"
          >
            <span className="inline-flex items-center gap-2">
              <svg aria-hidden className="h-[18px] w-[18px] opacity-80 group-hover:opacity-100" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.993 15.2 9.86 18.3c.34 0 .49-.15.67-.33l1.61-1.55 3.34 2.45c.61.34 1.05.16 1.21-.56l2.2-10.3c.2-.93-.34-1.3-.93-1.07L5.01 10.92c-.88.34-.86.83-.15 1.05l3.3 1.03 7.68-4.85c.36-.22.69-.1.42.12L9.993 15.2z" />
              </svg>
              <span className="relative inline-block">
                <span>@upense_dev</span>
                <span className="pointer-events-none absolute -bottom-1 left-0 block h-px w-0 bg-[#DCFF0F] transition-all duration-300 group-hover:w-full" />
              </span>
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</section>

      {/* Нижняя плашка */}
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-6 text-xs text-[#A3AEC2] sm:px-6 lg:px-8">
          <span>© {new Date().getFullYear()} Upense</span>
          <div className="flex items-center gap-3 sm:gap-4">
            <a href="#" className="hover:text-[#EBF1FF]">
              Политика конфиденциальности
            </a>
            <span aria-hidden>•</span>
            <a href="#" className="hover:text-[#EBF1FF]">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}