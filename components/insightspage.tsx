"use client"

import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { useRef } from "react"
import { cn } from "@/lib/utils"
import { geist } from "@/lib/fonts"

const insights = [
  {
    title: "Why Human-Centered Design Wins in Digital Transformation",
    desc: "Explore how people-first design drives success, adoption, and innovation in modern tech projects.",
    link: "/blog/human-centered-design-digital-transformation",
  },
  {
    title: "How AI is Reshaping E-commerce in India",
    desc: "See how artificial intelligence is transforming customer experience, operations, and growth for online retailers.",
    link: "/blog/ai-ecommerce-india",
  },
  {
    title: "Kolkata as a Rising Tech Hub",
    desc: "Discover why Kolkata is emerging as a center for innovation, startups, and talent in India’s tech scene.",
    link: "/blog/kolkata-tech-hub",
  },
]

export default function InsightsPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const container = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.11 } },
  }
  const item = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.42 } },
  }

  return (
    <section id="insights" className="relative overflow-hidden py-12 sm:py-24 md:py-32 text-foreground">
      {/* Dotted background with soft gradient accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
                   bg-[radial-gradient(circle,rgba(231,138,83,0.14)_1px,transparent_1px)]
                   bg-[size:12px_12px]
                   [mask-image:radial-gradient(ellipse_65%_60%_at_50%_40%,#000_80%,transparent_100%)]"
      />
      <div className="via-[#e78a53]/60 absolute top-0 left-1/2 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent" />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={container}
        className="container mx-auto flex flex-col items-center max-w-5xl gap-10"
      >
        <motion.h1
          variants={item}
          className={cn(
            "text-center text-4xl font-semibold tracking-tighter md:text-[48px] md:leading-[54px] bg-gradient-to-r from-zinc-600 to-white bg-clip-text text-transparent",
            geist.className
          )}
        >
          Insights
        </motion.h1>

        <motion.p
          variants={item}
          className="max-w-2xl text-center text-muted-foreground mb-8"
        >
          Read expert perspectives on tech, design, and AI-powered business—plus stories from India’s digital frontier.
        </motion.p>

        {/* Insight card grid */}
        <motion.div
          variants={item}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full"
        >
          {insights.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.48, delay: 0.19 + i * 0.13 }}
              whileHover={{ y: -6, scale: 1.02, boxShadow: "0 12px 32px rgba(231,138,83, 0.11)" }}
              className="group rounded-2xl border border-[#e78a53]/30 bg-gradient-to-br from-[#e78a53]/10 to-white/10 backdrop-blur-sm overflow-hidden flex flex-col"
            >
              <Link href={post.link} className="block h-full">
                <div className="flex flex-col justify-between h-full p-6">
                  <h2 className="text-lg font-semibold tracking-tight mb-3 group-hover:text-[#e78a53] transition-colors">{post.title}</h2>
                  <p className="text-sm text-muted-foreground mb-4">{post.desc}</p>
                  <span className="inline-flex items-center gap-2 mt-auto text-[#e78a53] group-hover:underline transition-colors font-medium">
                    Read more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform group-hover:translate-x-0.5"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
