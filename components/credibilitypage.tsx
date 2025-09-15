"use client"

import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { geist } from "@/lib/fonts"
import { cn } from "@/lib/utils"

export default function CredibilityPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const container = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.06 } },
  }
  const item = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  }

  const certificateFull = "/Cartificate.png"
  const certificateThumb = "/ctham.png"
  const certificatePdf = "https://drive.google.com/file/d/1L8_c1jbvRFbdtD-v8ixomDavnaVXItv5/view?usp=drive_link"

  // Clean badges array without duplicates
  const badges = [
    { name: "Google Partner", src: "/google-certified-professional.png" },
    { name: "ISO 9001", src: "/blob.png" },
    { name: "Freelancer Verified", src: "/pci-icon.png" },
    { name: "Clutch Listed", src: "/PayPal-Logo-History-5-864x540.png" },
    { name: "AWS", src: "/aws.png" },
    { name: "Unknown Logo", src: "/images (1).png" },
  ]

  return (
    <section id="credibility" className="text-foreground relative overflow-hidden py-12 sm:py-24 md:py-32">
      <div className="bg-primary absolute -top-10 left-1/2 h-16 w-44 -translate-x-1/2 rounded-full opacity-40 blur-3xl select-none" />
      <div className="via-primary/50 absolute top-0 left-1/2 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent transition-all ease-in-out" />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={container}
        className="container mx-auto flex flex-col items-center gap-4 sm:gap-6"
      >
        <motion.h1
          variants={item}
          className={cn(
            "via-foreground bg-gradient-to-b from-zinc-800 to-zinc-700 bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px]",
            geist.className
          )}
        >
          Our Credibility & Trust
        </motion.h1>

        <motion.p variants={item} className="text-center text-muted-foreground max-w-3xl">
          Officially recognized & incorporated under the Companies Act, 2013, Ministry of Corporate Affairs, Government of India.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 w-full max-w-4xl rounded-2xl border border-secondary/40 bg-card/40 backdrop-blur-sm p-5"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
            <div className="md:col-span-3">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="group relative block overflow-hidden rounded-xl border border-border/60 bg-background/40"
                aria-label="Open Incorporation Certificate"
              >
                <Image
                  src={certificateThumb}
                  alt="Incorporation Certificate (thumbnail)"
                  width={1200}
                  height={850}
                  className="h-auto w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="pointer-events-none absolute bottom-3 right-3 rounded-md bg-black/50 px-2 py-1 text-xs text-white">
                  Click to enlarge
                </div>
              </button>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <Link
                  href={certificatePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#e78a53] px-4 py-2 text-white hover:bg-[#e78a53]/90 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download Certificate (PDF)
                </Link>

                <Link
                  href={certificateFull}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:bg-accent/40 transition-colors"
                >
                  View full-resolution image
                </Link>
              </div>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold tracking-tight">Company status</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                "Calverts Digital Technology Pvt. Ltd. is a registered private limited company, ensuring transparency and trust in every partnership."
              </p>

              <div className="mt-6">
                {/* <h4 className="text-sm font-medium text-muted-foreground">Recognitions & Certifications (optional)</h4> */}
                <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {badges.map((b, index) => (
                    <div
                      key={`${b.name}-${index}`}
                      className="flex items-center justify-center rounded-md border border-border/60 bg-background/40 p-3"
                    >
                      <Image
                        src={b.src}
                        alt={b.name}
                        width={160}
                        height={64}
                        className="h-10 w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
                {/* <p className="mt-2 text-xs text-muted-foreground">
                  Replace placeholders with actual badge assets as applicable.
                </p> */}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            aria-modal="true"
            role="dialog"
          >
            <button
              aria-label="Close"
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
              onClick={() => setOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>

            <motion.div
              key="dialog"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-black/30"
            >
              <div className="relative w-full h-[70vh] md:h-[80vh]">
                <Image
                  src={certificateFull}
                  alt="Incorporation Certificate (full)"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="flex items-center justify-between gap-2 p-3">
                <span className="text-xs text-white/80">Incorporation Certificate — full preview</span>
                <div className="flex items-center gap-2">
                  <Link
                    href={certificatePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#e78a53] px-3 py-1.5 text-xs text-white hover:bg-[#e78a53]/90"
                  >
                    Download PDF
                  </Link>
                  <button
                    onClick={() => setOpen(false)}
                    className="rounded-full border border-white/20 px-3 py-1.5 text-xs text-white hover:bg-white/10"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}