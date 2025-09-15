"use client"

import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { useRef } from "react"
import { cn } from "@/lib/utils"
import { geist } from "@/lib/fonts"

export default function AboutPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const container = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.06 } },
  }
  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  }

  const specialties = [
    "Artificial Intelligence & Machine Learning",
    "Cloud Solutions",
    "Web & Mobile Development",
    "UX/UI & Design Systems",
    "Digital Marketing & Brand Growth",
  ]

  const approach = [
    "Understand goals & challenges",
    "Design people-first experiences",
    "Build scalable, future-ready solutions",
    "Deliver measurable impact",
  ]

  const values = [
    "People-first innovation",
    "Simplicity in complexity",
    "Trust through transparency",
    "Continuous learning",
  ]

  return (
    <section id="about" className="text-foreground relative overflow-hidden py-12 sm:py-24 md:py-32">
      {/* Subtle pattern background (dots) for polish */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
                   bg-[radial-gradient(circle,rgba(148,163,184,0.25)_1px,transparent_1px)]
                   bg-[size:12px_12px]
                   [mask-image:radial-gradient(ellipse_65%_60%_at_50%_40%,#000_80%,transparent_100%)]"
      />
      <div className="via-primary/50 absolute top-0 left-1/2 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent" />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={container}
        className="container mx-auto flex max-w-6xl flex-col items-center gap-6"
      >
        {/* Hero */}
        <motion.h1
          variants={item}
          className={cn(
            "text-center text-4xl font-semibold tracking-tighter md:text-[54px] md:leading-[60px] bg-gradient-to-b from-zinc-600 to-white bg-clip-text text-transparent",
            geist.className
          )}
        >
          About Us
        </motion.h1>

        <motion.p variants={item} className="max-w-3xl text-center text-muted-foreground">
          Calverts Digital Technology Pvt. Ltd. is a Kolkata-based full-service digital technology company helping
          businesses evolve with AI-powered innovation.
        </motion.p>

        {/* Card: Specializations */}
        <motion.div
          variants={item}
          className="w-full overflow-hidden rounded-2xl border border-secondary/40 bg-card/40 backdrop-blur-sm p-6 sm:p-8"
        >
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">We Specialize In</h2>
          </div>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
            {specialties.map((s) => (
              <div
                key={s}
                className="flex items-center gap-3 rounded-lg border border-border/60 bg-background/40 p-3"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-border text-xs">
                  ✓
                </span>
                <span className="text-sm sm:text-base">{s}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Card: Approach */}
        <motion.div
          variants={item}
          className="w-full overflow-hidden rounded-2xl border border-secondary/40 bg-card/40 backdrop-blur-sm p-6 sm:p-8"
        >
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Our Approach</h2>
          </div>
          <ol className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 list-decimal list-inside">
            {approach.map((step, i) => (
              <li
                key={step}
                className="rounded-lg border border-border/60 bg-background/40 p-3 text-sm sm:text-base"
              >
                <span className="font-medium mr-2">{String(i + 1).padStart(2, "0")}.</span>
                {step}
              </li>
            ))}
          </ol>
        </motion.div>

        {/* Card: Values */}
        <motion.div
          variants={item}
          className="w-full overflow-hidden rounded-2xl border border-secondary/40 bg-card/40 backdrop-blur-sm p-6 sm:p-8"
        >
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Our Values</h2>
          </div>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {values.map((v) => (
              <div
                key={v}
                className="rounded-lg border border-border/60 bg-background/40 p-4"
              >
                <p className="text-sm sm:text-base">{v}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA row */}
        {/* <motion.div variants={item} className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact?intent=about"
            className="inline-flex items-center gap-2 rounded-full bg-[#e78a53] px-5 py-2.5 text-white transition-colors hover:bg-[#e78a53]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          >
            Let’s Work Together
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm hover:bg-accent/40 transition-colors"
          >
            Explore Our Work
          </Link>
        </motion.div> */}
      </motion.div>
    </section>
  )
}
