"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "Pre-built Applications",
    description:
      "Launch faster with ready-to-deploy applications designed for common enterprise workflows, governance, and measurable outcomes.",
  },
  {
    title: "Application Accelerators",
    description:
      "Compose integrations quickly with reusable building blocks, connectors, and templates that reduce implementation effort.",
  },
  {
    title: "Tailored Applications",
    description:
      "Create domain-specific experiences aligned to your business context, security policies, and operational guardrails.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function EnterpriseApplicationsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-slate-100 to-slate-50 py-16 sm:py-20">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        initial="hidden"
        animate="show"
      >
        <motion.div
          className="absolute -top-24 left-1/3 h-56 w-56 rounded-full bg-sky-200/30 blur-3xl"
          animate={{ x: [0, 18, -8, 0], y: [0, 10, -6, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-slate-300/30 blur-3xl"
          animate={{ x: [0, -20, 8, 0], y: [0, -12, 6, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.article
            variants={cardVariants}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 16px 48px rgba(56, 189, 248, 0.16)",
              borderColor: "rgba(186, 230, 253, 0.85)",
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="rounded-2xl border border-white/40 bg-white/45 p-6 shadow-[0_8px_24px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:p-8"
          >
            <h3 className="text-xl font-semibold text-gray-700">{cards[0].title}</h3>
            <p className="mt-3 text-sm leading-6 text-gray-500">{cards[0].description}</p>
            <div className="mt-6">
              <input
                type="text"
                placeholder="Search applications..."
                className="w-full rounded-full border border-white/60 bg-white/70 px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 outline-none transition focus:border-sky-200 focus:ring-2 focus:ring-sky-100"
              />
            </div>
          </motion.article>

          <motion.article
            variants={cardVariants}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 16px 48px rgba(56, 189, 248, 0.16)",
              borderColor: "rgba(186, 230, 253, 0.85)",
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="rounded-2xl border border-white/40 bg-white/45 p-6 shadow-[0_8px_24px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:p-8"
          >
            <h3 className="text-xl font-semibold text-gray-700">{cards[1].title}</h3>
            <p className="mt-3 text-sm leading-6 text-gray-500">{cards[1].description}</p>

            <div className="mt-6 space-y-3">
              {[0, 1, 2].map((item) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/50 bg-white/60 p-3"
                  animate={{ y: [0, -3, 0] }}
                  transition={{
                    duration: 3 + item * 0.35,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: item * 0.2,
                  }}
                >
                  <span className="h-9 w-9 rounded-full bg-sky-100/80" />
                  <div className="flex-1 space-y-2">
                    <div className="h-2.5 w-2/3 rounded bg-gray-300/70" />
                    <div className="h-2.5 w-1/2 rounded bg-gray-200/80" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.article>

          <motion.article
            variants={cardVariants}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 16px 48px rgba(56, 189, 248, 0.16)",
              borderColor: "rgba(186, 230, 253, 0.85)",
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="rounded-2xl border border-white/40 bg-white/45 p-6 shadow-[0_8px_24px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:p-8"
          >
            <h3 className="text-xl font-semibold text-gray-700">{cards[2].title}</h3>
            <p className="mt-3 text-sm leading-6 text-gray-500">{cards[2].description}</p>

            <div className="mt-10 flex flex-col items-center gap-3">
              <button
                type="button"
                className="rounded-full border border-white/60 bg-white/80 px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition hover:border-sky-200 hover:bg-white"
              >
                Content-based email auto replies
              </button>
              <button
                type="button"
                className="rounded-full border border-white/50 bg-white/50 px-3 py-1 text-xs text-gray-400 transition hover:text-gray-500"
              >
                Idea
              </button>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
