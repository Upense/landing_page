"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";

/* =========================
   Types
========================== */
type Pkg = {
  key: "CFA" | "MVP" | "FPL";
  title: string;
  price?: string;
  term?: string;
  desc: string;
  features: string[];
};

type SLAPlan = {
  name: "SLA Silver" | "SLA Gold" | "SLA Platinum";
  price: string;          // ₽/мес
  bullets: string[];
};

/* =========================
   Animations
========================== */
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

/* =========================
   UI bits
========================== */
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

function MetaBadge({
  label,
  value,
}: {
  label: string;
  value?: string;
}) {
  if (!value) return null;
  return (
    <div className="flex h-12 w-full items-center rounded-xl border border-white/10 bg-black/40 px-4 text-sm">
      <span className="text-[#A3AEC2]">{label}:</span>
      <span className="ml-2 text-base font-semibold text-[#EBF1FF]">{value}</span>
    </div>
  );
}

/* =========================
   Price card (packages)
========================== */
function PriceCard({
  pkg,
  descStyle,
  descRef,
}: {
  pkg: Pkg;
  descStyle?: React.CSSProperties;
  descRef?: React.Ref<HTMLParagraphElement>;
}) {
  return (
    <motion.div
      variants={cardItem}
      whileHover={{ y: -6, scale: 1.015 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="group h-full rounded-xl border border-white/10 bg-[#0B0F14] p-6 sm:p-7 hover:shadow-xl hover:shadow-[#DCFF0F]/5"
    >
      <div className="flex h-full flex-col">
        <div className="mb-5">
          <BigBadge>{pkg.key}</BigBadge>
        </div>

        <p
          ref={descRef}
          style={descStyle}
          className="text-sm text-[#A3AEC2] leading-relaxed"
        >
          {pkg.desc}
        </p>

        <div className="mt-5 space-y-3">
          <MetaBadge label="Стоимость" value={pkg.price} />
          <MetaBadge label="Срок" value={pkg.term} />
        </div>

        <ul className="mt-5 space-y-2 text-sm text-[#A3AEC2] flex-1">
          {pkg.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2">
              <span
                aria-hidden
                className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#DCFF0F]"
              />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

/* =========================
   SLA section (3 plans)
========================== */
function SLASection() {
  const plans: SLAPlan[] = [
    {
      name: "SLA Silver",
      price: "49 000 ₽/мес",
      bullets: [
        "99.0% аптайм, реакция 8×5 / 4ч",
        "Мониторинг, краш-триаж, минорные обновления",
        "Включено 30 часов хотфиксов/мес",
      ],
    },
    {
      name: "SLA Gold",
      price: "99 000 ₽/мес",
      bullets: [
        "99.5% аптайм, 24×5 / 2ч",
        "Профилактические релизы, перф-тюнинг по бюджету",
        "Больше часов хотфиксов + приоритет в очереди",
      ],
    },
    {
      name: "SLA Platinum",
      price: "199 000 ₽/мес",
      bullets: [
        "99.9% аптайм, 24×7 / 1ч",
        "Дежурства, инцидент-менеджмент, post-mortems",
        "Расширенный бюджет хотфиксов/мес",
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mt-10 overflow-hidden rounded-xl border border-white/10 bg-[#0B0F14] p-6 sm:p-8"
    >
      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <BigBadge>SLA — поддержка и сопровождение</BigBadge>
        </div>
        {/* CTA при желании можно добавить сюда */}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.name}
            className="rounded-xl border border-white/10 bg-black/30 p-5"
          >
            <div className="mb-3">
              <div className="text-base font-semibold text-[#EBF1FF]">
                {p.name}
              </div>
              <div className="mt-2 flex h-12 w-full items-center rounded-xl border border-white/10 bg-black/40 px-4 text-sm">
                <span className="text-[#A3AEC2]">Стоимость:</span>
                <span className="ml-2 text-base font-semibold text-[#EBF1FF]">
                  {p.price}
                </span>
              </div>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-[#A3AEC2]">
              {p.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span
                    aria-hidden
                    className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#DCFF0F]"
                  />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* =========================
   Section
========================== */
export function Packages() {
  const pkgs: Pkg[] = useMemo(
    () => [
      {
        key: "CFA",
        title: "CFA — Core Feature App",
        price: "190 000 ₽",
        term: "1 месяц",
        desc:
          "Самый быстрый способ проверить гипотезу. Собираем приложение вокруг одного функционального модуля.\nЭто запуск без лишнего «обвеса» — только то, что нужно для проверки идеи и получения первых метрик.",
        features: [
          "Один ключевой модуль без сложных интеграций",
          "Разработка под iOS/Android",
          "Базовая аналитика и события",
          "Уведомления",
          "Стор-листинг",
        ],
      },
      {
        key: "MVP",
        title: "MVP — минимально жизнеспособный продукт",
        price: "от 390 000 ₽",
        term: "2-4 месяца",
        desc:
          "Минимально жизнеспособный продукт с базовыми сценариями, архитектурой и аналитикой. Цель — подтвердить ценность и подготовить фундамент для развития.",
        features: [
          "Несколько ключевых сценариев + авторизация",
          "UI-кит",
          "Бэкенд/API и простая админка",
          "Аналитика (Amplitude/Firebase) и QA",
          "Базовые автотесты",
        ],
      },
      {
        key: "FPL",
        title: "FPL — Full Production Launch",
        price: "от 990 000 ₽",
        term: "5-8 месяцев",
        desc:
          "Полноценный продакшен-релиз с доведённым UX, производительностью и безопасностью. Включает дизайн-систему, автотесты, мониторинг и релиз-менеджмент. Готово к росту и передаче знаний вашей команде.",
        features: [
          "Дизайн-система и полный UX-флоу",
          "Интеграции с бэкендом/CRM/платежами",
          "Производительность, мониторинг и логирование",
          "Автотесты P0/P1, CI/CD и релиз-менеджмент",
          "Доступность и безопасность",
        ],
      },
    ],
    []
  );

  // измеряем высоту описания у CFA и применяем как minHeight ко всем
  const cfaDescRef = useRef<HTMLParagraphElement>(null);
  const [descMinHeight, setDescMinHeight] = useState<number>();

  useEffect(() => {
    const measure = () => {
      const h = cfaDescRef.current?.offsetHeight;
      if (h && h > 0) setDescMinHeight(h);
    };

    const d = document as Document & { fonts?: { ready?: Promise<unknown> } };
    if (d.fonts?.ready) d.fonts.ready.then(measure).catch(() => measure());
    else measure();

    const ro = new ResizeObserver(measure);
    if (cfaDescRef.current) ro.observe(cfaDescRef.current);
    const onResize = () => measure();
    window.addEventListener("resize", onResize);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const descStyle = descMinHeight ? ({ minHeight: descMinHeight } as const) : undefined;

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
              Выберите формат под задачу — от проверки гипотезы до полноценного продакшн-релиза.
            </p>
          </div>
        </FadeIn>

        {/* Пакеты */}
        <motion.div
          variants={gridParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid items-stretch gap-6 sm:gap-7 lg:gap-8 md:grid-cols-3"
        >
          {pkgs.map((p) => (
            <PriceCard
              key={p.key}
              pkg={p}
              descRef={p.key === "CFA" ? cfaDescRef : undefined}
              descStyle={descStyle}
            />
          ))}
        </motion.div>

        {/* SLA блок под пакетами */}
        <SLASection />
      </div>
    </section>
  );
}