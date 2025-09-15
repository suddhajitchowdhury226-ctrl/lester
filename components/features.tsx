
"use client";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { geist } from "@/lib/fonts";
import {
  Banknote,
  Brain,
  ShoppingCart,
  Stethoscope,
  Building2,
  HeartHandshake,
  Truck,
  Briefcase,
} from "lucide-react";

const orangeClass = "text-[#e78a53]"; // Orange for all Lucide icons

const projects = [
  {
    icon: <Banknote className={`w-6 h-6 ${orangeClass}`} />,
    title: "FinTech Web App",
    desc: "Secure online banking with real-time tracking.",
    href: "/work/fintech-web-app",
    tag: "FinTech",
  },
  {
    icon: <Brain className={`w-6 h-6 ${orangeClass}`} />,
    title: "AI-Powered Learning Platform",
    desc: "Adaptive e-learning for students.",
    href: "/work/ai-learning-platform",
    tag: "EdTech",
  },
  {
    icon: <ShoppingCart className={`w-6 h-6 ${orangeClass}`} />,
    title: "E-commerce Marketplace",
    desc: "100k+ products, vendor dashboard, secure checkout.",
    href: "/work/ecommerce-marketplace",
    tag: "E‑commerce",
  },
  {
    icon: <Stethoscope className={`w-6 h-6 ${orangeClass}`} />,
    title: "Healthcare Portal",
    desc: "Patient management & telemedicine.",
    href: "/work/healthcare-portal",
    tag: "Healthcare",
  },
  {
    icon: <Building2 className={`w-6 h-6 ${orangeClass}`} />,
    title: "Real Estate Dashboard",
    desc: "Data visualization + AI property recommendations.",
    href: "/work/real-estate-dashboard",
    tag: "PropTech",
  },
  {
    icon: <HeartHandshake className={`w-6 h-6 ${orangeClass}`} />,
    title: "NGO Donation Platform",
    desc: "Multi-currency donation & volunteer portal.",
    href: "/work/ngo-donation-platform",
    tag: "Nonprofit",
  },
  {
    icon: <Truck className={`w-6 h-6 ${orangeClass}`} />,
    title: "Logistics Management System",
    desc: "AI-driven shipment matching & tracking.",
    href: "/work/logistics-management",
    tag: "Logistics",
  },
  {
    icon: <Briefcase className={`w-6 h-6 ${orangeClass}`} />,
    title: "Corporate Website Revamp",
    desc: "Global consulting firm.",
    href: "/work/corporate-website-revamp",
    tag: "Corporate",
  },
];

export default function FeaturedWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="featured-work"
      className="text-foreground relative overflow-hidden py-12 sm:py-24 md:py-32"
    >
      <div className="bg-gradient-to-r from-orange-200/20 to-orange-100/10 absolute -top-16 left-1/2 h-40 w-[520px] -translate-x-1/2 rounded-full blur-3xl select-none pointer-events-none" />
      <div className=" absolute top-0 left-1/2 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r from-transparent via-orange-200/60 to-transparent transition-all ease-in-out pointer-events-none" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0 }}
        className="container mx-auto flex flex-col items-center gap-4 sm:gap-6"
      >
        <h2
          className={cn(
            "via-foreground bg-gradient-to-b from-zinc-800 to-zinc-700 bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px]",
            geist.className
          )}
        >
          Featured Work
        </h2>

        <p className="text-center text-muted-foreground max-w-2xl">
          A curated selection of our most recent digital transformations across industries.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          className="w-full mt-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={p.href}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.1, delay: 0.1 + i * 0.04 }}
                whileHover={{
                  scale: 1.04,
                  y: -8,
                  background:
                    "linear-gradient(135deg,rgba(231,138,83,0.13)_0%,rgba(231,138,83,0.06)_100%)",
                  borderColor: "#e78a53",
                  transition: { type: "spring", stiffness: 250, damping: 22 },
                }}
                className="group overflow-hidden rounded-xl border border-secondary/30 bg-white/80 dark:bg-zinc-900/80 shadow-sm backdrop-blur-md transition-all duration-250"
              >
                <Link
                  href={p.href}
                  className="block h-full focus:outline-none focus:ring-2 focus:ring-[#e78a53]/70"
                >
                  <div className="flex h-full flex-col min-h-[240px] px-6 py-5 gap-4 items-start">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg mb-1 bg-orange-50/50 dark:bg-zinc-800/40 shadow">
                      {p.icon}
                    </div>
                    <span className="rounded-full border border-orange-200/60 px-3 py-0.5 text-xs text-[#e78a53] bg-orange-100/50 dark:bg-zinc-900/20 font-medium shadow-sm">
                      {p.tag}
                    </span>
                    <h3 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-200">
                      {p.title}
                    </h3>
                    <p className="text-[15px] text-muted-foreground">{p.desc}</p>
                    <div className="mt-auto flex items-center gap-1 text-sm text-[#e78a53] group-hover:text-orange-800 transition-colors font-medium">
                      <span>View case study</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        width={18}
                        height={18}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1 transition-transform group-hover:translate-x-0.5"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
