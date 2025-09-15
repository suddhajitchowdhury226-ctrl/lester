"use client"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { geist } from "@/lib/fonts"
import { cn } from "@/lib/utils"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')
  
  const container = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.07 } },
  }
  
  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  }
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    category: "",
    budget: "",
    message: "",
  })

  const categories = [
    "Web Development",
    "Mobile App Development", 
    "UI/UX Design",
    "E-commerce Solutions",
    "Digital Marketing",
    "SEO Services",
    "Branding & Identity",
    "Custom Software",
    "Consultation",
    "Other"
  ]
  
  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000", 
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000+",
    "Not Sure"
  ]

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus('')

    if (!formData.name || !formData.email || !formData.category || !formData.message) {
      setSubmitStatus('Please fill in all required fields.')
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: "",
          email: "",
          company: "",
          category: "",
          budget: "",
          message: "",
        })
      } else {
        const errorData = await response.json()
        setSubmitStatus(errorData.error || 'An error occurred.')
      }
    } catch (error) {
      setSubmitStatus('An error occurred while sending your message.')
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  // Custom Cursor State
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  // Zoom animation variants for the entire contact section container
  const zoomContainer = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  return (
    <motion.section
      className="mt-12 w-full relative px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={zoomContainer}
      ref={ref}
    >
      {/* Custom cursor */}
      <div
        className={`fixed pointer-events-none z-50 hidden md:block transition-transform duration-150 ease-out bg-orange-300 border-2 border-white rounded-full mix-blend-difference`}
        style={{
          width: 32,
          height: 32,
          top: cursorPos.y - 16,
          left: cursorPos.x - 16,
          transform: isVisible ? "scale(1)" : "scale(0)",
        }}
      />
      
      <motion.h1
        variants={item}
        className={cn(
          "text-center text-4xl font-semibold tracking-tighter md:text-[48px] md:leading-[54px] bg-gradient-to-r from-zinc-600 to-white bg-clip-text text-transparent",
          geist.className
        )}
      >
        Contact
      </motion.h1>
      <br />
      <br />
      
      <div className="rounded-[40px] border border-black/5 dark:border-white/20 p-2 shadow-sm relative overflow-hidden bg-primary">
        
        {/* Radial glow */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(255, 64, 23, 0.1), transparent 70%)",
          }}
        />
        
        {/* Film grain overlay */}
        <div
          className="absolute inset-0 z-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        
        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={container}
          className="relative z-10 p-8 rounded-[38px] bg-primary"
        >
          {/* Call to Action */}
          <motion.div variants={item} className="mb-10 text-center">
            <h2 className={cn("text-4xl font-bold text-white mb-3", geist.className)}>
              Got a project in mind? Let's build and grow together.
            </h2>
            <p className="text-white/70 max-w-xl mx-auto">Fill out the form below and we'll send your message directly to our team.</p>
          </motion.div>
          
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <motion.div 
              variants={item}
              className="mb-6 p-4 bg-green-900/30 border border-green-400/30 text-green-300 rounded-lg flex items-center"
            >
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Your message has been sent successfully! We'll get back to you soon.
            </motion.div>
          )}
          
          {submitStatus && submitStatus !== 'success' && (
            <motion.div 
              variants={item}
              className="mb-6 p-4 bg-red-900/30 border border-red-400/30 text-red-300 rounded-lg flex items-center"
            >
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {submitStatus}
            </motion.div>
          )}
          
          {/* Contact form */}
          <motion.form variants={item} onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
            {/* Basic Info Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name *"
                required
                disabled={isLoading}
                className="rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-orange-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email *"
                required
                disabled={isLoading}
                className="rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-orange-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
            
            {/* Company Field */}
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company"
              disabled={isLoading}
              className="rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-orange-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
            />
            
            {/* Category and Budget Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-orange-300 transition appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <option value="" className="text-muted-foreground">Select Service Category *</option>
                  {categories.map((category) => (
                    <option key={category} value={category} className="text-foreground">
                      {category}
                    </option>
                  ))}
                </select>
                {/* Custom dropdown arrow */}
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              <div className="relative">
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-orange-300 transition appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <option value="" className="text-muted-foreground">Select Budget Range</option>
                  {budgetRanges.map((budget) => (
                    <option key={budget} value={budget} className="text-foreground">
                      {budget}
                    </option>
                  ))}
                </select>
                {/* Custom dropdown arrow */}
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Message Field */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project *"
              rows={5}
              required
              disabled={isLoading}
              className="rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground resize-y focus:outline-none focus:ring-2 focus:ring-orange-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
            />
            
            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex items-center justify-center rounded-full bg-orange-300 px-8 py-3 font-semibold text-white hover:bg-orange-400 transition-all duration-300 hover:scale-105 transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Message
                </>
              )}
            </button>
          </motion.form>
          
          {/* Contact Info */}
          <motion.div variants={item} className="mt-12 text-white/90 space-y-6">
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <svg className="w-6 h-6 mr-2 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Contact Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <p className="mb-2">
                  <strong className="text-orange-300">📧 Email:</strong>
                </p>
                <p>
                  <a href="mailto:lestercalvert377@gmail.com" className="underline hover:text-orange-300 transition-colors">
                    lestercalvert377@gmail.com
                  </a>
                </p>
                <p>
                  <a href="mailto:supratimdhara@gmail.com" className="underline hover:text-orange-300 transition-colors">
                    supratimdhara@gmail.com
                  </a>
                </p>
              </div>
              
              <div>
                <p className="mb-2">
                  <strong className="text-orange-300">📱 Phone:</strong>
                </p>
                <p>
                  <a href="tel:+918583999129" className="underline hover:text-orange-300 transition-colors">
                    +91 85839 99129
                  </a>
                </p>
                <p>
                  <a href="tel:+918240356758" className="underline hover:text-orange-300 transition-colors">
                    +91 82403 56758
                  </a>
                </p>
              </div>
            </div>
            
            <div>
              <p className="mb-2">
                <strong className="text-orange-300">🏢 Address:</strong>
              </p>
              <address className="not-italic text-white/80 leading-relaxed">
                Calverts Digital Technology Pvt. Ltd.<br />
                16/27/41 A, Chak Thankurani, Pragati Pally,<br />
                Kalitala Road, Kolkata, West Bengal – 700104
              </address>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}