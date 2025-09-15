// "use client"

// import { motion, useInView } from "framer-motion"
// import { useRef } from "react"
// import { cn } from "@/lib/utils"
// import { geist } from "@/lib/fonts"

// export function ImpactStats() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, amount: 0.15 })

//   const container = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.05 } },
//   }

//   const item = {
//     hidden: { opacity: 0, y: 14 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
//   }

//   const stats = [
//     { value: "5+", label: "years in digital transformation" },
//     { value: "120+", label: "successful projects" },
//     { value: "5+", label: "countries with clients" },
//   ]

//   return (
//     <section id="impact-stats" className="relative py-10 sm:py-16">
//       <div className="bg-primary absolute -top-8 left-1/2 h-14 w-40 -translate-x-1/2 rounded-full opacity-40 blur-3xl select-none" />
//       <div className="via-primary/50 absolute top-0 left-1/2 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent" />

//       <motion.div
//         ref={ref}
//         initial="hidden"
//         animate={isInView ? "show" : "hidden"}
//         variants={container}
//         className="container mx-auto"
//       >
//         <div className="relative overflow-hidden rounded-2xl border border-secondary/40 bg-card/40 backdrop-blur-sm">
//           {/* sheen */}
//           <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(90deg,transparent,black,transparent)]">
//             <motion.div
//               initial={{ x: "-30%" }}
//               animate={isInView ? { x: ["-30%", "130%"] } : { x: "-30%" }}
//               transition={{ duration: 3.2, ease: "easeInOut" }}
//               className="absolute top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/5 to-transparent"
//             />
//           </div>

//           <div className="grid grid-cols-1 divide-y divide-border/60 md:grid-cols-3 md:divide-y-0 md:divide-x">
//             {stats.map((s) => (
//               <motion.div
//                 key={s.label}
//                 variants={item}
//                 className="flex items-center justify-center p-8 text-center"
//               >
//                 <div className="flex flex-col items-center gap-1">
//                   <div className={cn("text-5xl font-semibold tracking-tight", geist.className)}>
//                     <span className="bg-gradient-to-t from-[#e78a53] to-[#e78a53] bg-clip-text text-transparent">
//                       {s.value}
//                     </span>
//                   </div>
//                   <div className="text-sm text-muted-foreground">{s.label}</div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   )
// }
"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"
import { geist } from "@/lib/fonts"

const growthProcess = [
  "Discover",
  "Strategize",
  "Execute",
  "Optimize",
  "Scale",
]

const impactStats = [
  { value: "+200%", label: "Traffic growth for D2C brand" },
  { value: "10k+", label: "Qualified leads in 3 months (EdTech)" },
  { value: "3x", label: "Brand awareness (NGO)" },
  { value: "4.5x", label: "ROAS (FinTech campaign)" },
]

export default function ImpactStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  const item = {
    hidden: { opacity: 0, y: 17 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  }

  return (
    <section
      id="impact-stats"
      className="relative overflow-hidden py-12 sm:py-20 md:py-24 text-foreground"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(circle,rgba(251,146,60,0.12)_1px,transparent_1px)]
          bg-[size:12px_12px]
          [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_80%,transparent_100%)]"
      />
      <div className="bg-orange-300 absolute -top-10 left-1/2 h-16 w-44 -translate-x-1/2 rounded-full opacity-15 blur-2xl select-none" />
      <div className="via-orange-300/50 absolute top-0 left-1/2 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent" />

      <div ref={ref} className="container mx-auto flex flex-col items-center max-w-5xl">
        {/* Growth Process header */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.39, delay: 0.05 }}
          className={cn(
            "text-3xl md:text-4xl font-semibold text-center bg-gradient-to-b from-zinc-600 to-white bg-clip-text text-transparent mb-3",
            geist.className
          )}
        >
          Our Growth Process
        </motion.h2>
        <br />

        {/* Growth Process ribbons */}
        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.07 } },
          }}
          className="flex flex-wrap items-center justify-center gap-3 mt-5 mb-5"
        >
          {growthProcess.map((step, i) => (
            <motion.div
              key={step}
              variants={item}
              className={cn(
                "px-5 py-2 rounded-full font-medium text-orange-300 border border-orange-200/80 shadow-sm bg-transparent hover:bg-orange-300/10 transition-all duration-200",
                i > 0 && "ml-1"
              )}
            >
              {step}
            </motion.div>
          ))}
        </motion.div>
        <br />

        {/* Proven Results header */}
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
          transition={{ duration: 0.39, delay: 0.12 }}
          className={cn(
            "text-3xl md:text-4xl font-semibold text-center  bg-gradient-to-b from-zinc-600 to-white bg-clip-text text-transparent mb-3",
            geist.className
          )}
        >
          Proven Results
        </motion.h2>
        <br />

        {/* Impact stats band */}
        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.05 } },
          }}
          className="w-full rounded-2xl border border-orange-300/40 overflow-hidden shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-orange-300/10">
            {impactStats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={item}
                className="flex flex-col items-center justify-center py-8 text-center bg-transparent"
              >
                <div className="text-3xl font-bold text-orange-300 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
