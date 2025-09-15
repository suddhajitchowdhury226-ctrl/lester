// components/ComingSoon.jsx
'use client'; // For Next.js 13+ App Router

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Use next/router for Pages Router
import Link from 'next/link';

const ComingSoon = ({ 
  title = "Coming Soon", 
  description = "We're working hard to bring you something amazing. Stay tuned!",
  showBackButton = true,
  expectedDate = "2025-12-31"
}) => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(expectedDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [expectedDate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Here you would integrate with your backend API
      console.log('Email submitted:', email);
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 5000);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Back Button */}
        {showBackButton && (
          <button 
            onClick={() => router.back()}
            className="absolute top-8 left-8 text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
          >
            <svg 
              className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back</span>
          </button>
        )}

        {/* Logo/Brand */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
            Calverts Digital
          </h2>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          {title}
        </h1>

        {/* Description */}
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-delay">
          {description}
        </p>

        {/* Countdown Timer */}
        <div className="grid grid-cols-4 gap-4 mb-12 max-w-md mx-auto">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div 
              key={unit} 
              className="bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-3xl font-bold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                {value.toString().padStart(2, '0')}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                {unit}
              </div>
            </div>
          ))}
        </div>

        {/* Email Subscription */}
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email to get notified"
              className="w-full px-6 py-4 bg-white/5 backdrop-blur-lg rounded-full border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-all duration-300"
              required
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
            >
              Notify Me
            </button>
          </form>
          
          {/* Success Message */}
          {isSubscribed && (
            <div className="mt-4 text-green-400 animate-fade-in">
              ✓ Thank you! We'll notify you when this page is ready.
            </div>
          )}
        </div>

        {/* Progress Bar */}
        <div className="mt-12 max-w-md mx-auto">
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>Progress</span>
            <span>75% Complete</span>
          </div>
          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.3s both;
        }
      `}</style>
    </div>
  );
};

export default ComingSoon;