"use client";

import { motion, type Variants } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";

type Pkg = {
  key: "CFA" | "MVP" | "Business+";
  title: string; // оставим в типе на будущее, но не отображаем
  price?: string;
  desc: string;
  features: string[];
};

// анимации
const gridParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

// общий бейдж
function BigBadge({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="inline-flex items-center gap-2 rounded-xl border border-[#DCFF0F]/40 bg-[#DCFF0F]/10 px-4 py-2
                 text-[#EBF1FF] text-sm sm:text-base font-semibold shadow-[0_0_0_1px_rgba(220,255,15,0.15)]
                 ring-1 ring-inset ring-[#DCFF0F]/10"
    >
      <span className="inline-block h-2 w-2 rounded-full bg-[#DCFF0F]" />
      {children}
    </motion.div>
  );
}

function PriceCard({ pkg }: { pkg: Pkg }) {
  return (
    <motion.div
      variants={cardItem}
      whileHover={{ y: -6, scale: 1.015 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="group h-full rounded-xl border border-white/10 bg-[#0B0F14] p-6 sm:p-7 hover:shadow-xl hover:shadow-[#DCFF0F]/5"
    >
      <div className="flex h-full flex-col">
        {/* КРУПНЫЙ БЕЙДЖ (вместо заголовка) */}
        <div className="mb-5">
          <BigBadge>{pkg.key}</BigBadge>
        </div>

        {/* Описание — 3 строки, фиксируем минимальную высоту, чтобы цена была на одном уровне */}
        <p className="text-sm text-[#A3AEC2] leading-relaxed line-clamp-3 min-h-[96px] sm:min-h-[108px] lg:min-h-[120px]">
          {pkg.desc}
        </p>

        {/* Цена — единый размер бейджа */}
        {pkg.price && (
          <div className="mt-5 inline-flex h-12 min-w-[220px] items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-4 text-sm">
            <span className="text-[#A3AEC2]">Стоимость:</span>
            <span className="text-base font-semibold text-[#EBF1FF]">{pkg.price}</span>
          </div>
        )}

        {/* Фичи — вниз, не смещают цену */}
        <ul className="mt-5 space-y-2 text-sm text-[#A3AEC2] flex-1">
          {pkg.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2">
              <motion.span
                aria-hidden
                className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#DCFF0F]"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2.4 + i * 0.2, repeat: Infinity, ease: "easeInOut" }}
              />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function EnterpriseCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0B0F14] p-6 sm:p-8"
    >
      <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          {/* Тот же крупный бейдж */}
          <BigBadge>Enterprise</BigBadge>

          <p className="mt-4 text-[#A3AEC2]">
            Интеграции с внутренними системами, безопасность, SLA и процессы корпоративного уровня.
          </p>
        </div>
        <div className="shrink-0">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl bg-[#DCFF0F] px-5 py-3 font-semibold text-black shadow-[0_0_0_1px_rgba(220,255,15,0.25)] hover:brightness-95"
          >
            Заказать консультацию
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export function Packages() {
  const pkgs: Pkg[] = [
    {
      key: "CFA",
      title: "CFA — Core Feature App",
      price: "190 000₽",
      desc:
        "Мини-приложение вокруг одного ключевого сценария. Проверяем гипотезу на реальных пользователях и получаем первые метрики. Запуск 2–4 недели, минимальные риски и бюджет.",
      features: [
        "Одна core-функция + базовый UX/UI",
        "Запуск тестов на реальных пользователях",
        "Подготовка к публикации в App Store / Google Play",
      ],
    },
    {
      key: "MVP",
      title: "MVP — минимально жизнеспособный продукт",
      price: "390 000₽ — 790 000₽",
      desc:
        "Первая полноценная версия с основными потоками и аналитикой. Авторизация, онбординг, пуши, отчёты — всё для выхода на рынок. Готова к публикации и дальнейшему росту.",
      features: [
        "Авторизация, профили, базовые роли",
        "Онбординг, события аналитики, пуш-уведомления",
        "UI-кит и дизайн-система первого уровня",
      ],
    },
    {
      key: "Business+",
      title: "Business+ — продукт для растущего бизнеса",
      price: "от 790 000₽",
      desc:
        "Расширенный функционал, интеграции и масштабируемая архитектура для активного роста.",
      features: [
        "Интеграции с бэкендом/CRM/платежами",
        "Ролевые модели, офлайн-режим, кеширование",
        "Тестирование и настройка процессов релизов",
      ],
    },
  ];

  return (
    <section
      id="packages"
      className="scroll-mt-[273px] md:scroll-mt-[288px] relative border-t border-white/5 bg-black py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <FadeIn>
          <div className="mb-10 text-left">
            <div className="inline-block">
              <h2 className="text-3xl font-semibold tracking-tight text-[#EBF1FF] inline-block">
                Услуги и цены
              </h2>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                style={{ originX: 0 }}
                className="mt-2 block h-0.5 w-full bg-[#DCFF0F]"
              />
            </div>
            <p className="mt-3 text-sm text-[#A3AEC2]">
              Выберите формат под задачу — от одной core-функции до корпоративных внедрений.
            </p>
          </div>
        </FadeIn>

        {/* Карточки */}
        <motion.div
          variants={gridParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid items-stretch gap-6 sm:gap-7 lg:gap-8 md:grid-cols-3"
        >
          {pkgs.map((p) => (
            <PriceCard key={p.key} pkg={p} />
          ))}
        </motion.div>

        {/* Enterprise */}
        <div className="mt-8 sm:mt-10 lg:mt-12">
          <EnterpriseCard />
        </div>
      </div>
    </section>
  );
}