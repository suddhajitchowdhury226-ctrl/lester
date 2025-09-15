import React, { useState } from 'react';
import { Marquee } from "@/components/magicui/marquee";

const teamMembers = [
  {
    name: "Lester Andrew Calvert",
    username: "lestercalvert377@gmail.com",
    role: "Founder & Chief AI Visionary",
    img: "/WhatsApp Image 2025-09-13 at 02.21.50.jpeg",
    gradient: "from-purple-500/20 to-pink-500/20",
    expertise: ["AI Strategy", "Innovation", "Leadership"],
    bio: "Visionary leader with 15+ years in AI technology, driving innovation and strategic initiatives to transform businesses through artificial intelligence."
  },
  {
    name: "Supratim dhara",
    username: "supratimdhara@gmail.com",
    role: "Chief Technology & Data Officer",
    img: "/WhatsApp Image 2025-09-15 at 14.58.28.jpeg",
    gradient: "from-blue-500/20 to-cyan-500/20",
    expertise: ["Data Science", "Architecture", "Cloud"],
    bio: "Expert in building scalable data architectures and cloud solutions, with deep expertise in machine learning and data engineering."
  },
  {
    name: "Sandip Sharma",
    // username: "@sandip.sharma",
    role: "AI-Powered Marketing Strategist",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    gradient: "from-green-500/20 to-emerald-500/20",
    expertise: ["Marketing", "Analytics", "Growth"],
    bio: "Strategic marketing professional leveraging AI and data analytics to drive growth and optimize customer engagement across digital channels."
  },
  {
    name: "AISHI CHAKRABORTY",
    // username: "@aishi",
    role: "Human-Centered Design & AI Experience Lead",
    img: "/WhatsApp Image 2025-09-15 at 19.56.58.jpeg",
    gradient: "from-orange-500/20 to-red-500/20",
    expertise: ["UX Design", "Research", "Prototyping"],
    bio: "Design leader focused on creating intuitive AI experiences that bridge the gap between complex technology and human needs."
  },
  {
    name: "Souradip Pal",
    // username: "@souradip",
    role: "Lead Machine Learning Engineer",
    img: "/WhatsApp Image 2025-09-15 at 14.57.01.jpeg",
    gradient: "from-indigo-500/20 to-purple-500/20",
    expertise: ["ML/DL", "Python", "TensorFlow"],
    bio: "Machine learning expert specializing in deep learning architectures, neural networks, and AI model optimization for production systems."
  },
  {
    name: "Baivab Mukhopadhyay ",
    // username: "@bhaibhav",
    role: "Full-Stack Developer & Data Engineer",
    img: "/WhatsApp Image 2025-09-15 at 14.57.02.jpeg",
    gradient: "from-teal-500/20 to-blue-500/20",
    expertise: ["React", "Node.js", "ETL"],
    bio: "Full-stack engineer with expertise in building scalable web applications and data pipelines that power AI-driven solutions."
  },
  {
    name: "Suddhajit Chowdhury",
    // username: "@suddhajit",
    role: "AI-Driven Designer & Developer",
    img: "/pf.jpg",
    gradient: "from-rose-500/20 to-pink-500/20",
    expertise: ["Creative AI", "Frontend", "Motion"],
    bio: "Creative technologist combining AI tools with traditional design principles to create innovative digital experiences and interactive interfaces."
  },
  {
    name: "Bhumika Das",
    // username: "@harleen.kaur",
    role: "Innovation Delivery Manager – AI Solutions",
    img: "/WhatsApp Image 2025-09-15 at 14.57.22.jpeg",
    gradient: "from-amber-500/20 to-orange-500/20",
    expertise: ["Agile", "Delivery", "Strategy"],
    bio: "Project management expert specializing in AI solution delivery, ensuring seamless execution of complex AI projects from concept to deployment."
  },
];

const firstColumn = teamMembers.slice(0, 3);
const secondColumn = teamMembers.slice(3, 6);
const thirdColumn = teamMembers.slice(6, 9);

const TeamMemberCard = ({ img, name, username, role, gradient, expertise, bio, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-full max-w-xs group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className={`
        relative overflow-hidden rounded-3xl border border-white/10 
        bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-transparent
        p-8 shadow-2xl backdrop-blur-xl
        transition-all duration-500 ease-out
        hover:border-white/20 hover:shadow-[0_20px_80px_-20px_rgba(231,138,83,0.3)]
        hover:scale-[1.02] hover:-translate-y-1
      `}>
        {/* Animated gradient background */}
        <div className={`
          absolute -top-10 -left-10 h-48 w-48 rounded-full 
          bg-gradient-to-br ${gradient} blur-3xl opacity-50
          transition-all duration-700 group-hover:opacity-70
          group-hover:scale-110 animate-pulse
        `}></div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <div className="absolute top-4 left-8 h-1 w-1 bg-white/30 rounded-full animate-float-slow"></div>
          <div className="absolute top-12 right-6 h-1.5 w-1.5 bg-white/20 rounded-full animate-float-medium"></div>
          <div className="absolute bottom-8 left-12 h-1 w-1 bg-white/25 rounded-full animate-float-fast"></div>
        </div>

        {/* Profile image with glow effect */}
        <div className="relative mb-6 group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#e78a53]/40 to-[#f0a068]/40 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img 
            src={img || "/placeholder.svg"} 
            alt={name} 
            className="relative h-20 w-20 rounded-full object-cover ring-2 ring-white/10 group-hover:ring-white/30 transition-all duration-500"
          />
          {/* Status indicator */}
          <div className="absolute bottom-0 right-0 h-5 w-5 bg-green-500 rounded-full border-2 border-black/50 animate-pulse"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#e78a53] transition-colors duration-300">
            {name}
          </h3>
          <p className="text-sm text-white/50 mb-3">{username}</p>
          <p className="text-white/80 font-medium mb-4 leading-relaxed">
            {role}
          </p>
          
          {/* Expertise tags */}
          <div className={`
            flex flex-wrap gap-2 mt-4 
            transition-all duration-500 
            ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
          `}>
            {expertise?.map((skill, idx) => (
              <span 
                key={idx}
                className="px-2 py-1 text-xs bg-white/10 text-white/70 rounded-full backdrop-blur-sm"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Hover shine effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
      </div>
    </div>
  );
};

const PopupCard = ({ member, isOpen, onClose }) => {
  if (!isOpen || !member) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      ></div>
      
      {/* Popup Card */}
      <div className="relative max-w-md w-full animate-popup-in">
        <div className={`
          relative overflow-hidden rounded-3xl border border-white/20 
          bg-gradient-to-b from-white/[0.12] via-white/[0.08] to-transparent
          p-8 shadow-2xl backdrop-blur-xl
        `}>
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300 flex items-center justify-center text-white/60 hover:text-white"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Animated gradient background */}
          <div className={`
            absolute -top-10 -left-10 h-48 w-48 rounded-full 
            bg-gradient-to-br ${member.gradient} blur-3xl opacity-70
            animate-pulse
          `}></div>
          
          {/* Profile image with glow effect */}
          <div className="relative mb-6 flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-[#e78a53]/40 to-[#f0a068]/40 rounded-full blur-xl opacity-100"></div>
            <img 
              src={member.img || "/placeholder.svg"} 
              alt={member.name} 
              className="relative h-24 w-24 rounded-full object-cover ring-4 ring-white/20"
            />
            {/* Status indicator */}
            <div className="absolute bottom-0 right-8 h-6 w-6 bg-green-500 rounded-full border-3 border-black/50 animate-pulse"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">
              {member.name}
            </h3>
            <p className="text-sm text-white/60 mb-2">{member.username}</p>
            <p className="text-[#e78a53] font-semibold mb-4 text-lg">
              {member.role}
            </p>
            
            {/* Bio */}
            <p className="text-white/80 leading-relaxed mb-6 text-sm">
              {member.bio}
            </p>
            
            {/* Expertise tags */}
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              {member.expertise?.map((skill, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 text-sm bg-white/15 text-white/80 rounded-full backdrop-blur-sm border border-white/10"
                >
                  {skill}
                </span>
              ))}
            </div>


          </div>

          {/* Shine effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-100 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default function TestimonialsSection() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCardClick = (member) => {
    setSelectedMember(member);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedMember(null);
  };

  return (
    <section id="team" className="relative py-24 overflow-hidden bg-black">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 h-96 w-96 bg-[#e78a53]/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 h-96 w-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] bg-gradient-to-r from-[#e78a53]/5 to-purple-500/5 rounded-full blur-[150px] animate-spin-slow"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center mb-6">
            <button className="group relative rounded-full border border-white/20 bg-gradient-to-r from-white/10 to-white/5 px-8 py-2 backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:border-[#e78a53]/50">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#e78a53]/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
              <span className="relative text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                Meet Our Team
              </span>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-[#e78a53] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-full"></div>
            </button>
          </div>

          <h2 className="mb-6 text-5xl md:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Brilliant
            </span>
            <span className="bg-gradient-to-r from-[#e78a53] via-[#f0a068] to-[#fbb681] bg-clip-text text-transparent ml-3 animate-gradient">
              Minds
            </span>
          </h2>

          <p className="text-lg text-white/60 leading-relaxed max-w-xl mx-auto">
            Our diverse team of innovators, creators, and problem-solvers working together to shape the future of AI technology.
          </p>
        </div>

        {/* Team marquee - Slower animations */}
        <div className="mt-20 flex justify-center gap-8 max-h-[800px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
          <div className="hidden lg:block">
            <Marquee pauseOnHover vertical className="[--duration:45s]">
              {firstColumn.map((member) => (
                <TeamMemberCard 
                  key={member.username} 
                  {...member} 
                  onClick={() => handleCardClick(member)}
                />
              ))}
            </Marquee>
          </div>

          <div className="hidden md:block">
            <Marquee reverse pauseOnHover vertical className="[--duration:50s]">
              {secondColumn.map((member) => (
                <TeamMemberCard 
                  key={member.username} 
                  {...member} 
                  onClick={() => handleCardClick(member)}
                />
              ))}
            </Marquee>
          </div>

          <div>
            <Marquee pauseOnHover vertical className="[--duration:55s]">
              {thirdColumn.map((member) => (
                <TeamMemberCard 
                  key={member.username} 
                  {...member} 
                  onClick={() => handleCardClick(member)}
                />
              ))}
            </Marquee>
          </div>
        </div>

        {/* Bottom CTA */}
        {/*<div className="mt-20 text-center">
          <button className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e78a53] to-[#f0a068] px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(231,138,83,0.5)] hover:scale-105">
            <span>Join Our Team</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>*/}
      </div>

      {/* Popup Modal */}
      <PopupCard 
        member={selectedMember}
        isOpen={isPopupOpen}
        onClose={closePopup}
      />

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) translateX(0); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(10px) translateX(-5px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-15px) translateX(-10px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-10px) translateX(5px); }
          75% { transform: translateY(5px) translateX(-10px); }
        }
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes gradient {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes popup-in {
          from { 
            opacity: 0; 
            transform: scale(0.8) translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: scale(1) translateY(0); 
          }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-gradient { animation: gradient 3s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
        .animate-popup-in { animation: popup-in 0.4s ease-out; }
      `}</style>
    </section>
  );
}