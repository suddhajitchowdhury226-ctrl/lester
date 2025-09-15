"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { geist } from "@/lib/fonts"

const categories = [
  {
    title: "Startups",
    logos: [
      { src: "/a1.png", alt: "Author Portfolio" },
      { src: "/a2.png", alt: "SKT Actor" },
      { src: "/a3.png", alt: "Ele eBook" },
      { src: "/a4.png", alt: "SKT Magazine Pro" },
    ],
  },
  {
    title: "Enterprises",
    logos: [
      { src: "/e1.png", alt: "SKT Taxi" },
      { src: "/e3.png", alt: "Towing" },
      { src: "/e2.png", alt: "SKT Robotics" },
      { src: "/e4.png", alt: "Motorcycle" },
    ],
  },
  {
    title: "NGOs",
    logos: [
      { src: "/b1.png", alt: "SKT Handyman Pro" },
      { src: "/b2.png", alt: "Girlie Pro" },
      { src: "/b3.png", alt: "Charm" },
      { src: "/b4.png", alt: "SKT NewsPaper Pro" },
    ],
  },
  {
    title: "FinTech",
    logos: [
      { src: "/h1.png", alt: "SKT Travel" },
      { src: "/h2.png", alt: "SKT Amusement Park" },
      { src: "/h3.png", alt: "SmartBank" },
      { src: "/h4.png", alt: "SKT Beach Pro" },
    ],
  },
  {
    title: "EdTech",
    logos: [
      { src: "/g1.png", alt: "Bakery Blocks Pro" },
      { src: "/g2.png", alt: "GB Shoes" },
      { src: "/g3.png", alt: "GB Doctor" },
      { src: "/g4.png", alt: "GB Fitness" },
    ],
  },
  {
    title: "Healthcare",
    logos: [
      { src: "/r1.png", alt: "The Real Estate" },
      { src: "/r2.png", alt: "SKT Interior Pro" },
      { src: "/r3.png", alt: "CoWorking" },
      { src: "/r4.png", alt: "CureConnect" },
    ],
  },
]

export function TrustedBy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [selectedImage, setSelectedImage] = useState(null)

  const container = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      ease: "easeOut",
      staggerChildren: 0.15 
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1]
      } 
    },
  }

  const cardItem = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7,
        ease: "easeOut"
      } 
    },
  }

  const handleImageClick = (logo) => {
    setSelectedImage(logo)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <>
      <section id="trusted-by" className="text-foreground relative overflow-hidden py-20 sm:py-28 md:py-36 bg-black">
        {/* Subtle gradient overlays matching Calverts design */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-[100px]" />
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={container}
          className="container mx-auto flex flex-col items-center gap-8 sm:gap-10 relative z-10 px-4 sm:px-6 lg:px-8"
        >
          {/* Header matching Calverts style */}
          <motion.div variants={item} className="text-center space-y-6">
            <motion.h2
              className={cn(
                "text-4xl sm:text-5xl md:text-6xl font-bold text-white",
                geist.className
              )}
            >
              Features Work
            </motion.h2>

            <motion.p 
              variants={item}
              className="text-gray-400 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed"
            >
              Showcasing collaborations across Startups, Enterprises, NGOs, FinTech, EdTech, and Healthcare.
            </motion.p>
          </motion.div>

          {/* Categories Grid */}
          <div className="mt-16 w-full max-w-7xl">
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.title}
                variants={item}
                className="mb-24 last:mb-0"
              >
                {/* Category Title */}
                <motion.div 
                  className="mb-12 text-center"
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                    {cat.title}
                  </h3>
                  <div className="h-px w-24 bg-gradient-to-r from-transparent via-gray-600 to-transparent mx-auto mt-4" />
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                  {cat.logos.map((logo, logoIndex) => (
                    <motion.div
                      key={logo.alt}
                      variants={cardItem}
                      whileInView="show"
                      initial="hidden"
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: logoIndex * 0.1 }}
                      className="group cursor-pointer"
                      onClick={() => handleImageClick(logo)}
                    >
                      {/* Card matching Calverts dark theme */}
                      <motion.div 
                        className="relative bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800 overflow-hidden transition-all duration-500 hover:border-zinc-700"
                        whileHover={{ 
                          y: -8,
                          scale: 1.03,
                          transition: { duration: 0.3, ease: "easeOut" }
                        }}
                      >
                        {/* Hover gradient effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-orange-500/0 via-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:via-transparent transition-all duration-500" />
                        
                        {/* Image Container - Now fills entire card */}
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={logo.src}
                            alt={logo.alt}
                            fill
                            className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              const container = e.target.parentElement;
                              if (container) {
                                container.innerHTML = `
                                  <div class="flex flex-col items-center justify-center h-full bg-gradient-to-br from-zinc-900 to-zinc-950">
                                    <div class="text-3xl font-bold text-gray-600 mb-2">${logo.alt.split(' ').map(word => word[0]).join('')}</div>
                                    <div class="text-xs text-gray-500">Preview</div>
                                  </div>
                                `;
                              }
                            }}
                          />
                        </div>

                        {/* Bottom accent line */}
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/0 to-transparent group-hover:via-orange-500/50 transition-all duration-500" />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scrolling Banner - Simplified for cleaner look */}
          <motion.div variants={item} className="relative w-full mt-20 overflow-hidden">
            <div className="relative py-8">
              {/* Fade edges */}
              <div className="absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
              <div className="absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
              
              {/* Single scrolling row */}
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 40, ease: "linear", repeat: Infinity }}
                className="flex gap-6"
              >
                {[...categories.flatMap(c => c.logos), ...categories.flatMap(c => c.logos)].map((l, i) => (
                  <div 
                    key={`scroll-${i}`} 
                    className="flex-shrink-0 cursor-pointer"
                    onClick={() => handleImageClick(l)}
                  >
                    <div className="bg-zinc-900/70 backdrop-blur-sm rounded-xl border border-zinc-800 p-4 min-w-[200px] hover:border-zinc-700 transition-all duration-300 hover:scale-105">
                      <div className="h-20 relative">
                        <Image
                          src={l.src}
                          alt={l.alt}
                          fill
                          className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                          sizes="200px"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            const container = e.target.parentElement;
                            if (container) {
                              container.innerHTML = `
                                <div class="flex items-center justify-center h-full text-gray-600 text-lg font-bold">
                                  ${l.alt.split(' ').map(word => word[0]).join('')}
                                </div>
                              `;
                            }
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Optional CTA matching Calverts style */}
          <motion.div 
            variants={item}
            className="mt-16 flex gap-4"
          >
            <button className="px-8 py-3 bg-orange-400 hover:bg-orange-400 text-black font-semibold rounded-full transition-all duration-300 hover:scale-105">
              Start Your Project
            </button>
            <button className="px-8 py-3 border border-zinc-700 hover:border-zinc-600 text-white font-semibold rounded-full transition-all duration-300 hover:bg-zinc-900/50">
              Explore Our Work
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-20 bg-black/50 rounded-full p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl max-h-[90vh] flex flex-col items-center"
            >
              {/* Image container with proper sizing */}
              <div className="relative w-full h-[70vh] bg-zinc-900/50 rounded-2xl overflow-hidden border border-zinc-700/50 shadow-2xl">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 90vw"
                  priority
                  quality={100}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const container = e.target.parentElement;
                    if (container) {
                      container.innerHTML = `
                        <div class="flex flex-col items-center justify-center h-full text-white">
                          <div class="text-6xl font-bold text-gray-600 mb-4">${selectedImage.alt.split(' ').map(word => word[0]).join('')}</div>
                          <div class="text-xl text-gray-400">${selectedImage.alt}</div>
                          <div class="text-sm text-gray-500 mt-2">Image not available</div>
                        </div>
                      `;
                    }
                  }}
                />
              </div>


            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}