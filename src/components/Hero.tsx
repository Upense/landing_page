"use client";

import { motion, type Variants } from "framer-motion";
import { DeviceImage } from "@/components/DeviceImage";

// Варианты анимаций заголовка
const titleParent: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.14, duration: 0.6, ease: "easeOut" },
  },
};

const titleLine: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section id="main" className="relative overflow-hidden bg-black scroll-mt-24 md:scroll-mt-28">
      {/* Акцентные свечения на фоне (поверх секции, но под контентом) */}
      <motion.div
        initial={{ opacity: 0.25, scale: 0.85 }}
        animate={{ opacity: [0.25, 0.45, 0.25], scale: [0.85, 1.2, 0.85] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[-12%] top-[-18%] -z-10 h-[46rem] w-[46rem] rounded-full bg-[#DCFF0F]/14 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0.18, scale: 0.9 }}
        animate={{ opacity: [0.18, 0.3, 0.18], scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        className="pointer-events-none absolute right-[8%] top-[10%] -z-10 h-[28rem] w-[28rem] rounded-full bg-[#DCFF0F]/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pt-28 pb-24 sm:px-6 md:pt-36 md:pb-36 md:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Левая колонка */}
        <div className="order-2 lg:order-1">
          <motion.h1
            variants={titleParent}
            initial="hidden"
            animate="show"
            className="font-extrabold leading-[0.85] tracking-tight text-[#EBF1FF] text-5xl sm:text-6xl md:text-7xl xl:text-[9rem]"
          >
            <motion.span variants={titleLine} className="block">
              Elevating
            </motion.span>
            <motion.span variants={titleLine} className="block">
              mobile
            </motion.span>

            {/* Акцент на ideas: тихий переливающийся градиент */}
            <motion.span
              variants={titleLine}
              className="block bg-gradient-to-r from-[#EBF1FF] via-[#DCFF0F] to-[#EBF1FF] bg-[length:200%_100%] bg-clip-text text-transparent"
              animate={{ backgroundPositionX: ["0%", "100%", "0%"] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            >
              ideas
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.5, ease: "easeOut" }}
            className="mt-6 max-w-xl text-base text-[#A3AEC2]"
          >
            Разрабатываем продукты под iOS и Android с вниманием к деталям.
          </motion.p>
        </div>

        {/* Правая колонка — телефоны (оставил как есть) */}
        <div className = "order-1 lg:order-2 hidden lg:flex relative items-center justify-center gap-4 lg:h-[560px]">
          {/* iPhone */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -16 }}
            animate={{ opacity: 1, y: 0, rotate: -10 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="origin-bottom-right"
          >
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [-10, -12, -10] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <DeviceImage src="/iPhone16.png" alt="iPhone mock with your screen" />
            </motion.div>
          </motion.div>

          {/* Android (пока тот же мок) */}
          <motion.div
            initial={{ opacity: 0, y: 60, rotate: 18 }}
            animate={{ opacity: 1, y: 0, rotate: 12 }}
            transition={{ duration: 0.75, delay: 0.25, ease: "easeOut" }}
            className="relative ml-4 sm:absolute sm:right-3 sm:top-16 origin-bottom-left"
          >
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [12, 14, 12] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            >
              <DeviceImage src="/iPhone16.png" alt="Android mock with your screen" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}