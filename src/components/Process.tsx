"use client";

import React from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";
import {
  Search,
  Ruler,
  CalendarClock,
  Code2,
  TestTube,
  Rocket,
  BarChart3,
  Wrench,
} from "lucide-react";

type Step = {
  id: string;
  phase: "A" | "B";
  title: string;
  icon: React.ReactNode;
  bullets: string[];
};

const steps: Step[] = [
  { id: "A1", phase: "A", title: "Спецификация и планирование", icon: <Search className="h-5 w-5" />, bullets: [
    "Дискавери-сессии: цели, аудитория, ключевые сценарии.",
    "Техстек и архитектура: баланс стоимости и функциональности.",
    "Черновой бэклог и критерии успеха (KPIs).",
  ]},
  { id: "A2", phase: "A", title: "Дизайн, wireframe и прототип", icon: <Ruler className="h-5 w-5" />, bullets: [
    "Вайрфреймы → кликабельный прототип.",
    "Проверка UX на реальных сценариях.",
    "Определение визуального стиля и основ дизайн-системы.",
  ]},
  { id: "A3", phase: "A", title: "Оценка и таймлайн", icon: <CalendarClock className="h-5 w-5" />, bullets: [
    "Детальная смета по объёму работ.",
    "Декомпозиция по спринтам и контрольным точкам.",
    "Варианты оптимизации бюджета.",
  ]},
  { id: "B1", phase: "B", title: "Сборка", icon: <Code2 className="h-5 w-5" />, bullets: [
    "Инкрементальная разработка по Lean-подходу.",
    "CI/CD, код-ревью, стандарты кодирования.",
    "Фичи в конце каждого спринта для обратной связи.",
  ]},
  { id: "B2", phase: "B", title: "Тестирование", icon: <TestTube className="h-5 w-5" />, bullets: [
    "Ручное тестирование на реальных устройствах.",
    "Автотесты (юнит/инструментальные), регрессия.",
    "Поддержка матрицы устройств: iOS/Android/веб.",
  ]},
  { id: "B3", phase: "B", title: "Деплой", icon: <Rocket className="h-5 w-5" />, bullets: [
    "Сборки в TestFlight / внутреннее распределение.",
    "Публикация в App Store / Google Play.",
    "Краш-репорты и логирование (Firebase/Sentry).",
  ]},
  { id: "B4", phase: "B", title: "Измерение", icon: <BarChart3 className="h-5 w-5" />, bullets: [
    "Метрики: активации, ретеншн, воронки, события.",
    "Бета-запуски и A/B-тесты.",
    "Сессии обратной связи, приоритезация улучшений.",
  ]},
  { id: "B5", phase: "B", title: "Поддержка", icon: <Wrench className="h-5 w-5" />, bullets: [
    "SLA, мониторинг, обновления библиотек и ОС.",
    "Roadmap дальнейшего развития.",
    "Оперативное исправление багов.",
  ]},
];

/* Variants */
const detailIn: Variants = {
  hidden: { opacity: 0, y: 10 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
  exit:   { opacity: 0, y: -8, transition: { duration: 0.2 } },
};
const bulletsParent: Variants = { show: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } } };
const bulletItem: Variants = { hidden: { opacity: 0, x: -8 }, show: { opacity: 1, x: 0, transition: { duration: 0.25 } } };

/* UI */
function StepItem({
  active,
  onClick,
  step,
}: {
  active: boolean;
  onClick: () => void;
  step: Step;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ x: 4 }}
      className="group relative mb-2 w-full pl-12 text-left"
    >
      {/* ID слева */}
      <span className="absolute left-0 top-1/2 -translate-y-1/2 select-none text-[11px] font-semibold tracking-wide text-[#A3AEC2]">
        {step.id}
      </span>

      {/* Пульсирующая точка */}
      <motion.span
        aria-hidden
        animate={
          active
            ? {
                scale: [1, 1.2, 1],
                boxShadow: [
                  "0 0 0 0 rgba(220,255,15,0)",
                  "0 0 0 6px rgba(220,255,15,0.15)",
                  "0 0 0 0 rgba(220,255,15,0)",
                ],
              }
            : {}
        }
        transition={active ? { duration: 1.8, repeat: Infinity, ease: "easeInOut" } : {}}
        className={`absolute left-6 top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full ${
          active ? "bg-[#DCFF0F]" : "bg-white/30"
        }`}
      />

      {/* Подсветка активного элемента */}
      <AnimatePresence>
        {active && (
          <motion.div
            layoutId="stepHighlight"
            className="absolute inset-[-4px] rounded-full bg-[#DCFF0F]/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      {/* Плашка */}
      <div
        className={`relative rounded-xl border px-4 py-4 pr-5 transition-colors flex items-center gap-3 ${
          active
            ? "border-[#DCFF0F]/60 bg-black/40"
            : "border-white/10 bg-black/20 group-hover:bg-white/5"
        }`}
      >
        <span
          
        >
          <span className={`text-[#EBF1FF] ${active ? "" : "opacity-80"}`}>{step.icon}</span>
        </span>
        <span className={`text-sm ${active ? "text-[#EBF1FF]" : "text-[#EBF1FF]/85"}`}>
          {step.title}
        </span>
      </div>
    </motion.button>
  );
}

export function Process() {
  const [activeId, setActiveId] = React.useState<string>("A1");
  const active = steps.find((s) => s.id === activeId)!;

  const renderGroup = (phase: "A" | "B", label: string) => (
    <div className="mb-5">
      <div className="mb-2 pl-12 text-[11px] font-semibold uppercase tracking-wider text-[#A3AEC2]">
        {label}
      </div>
      {steps
        .filter((s) => s.phase === phase)
        .map((s) => (
          <StepItem
            key={s.id}
            step={s}
            active={s.id === activeId}
            onClick={() => {
              setActiveId(s.id);
              if (typeof window !== "undefined" && window.innerWidth < 1024) {
                document.getElementById("process-detail")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
          />
        ))}
    </div>
  );

  return (
    <section id="process" className="relative border-t border-white/5 bg-black scroll-mt-28 md:scroll-mt-32 py-16 sm:py-20 lg:py-24">
      {/* ЕДИНЫЙ СТИЛЬ ШАПКИ (как в Cases/Packages) */}
      <FadeIn>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10 text-left">
  {/* Обёртка с шириной по содержимому */}
  <div className="inline-block">
    <h2 className="text-3xl font-semibold tracking-tight text-[#EBF1FF] inline-block">
      Как мы работаем
    </h2>

    {/* Линия-подчёркивание на всю ширину заголовка */}
    <motion.span
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      style={{ originX: 0 }}
      className="mt-2 block h-0.5 w-full bg-[#DCFF0F]"
    />
  </div>

  <p className="mt-3 text-sm text-[#A3AEC2] max-w-3xl">
    Процесс — это наша экспертиза и методология: предсказуемый результат на каждом этапе.
  </p>
</div>
      </FadeIn>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-3 lg:gap-12 lg:px-8">
        {/* Левый сайдбар */}
        <aside className="lg:col-span-1 lg:sticky lg:top-24 self-start">
          <div className="relative">
            <div className="absolute left-7 top-0 bottom-0 w-px bg-white/10" />
            {renderGroup("A", "ФАЗА A — R&D")}
            {renderGroup("B", "ФАЗА B — Разработка")}
          </div>
        </aside>

        {/* Контент */}
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              id="process-detail"
              variants={detailIn}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <div className="rounded-xl border border-white/10 bg-[#0B0F14] p-6 sm:p-8">
                <div className="mb-2 inline-flex items-center gap-2 rounded-xl border border-[#DCFF0F]/30 bg-black/40 px-3 py-1 text-xs text-[#A3AEC2]">
                  {active.id}
                </div>
                <h3 className="text-2xl font-semibold text-[#EBF1FF]">{active.title}</h3>

                <motion.ul
                  className="mt-5 list-disc space-y-3 pl-5 text-[#A3AEC2] marker:text-[#DCFF0F]"
                  variants={bulletsParent}
                  initial="hidden"
                  animate="show"
                >
                  {active.bullets.map((b, i) => (
                    <motion.li key={i} variants={bulletItem}>
                      {b}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}