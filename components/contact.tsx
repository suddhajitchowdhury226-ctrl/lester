"use client"
import { useRef, useState } from "react"
import { geist } from "@/lib/fonts"
import { cn } from "@/lib/utils"

export function Contact() {
  const ref = useRef(null)
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')
  
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

    // Validate required fields
    if (!formData.name || !formData.email || !formData.category || !formData.message) {
      setSubmitStatus('Please fill in all required fields.')
      setIsLoading(false)
      return
    }

    try {
      console.log('Submitting form data:', formData) // Debug log
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      console.log('Response status:', response.status) // Debug log
      
      if (response.ok) {
        const result = await response.json()
        console.log('Success:', result) // Debug log
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
        console.error('API Error:', errorData) // Debug log
        setSubmitStatus(errorData.error || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Network Error:', error) // Debug log
      setSubmitStatus('Network error. Please check your connection and try again.')
    } finally {
      setIsLoading(false)
    }
  }

  // Custom Cursor State
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  return (
    <section
      className="contact mt-12 w-full relative px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-16"
      ref={ref}
      id="contact-section"
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
      
      <h1
        className={cn(
          "text-center text-4xl font-semibold tracking-tighter md:text-[48px] md:leading-[54px] bg-gradient-to-r from-zinc-600 to-white bg-clip-text text-transparent",
          geist.className
        )}
      >
        Contact
      </h1>
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
        
        <div className="relative z-10 p-8 rounded-[38px] bg-primary">
          {/* Call to Action */}
          <div className="mb-10 text-center">
            <h2 className={cn("text-4xl font-bold text-white mb-3", geist.className)}>
              Got a project in mind? Let's build and grow together.
            </h2>
            <p className="text-white/70 max-w-xl mx-auto">Fill out the form below and we'll send your message directly to our team.</p>
          </div>
          
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-900/30 border border-green-400/30 text-green-300 rounded-lg flex items-center">
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Your message has been sent successfully! We'll get back to you soon.
            </div>
          )}
          
          {submitStatus && submitStatus !== 'success' && (
            <div className="mb-6 p-4 bg-red-900/30 border border-red-400/30 text-red-300 rounded-lg flex items-center">
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {submitStatus}
            </div>
          )}
          
          {/* Contact form */}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
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
          </form>
          
          {/* Contact Info with Map */}
          <div className="mt-12 text-white/90 space-y-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Contact Information
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Details */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                  <div>
                    <p className="mb-3">
                      <strong className="text-orange-300">📧 Email:</strong>
                    </p>
                    <p className="mb-2">
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
                    <p className="mb-3">
                      <strong className="text-orange-300">📱 Phone:</strong>
                    </p>
                    <p className="mb-2">
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
                  <div className="mt-3">
                    <a 
                      href="https://maps.app.goo.gl/coyhhQqF9SQY8rL69" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-orange-300 hover:text-orange-400 transition-colors text-sm"
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      View on Google Maps
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Map Embed */}
              <div className="relative rounded-lg overflow-hidden border border-white/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.058895780621!2d88.38245217541659!3d22.461982279558027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02713b5ad42b05%3A0x123456789abcdef0!2s16%2F27%2F41%20A%2C%20Chak%20Thankurani%2C%20Pragati%20Pally%2C%20Kalitala%20Rd%2C%20Kolkata%2C%20West%20Bengal%20700104!5e0!3m2!1sen!2sin!4v1695123456789!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Calverts Digital Technology Office Location"
                  className="opacity-90 hover:opacity-100 transition-opacity duration-300"
                ></iframe>
                
                {/* Map overlay with company info */}
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-3 h-3 mr-1 text-orange-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Our Office</span>
                  </div>
                  <div className="text-white/80 mt-1">Kolkata, West Bengal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}