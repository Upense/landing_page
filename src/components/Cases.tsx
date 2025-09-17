"use client";

import { motion, type Variants } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";
import Image from "next/image";

type Project = {
  id: number;
  title: string;
  desc: string;
  time: string;
  images: string[];
};

type CaseCategory = {
  key: string;
  title: string;
  projects: Project[];
};

const cases: CaseCategory[] = [
  {
    key: "cfa",
    title: "CFA",
    projects: [
      {
        id: 1,
        title: "Swipe Ledger",
        desc: "Одно ключевое действие. Проверка гипотезы и быстрый рынок.",
        time: "5 недель",
        images: ["/main_screen.png", "/main_screen.png", "/main_screen.png"],
      },
    ],
  },
  {
    key: "mvp",
    title: "MVP",
    projects: [
      {
        id: 1,
        title: "PaceFlow — Workout Timer",
        desc: "Базовые фичи: регистрация, лента, аналитика.",
        time: "2 месяца",
        images: ["/main_screen.png", "/main_screen.png", "/main_screen.png"],
      },
      {
        id: 2,
        title: "Houndly: Dog Care & Walks",
        desc: "Фокус на узком сценарии, минимум функций.",
        time: "2 месяца",
        images: ["/main_screen.png", "/main_screen.png", "/main_screen.png"],
      },
      {
        id: 3,
        title: "Cleaner",
        desc: "Фокус на узком сценарии, минимум функций.",
        time: "3 месяца",
        images: ["/main_screen.png", "/main_screen.png", "/main_screen.png"],
      },
    ],
  },
  {
    key: "biz",
    title: "Business+",
    projects: [
      {
        id: 1,
        title: "Достопримечательности Самарской области",
        desc: "Каталоги, заявки, отчёты, роли пользователей.",
        time: "5 месяцев",
        images: ["/main_screen.png", "/main_screen.png", "/main_screen.png"],
      },
    ],
  },
];

const gridParent: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export function Cases() {
  return (
    <section
      id="cases"
      className="relative bg-black scroll-mt-[273px] md:scroll-mt-32 py-16 sm:py-20 lg:py-24 border-t border-white/5"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-10 text-left">
            <div className="inline-block">
              <h2 className="text-3xl font-semibold tracking-tight text-[#EBF1FF] inline-block">
                Проекты
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
            <p className="mt-3 text-sm text-[#A3AEC2] max-w-2xl">
              Примеры проектов, которые мы запускали в разных форматах.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-16">
          {cases.map((cat) => (
            <div key={cat.key}>
              <FadeIn>
                <h3 className="text-2xl font-semibold text-[#EBF1FF] mb-6">
                  {cat.title}
                </h3>
              </FadeIn>

              <motion.div
                variants={gridParent}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="grid items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3"
              >
                {cat.projects.map((p) => (
                  <motion.div
                    key={p.id}
                    variants={cardItem}
                    whileHover={{ y: -6, scale: 1.015 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="group h-full rounded-xl border border-white/10 bg-[#0B0F14] p-6 hover:shadow-xl hover:shadow-[#DCFF0F]/5"
                  >
                    <div className="flex h-full flex-col">
                      {/* 3 изображения */}
                      <div className="mb-4 grid grid-cols-3 gap-2">
                        {p.images.map((src, i) => (
                          <motion.div
                            key={i}
                            animate={{ y: [0, -6, 0] }}
                            transition={{
                              duration: 4.5 + i * 0.4,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: i * 0.2,
                            }}
                            className="relative aspect-[393/852] rounded-xl overflow-hidden border border-white/10"                          >
                            <Image
                              src={src}
                              alt={`${p.title} — экран ${i + 1}`}
                              fill
                              className="object-cover"
                              sizes="(min-width:1024px) 120px, (min-width:640px) 100px, 90px"
                            />
                          </motion.div>
                        ))}
                      </div>

                      {/* Текст */}
                      <h4 className="text-lg font-semibold text-[#EBF1FF]">
                        {p.title}
                      </h4>
                      <p className="mt-2 text-sm text-[#A3AEC2] flex-1">
                        {p.desc}
                      </p>

                      {/* Бейдж фиксированного размера */}
                      <div className="mt-4 inline-flex h-10 w-40 items-center justify-center gap-2 rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-[#EBF1FF]">
                        <span className="opacity-70">Срок:</span>
                        <span className="font-medium">{p.time}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}