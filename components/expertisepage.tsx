"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"
import { geist } from "@/lib/fonts"

const categories = [
  {
    title: "Web & App Development",
    items: [
      "Corporate Websites",
      "SaaS Platforms",
      "E-commerce Solutions",
      "Mobile Apps (iOS, Android, Flutter, React Native)"
    ]
  },
  {
    title: "Design & UX",
    items: [
      "User Research",
      "UX/UI Design",
      "Prototyping",
      "Design Systems"
    ]
  },
  {
    title: "Technology",
    items: [
      "AI & Machine Learning",
      "Cloud Hosting (AWS, Azure, GCP)",
      "Headless CMS (Strapi, Contentful, WordPress)",
      "React.js, Node.js, Laravel, Python, PHP"
    ]
  },
  {
    title: "Data & Visualization",
    items: [
      "Analytics Dashboards",
      "Predictive Modeling",
      "Business Intelligence"
    ]
  }
]

export default function ExpertisePage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.18 })

  const container = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.08 } },
  }
  const item = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.38 } },
  }

  return (
    <section id="expertise" className="relative overflow-hidden py-12 sm:py-24 md:py-32 text-foreground">
      {/* Dotted background and mask */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
                   bg-[radial-gradient(circle,rgba(148,163,184,0.19)_1px,transparent_1px)]
                   bg-[size:12px_12px]
                   [mask-image:radial-gradient(ellipse_65%_60%_at_50%_40%,#000_80%,transparent_100%)]"
      />
      <div className="via-primary/50 absolute top-0 left-1/2 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent" />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={container}
        className="container mx-auto flex flex-col items-center max-w-6xl gap-10"
      >
        {/* Title */}
        <motion.h1
          variants={item}
          className={cn(
            "text-center text-4xl font-semibold tracking-tighter md:text-[52px] md:leading-[58px] bg-gradient-to-b from-zinc-600 to-white bg-clip-text text-transparent",
            geist.className
          )}
        >
          Expertise
        </motion.h1>

        <motion.p
          variants={item}
          className="max-w-2xl text-center text-muted-foreground mb-6"
        >
          Our capabilities span full-stack engineering, innovative design, AI-driven technologies, and advanced analytics—helping brands thrive in the digital era.
        </motion.p>

        {/* Expertise grid */}
        <motion.div
          variants={item}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
        >
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 22 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
              transition={{ duration: 0.43, delay: 0.12 + i * 0.08 }}
              className="rounded-2xl border border-secondary/40 bg-card/40 backdrop-blur-sm p-7 flex flex-col"
            >
              <h2 className="mb-3 text-xl font-bold tracking-tight">
                {cat.title}
              </h2>
              <ul className="space-y-3">
                {cat.items.map((i) => (
                  <li key={i} className="flex items-center gap-3">
                    {/* Optional: choose an emoji or SVG icon for each main category or item */}
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-border text-xs">
                      ✓
                    </span>
                    <span className="text-base text-foreground">{i}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
