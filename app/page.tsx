"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Hero from "@/components/home/hero"
import Features from "@/components/features"
import TestimonialsSection from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { FAQSection } from "@/components/faq-section"
import { TrustedBy } from "@/components/trustedby"
import { StickyFooter } from "@/components/sticky-footer"
import ImpactStats from "@/components/impactstats"
import CredibilityPage from "@/components/credibilitypage"
import { BrandGrowthBanner } from "@/components/brandgrowthbanner"
import AboutPage from "@/components/aboutus"
// import {TeamPage} from "@/components/teampage"
import ExpertisePage from "@/components/expertisepage"
import DigitalMarketingPage from "@/components/digitalmarkettingpage"
import InsightsPage from "@/components/insightspage"

function ScrollingText({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center py-16 bg-black relative">
      <div className="w-full max-w-4xl mx-4">
        <div 
          className="relative overflow-hidden rounded-2xl shadow-2xl p-6"
          style={{
            background: 'linear-gradient(to right, #F5B97F, #FABB79, #F5B97F)'
          }}
        >
          {/* Gradient overlays for smooth fade effect */}
          <div 
            className="absolute inset-y-0 left-0 w-12 z-10"
            style={{
              background: 'linear-gradient(to right, rgba(245, 185, 127, 1), transparent)'
            }}
          ></div>
          <div 
            className="absolute inset-y-0 right-0 w-12 z-10"
            style={{
              background: 'linear-gradient(to left, rgba(245, 185, 127, 1), transparent)'
            }}
          ></div>
          
          {/* Glowing effect */}
          <div 
            className="absolute inset-0 blur-xl"
            style={{
              background: 'linear-gradient(to right, rgba(245, 185, 127, 0.5), transparent, rgba(245, 185, 127, 0.5))'
            }}
          ></div>
          
          {/* Scrolling text container */}
          <div className="relative overflow-hidden">
            <div
              className="flex whitespace-nowrap animate-scroll"
              style={{ 
                willChange: "transform"
              }}
            >
              <span className="text-black font-bold text-xl md:text-3xl lg:text-4xl px-8 drop-shadow-lg">
                {text}
              </span>
              <span className="text-black font-bold text-xl md:text-3xl lg:text-4xl px-8 drop-shadow-lg">
                {text}
              </span>
              <span className="text-black font-bold text-xl md:text-3xl lg:text-4xl px-8 drop-shadow-lg">
                {text}
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-scroll {
          animation: scroll 8s linear infinite;
        }
      `}</style>
    </div>
  )
}

// New component for Hero scrolling text with custom styling
function HeroScrollingText() {
  return (
    <div className="relative w-full overflow-hidden py-8 bg-black">
      {/* Background with the peachy-orange glow effect */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, #F5B97F 50%, transparent 100%)'
        }}
      />
      
      {/* Edge fade effects */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
      
      {/* Scrolling text container */}
      <div className="relative overflow-hidden">
        <div
          className="flex whitespace-nowrap animate-hero-scroll"
          style={{
            willChange: "transform"
          }}
        >
          {/* Repeat the text multiple times for seamless loop */}
          {[...Array(5)].map((_, index) => (
            <div key={index} className="flex items-center">
              <span 
                className="text-4xl md:text-5xl lg:text-6xl font-bold px-12"
                style={{ color: '#F5B97F' }}
              >
                Digital Marketing
              </span>
              <span 
                className="text-4xl md:text-5xl lg:text-6xl font-bold px-4"
                style={{ color: '#FABB79' }}
              >
                ✦
              </span>
              <span 
                className="text-4xl md:text-5xl lg:text-6xl font-bold px-12"
                style={{ color: '#F5B97F' }}
              >
                App Design
              </span>
              <span 
                className="text-4xl md:text-5xl lg:text-6xl font-bold px-4"
                style={{ color: '#FABB79' }}
              >
                ✦
              </span>
              <span 
                className="text-4xl md:text-5xl lg:text-6xl font-bold px-12"
                style={{ color: '#F5B97F' }}
              >
                Branding
              </span>
              <span 
                className="text-4xl md:text-5xl lg:text-6xl font-bold px-4"
                style={{ color: '#FABB79' }}
              >
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes heroScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-20%);
          }
        }
        
        .animate-hero-scroll {
          animation: heroScroll 15s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "system")
    root.classList.add("dark")
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMobileNavClick = (elementId: string) => {
    setIsMobileMenuOpen(false)
    setTimeout(() => {
      const element = document.getElementById(elementId)
      if (element) {
        const headerOffset = 120 // Account for sticky header height + margin
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    }, 100)
  }

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      const headerOffset = 120 // Account for sticky header height + margin
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="min-h-screen w-full relative bg-black">
      {/* Pearl Mist Background with Top Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 35% at 50% 0%, rgba(226, 232, 240, 0.12), transparent 60%), #000000",
        }}
      />

      {/* Desktop Header */}
      <header
        className={`sticky top-10 z-[9999] mx-auto hidden w-full h-16 overflow-hidden flex-row items-center justify-between self-start rounded-full bg-black/20 md:flex backdrop-blur-sm border border-gray-250 shadow-lg transition-all duration-300 ${
          isScrolled ? "max-w-3xl px-2" : "max-w-5xl px-4"
        } py-0`}
        style={{
          willChange: "transform",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
          perspective: "1000px",
        }}
      >
        <a
          className={`z-50 flex items-center justify-center gap-5 transition-all duration-300 ${
            isScrolled ? "ml-4" : ""
          }`}
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/logo.jpg"
            alt="Calverts Digital Technology Logo"
            width={110}
            height={65}
            quality={100}
            priority
            className="object-contain w-auto"
            style={{ height: "97px" }}
          />
        </a>

        <div className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-muted-foreground transition duration-200 hover:text-foreground md:flex md:space-x-2">
          <a
            className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("about")
            }}
          >
            <span className="relative z-20">About</span>
          </a>
          
          <a
            className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("trustedby")
            }}
          >
            <span className="relative z-20">Work</span>
          </a>
          
          <a
            className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("expertise")
            }}
          >
            <span className="relative z-20">Expertise</span>
          </a>

          <a
            className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("testimonials")
            }}
          >
            <span className="relative z-20">Team</span>
          </a>
          
          <a
            className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("digital-marketing")
            }}
          >
            <span className="relative z-20">Marketing</span>
          </a>
          
        </div>
        
        <div className="flex items-center gap-4">
          <a
            className="rounded-md font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center bg-gradient-to-b from-primary to-primary/80 text-primary-foreground shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] px-4 py-2 text-sm"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("contact")
            }}
          >
            Contact
          </a>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="sticky top-4 z-[9999] mx-4 flex w-auto h-14 overflow-hidden flex-row items-center justify-between rounded-full bg-black/90 backdrop-blur-sm border border-gray-200 shadow-lg md:hidden px-5 py-0">
        <a
          className="flex items-center justify-center gap-2"
          href="/"
        >
          <Image
            src="/logo.jpg"
            alt="Calverts Digital Technology Logo"
            width={132}
            height={100}
            priority
            className="object-contain w-auto"
            style={{ height: "87px" }}
          />
        </a>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center justify-center w-19 h-19 rounded-full bg-gray-100 border border-gray-300 transition-colors hover:bg-gray-200"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col items-center justify-center w-5 h-5 space-y-1">
            <span
              className={`block w-4 h-0.5 bg-gray-900 transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            ></span>
            <span
              className={`block w-4 h-0.5 bg-gray-900 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block w-4 h-0.5 bg-gray-900 transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            ></span>
          </div>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm md:hidden">
          <div className="absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-md border border-border/50 rounded-2xl shadow-2xl p-6">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => handleMobileNavClick("about")}
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
              >
                About
              </button>
              <button
                onClick={() => handleMobileNavClick("trustedby")}
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
              >
                Work
              </button>
              <button
                onClick={() => handleMobileNavClick("expertise")}
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
              >
                Expertise
              </button>
              <button
                onClick={() => handleMobileNavClick("digital-marketing")}
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
              >
                Marketing 
              </button>
              <button
                onClick={() => handleMobileNavClick("testimonials")}
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
              >
                Testimonials
              </button>
              <button
                onClick={() => handleMobileNavClick("contact")}
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
              >
                Contact
              </button>
              <button
                onClick={() => handleMobileNavClick("faq")}
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
              >
                FAQ
              </button>
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <Hero />

      {/* NEW: Hero Scrolling Text with peachy-orange color */}
      <HeroScrollingText />

      <div id="about">
        <AboutPage />
      </div>

      {/* Features Section - Commented out as requested
      <div id="features">
        <Features />
      </div> */}

      {/* Work Section (TrustedBy) */}
      <div id="trustedby">
        <TrustedBy />
      </div>

      <div id="impact-stats">
        <ImpactStats />
      </div>

      <div id="credibility-page">
        <CredibilityPage />
      </div>

      <div id="expertise">
        <ExpertisePage />
      </div>

      <div id="brand-growth">
        <BrandGrowthBanner />
      </div>

      <div id="testimonials">
        <TestimonialsSection />
      </div>

      <div id="digital-marketing">
        <DigitalMarketingPage />
      </div>

      {/* Insights Section - Commented out as requested
      <div id="insights">
        <InsightsPage />
      </div> */}

      {/* Contact Section - Fixed with proper ID */}
      <div id="contact">
        <Contact />
      </div>

      {/* FAQ Section */}
      <div id="faq">
        <FAQSection />
      </div>

      {/* Sticky Footer */}
      <StickyFooter />
    </div>
  )
}