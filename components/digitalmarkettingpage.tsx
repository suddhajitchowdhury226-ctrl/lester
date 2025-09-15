// "use client"

// import { motion, useInView } from "framer-motion"
// import { useRef } from "react"
// import { cn } from "@/lib/utils"
// import { geist } from "@/lib/fonts"
// import {
//   BarChart2,
//   Megaphone,
//   Search,
//   Users,
//   Palette,
//   TrendingUp,
// } from "lucide-react"

// const services = [
//   {
//     label: "Digital Strategy & Consulting",
//     icon: Megaphone,
//   },
//   {
//     label: "Performance Marketing (Google Ads, Meta, TikTok, LinkedIn)",
//     icon: BarChart2,
//   },
//   {
//     label: "SEO & Organic Growth",
//     icon: Search,
//   },
//   {
//     label: "Social Media Management",
//     icon: Users,
//   },
//   {
//     label: "Creative & Brand Identity",
//     icon: Palette,
//   },
//   {
//     label: "Analytics & CRO",
//     icon: TrendingUp,
//   },
// ]

// const growthProcess = [
//   "Discover",
//   "Strategize",
//   "Execute",
//   "Optimize",
//   "Scale",
// ]

// const impactStats = [
//   { value: "+200%", label: "Traffic growth for D2C brand" },
//   { value: "10k+", label: "Qualified leads in 3 months (EdTech)" },
//   { value: "3x", label: "Brand awareness (NGO)" },
//   { value: "4.5x", label: "ROAS (FinTech campaign)" },
// ]

// export default function DigitalMarketingPage() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, amount: 0.15 })

//   const container = {
//     hidden: { opacity: 0, y: 24 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.07 } },
//   }
//   const item = {
//     hidden: { opacity: 0, y: 17 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
//   }

//   return (
//     <section id="digital-marketing" className="relative overflow-hidden py-12 sm:py-24 md:py-32 text-foreground">
//       {/* Subtle dotted background, masked edges with orange tone */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 -z-10
//                    bg-[radial-gradient(circle,rgba(251,146,60,0.16)_1px,transparent_1px)]
//                    bg-[size:12px_12px]
//                    [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_80%,transparent_100%)]"
//       />
//       <div className="bg-orange-300 absolute -top-10 left-1/2 h-16 w-44 -translate-x-1/2 rounded-full opacity-20 blur-2xl select-none" />
//       <div className="via-orange-300/50 absolute top-0 left-1/2 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent" />

//       <motion.div
//         ref={ref}
//         initial="hidden"
//         animate={isInView ? "show" : "hidden"}
//         variants={container}
//         className="container mx-auto flex flex-col items-center max-w-6xl gap-10"
//       >

//         {/* Headline */}
//         <motion.h1
//           variants={item}
//           className={cn(
//             "text-center text-4xl font-semibold tracking-tighter md:text-[52px] md:leading-[58px] bg-gradient-to-r from-zinc-600 to-white bg-clip-text text-transparent",
//             geist.className
//           )}
//         >
//           Brand Growth & Digital Marketing
//         </motion.h1>

//         <motion.p
//           variants={item}
//           className="max-w-2xl text-center text-muted-foreground mb-8"
//         >
//           Strategy, creative, and analytics—fused to deliver measurable growth.
//         </motion.p>

//         {/* Services grid, with animated Lucide icons */}
//         <motion.div
//           variants={item}
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 w-full"
//         >
//           {services.map((s, i) => (
//             <motion.div
//               key={s.label}
//               initial={{ opacity: 0, y: 18 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
//               transition={{ duration: 0.42, delay: 0.09 + i * 0.07 }}
//               className="rounded-2xl border border-orange-300/40 bg-gradient-to-br from-orange-300/20 to-white/10 backdrop-blur-sm p-6 flex items-center gap-4 text-base"
//             >
//               <s.icon
//                 size={28}
//                 strokeWidth={2.2}
//                 className="text-orange-300 transition-transform duration-200 group-hover:scale-[1.16]"
//               />
//               <span className="text-base text-foreground">{s.label}</span>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Growth Process ribbons */}
//         <motion.div
//           variants={item}
//           className="mt-8 flex flex-wrap items-center justify-center gap-2"
//         >
//           {growthProcess.map((step, i) => (
//             <motion.div
//               key={step}
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
//               transition={{ duration: 0.3, delay: 0.13 + i * 0.05 }}
//               className={cn(
//                 "px-5 py-2 rounded-full font-medium text-orange-300 border border-orange-300/40 shadow-sm bg-white/10 hover:bg-orange-300/10 transition-all duration-200",
//                 i > 0 && "ml-1"
//               )}
//             >
//               {step}
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Impact stats: lively animated band */}
//         <motion.div
//           variants={item}
//           className="mt-10 w-full rounded-2xl border border-orange-300/40  overflow-hidden"
//         >
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-orange-300/10">
//             {impactStats.map((stat, i) => (
//               <motion.div
//                 key={stat.label}
//                 initial={{ opacity: 0, y: 12 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
//                 transition={{ duration: 0.33, delay: 0.17 + i * 0.07 }}
//                 className="flex flex-col items-center justify-center py-8 text-center"
//               >
//                 <div className="text-3xl font-bold bg-gradient-to-r from-orange-300 to-[#e78a53] bg-clip-text text-transparent">
//                   {stat.value}
//                 </div>
//                 <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </motion.div>
//     </section>
//   )
// }
"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"
import { geist } from "@/lib/fonts"
import {
  BarChart2,
  Megaphone,
  Search,
  Users,
  Palette,
  TrendingUp,
} from "lucide-react"

const services = [
  {
    label: "Digital Strategy & Consulting",
    icon: Megaphone,
  },
  {
    label: "Performance Marketing (Google Ads, Meta, TikTok, LinkedIn)",
    icon: BarChart2,
  },
  {
    label: "SEO & Organic Growth",
    icon: Search,
  },
  {
    label: "Social Media Management",
    icon: Users,
  },
  {
    label: "Creative & Brand Identity",
    icon: Palette,
  },
  {
    label: "Analytics & CRO",
    icon: TrendingUp,
  },
]

export default function DigitalMarketingPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  const container = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.07 } },
  }
  const item = {
    hidden: { opacity: 0, y: 17 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  }

  return (
    <section
      id="digital-marketing"
      className="relative overflow-hidden py-12 sm:py-24 md:py-32 text-foreground"
    >
      {/* Subtle dotted background, masked edges with orange tone */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
           bg-[radial-gradient(circle,rgba(251,146,60,0.16)_1px,transparent_1px)]
           bg-[size:12px_12px]
           [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_80%,transparent_100%)]"
      />
      <div className="bg-orange-300 absolute -top-10 left-1/2 h-16 w-44 -translate-x-1/2 rounded-full opacity-20 blur-2xl select-none" />
      <div className="via-orange-300/50 absolute top-0 left-1/2 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent" />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={container}
        className="container mx-auto flex flex-col items-center max-w-6xl gap-10"
      >
        {/* Headline */}
        <motion.h1
          variants={item}
          className={cn(
            "text-center text-4xl font-semibold tracking-tighter md:text-[52px] md:leading-[58px] bg-gradient-to-r from-zinc-600 to-white bg-clip-text text-transparent",
            geist.className
          )}
        >
          Brand Growth & Digital Marketing
        </motion.h1>

        <motion.p
          variants={item}
          className="max-w-2xl text-center text-muted-foreground mb-8"
        >
          Strategy, creative, and analytics—fused to deliver measurable growth.
        </motion.p>

        {/* Services grid, with animated Lucide icons */}
        <motion.div
          variants={item}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 w-full"
        >
          {services.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              transition={{ duration: 0.42, delay: 0.09 + i * 0.07 }}
              className="rounded-2xl border border-orange-300/40 bg-gradient-to-br from-orange-300/20 to-white/10 backdrop-blur-sm p-6 flex items-center gap-4 text-base"
            >
              <s.icon
                size={28}
                strokeWidth={2.2}
                className="text-orange-300 transition-transform duration-200"
              />
              <span className="text-base text-foreground">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
