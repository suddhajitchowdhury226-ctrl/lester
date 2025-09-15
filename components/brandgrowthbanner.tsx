"use client"

import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { useRef } from "react"
import { cn } from "@/lib/utils"
import { geist } from "@/lib/fonts"

export function BrandGrowthBanner() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.25 })

  const container = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.06 } },
  }
  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  }

  return (
    <section id="brand-growth" className="relative overflow-hidden py-12 sm:py-20">
      {/* Background: subtle dots with radial mask (replaces orange blob) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
                   bg-[radial-gradient(circle,rgba(148,163,184,0.35)_1px,transparent_1px)]
                   bg-[size:12px_12px]
                   [mask-image:radial-gradient(ellipse_65%_60%_at_50%_40%,#000_75%,transparent_100%)]"
      />
      <div className="via-primary/50 absolute top-0 left-1/2 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent" />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={container}
        className="container mx-auto"
      >
        <div className="relative overflow-hidden rounded-2xl border border-secondary/40 bg-card/40 backdrop-blur-sm px-6 py-12 sm:px-10 sm:py-16">
          {/* sheen pass */}
          <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(90deg,transparent,black,transparent)]">
            <motion.div
              initial={{ x: "-30%" }}
              animate={isInView ? { x: ["-30%", "130%"] } : { x: "-30%" }}
              transition={{ duration: 3, ease: "easeInOut" }}
              className="absolute top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            />
          </div>

          <div className="mx-auto max-w-4xl text-center">
            <motion.h2
              variants={item}
              className={cn(
                "text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight",
                geist.className
              )}
            >
              <span className="bg-gradient-to-r from-[#e78a53] to-[#e78a53] bg-clip-text text-transparent inline-block">
                We don’t just build digital products. We scale brands.
              </span>
            </motion.h2>

            <motion.p
              variants={item}
              className="mt-4 text-base sm:text-lg text-muted-foreground"
            >
              Partner to plan, launch, and accelerate brand growth across web, product, and marketing touchpoints. 
            </motion.p>

            {/* Updated CTA: rounded two-part button */}
            <motion.div variants={item} className="mt-8 flex items-center justify-center">
              <Link href="/contact?intent=grow-brand" className="group focus:outline-none">
                <div className="cursor-pointer border border-border bg-card gap-2 h-[60px] flex items-center p-[10px] rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-offset-2">
                  <div className="border border-border bg-primary h-[40px] rounded-full flex items-center justify-center text-primary-foreground transition-all duration-300">
                    <p className="font-medium tracking-tight mr-3 ml-3 flex items-center gap-2 justify-center text-base">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-globe animate-spin"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                        <path d="M2 12h20"></path>
                      </svg>
                      Start Your Project
                    </p>
                  </div>

                  <div className="text-muted-foreground group-hover:ml-4 ease-in-out transition-all size-[24px] flex items-center justify-center rounded-full border-2 border-border">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
