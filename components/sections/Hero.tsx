"use client";

import { motion } from "framer-motion";
import { Globe, Mail, Phone, FileText, Download } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row overflow-hidden bg-brand-black">
      {/* Left Content (Blue) */}
      <div className="w-full md:w-1/2 bg-brand-blue flex flex-col justify-center p-8 pb-32 md:p-16 md:pb-32 lg:p-24 lg:pb-40 relative z-10 min-h-[60vh] md:min-h-screen text-white">
        {/* Background Pattern Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,0 Q50,100 100,0 V100 H0 Z" fill="currentColor" />
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative z-10"
        >
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-black/20 backdrop-blur-sm border border-white/10 mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-accent"></span>
            </span>
            <span className="text-xs font-medium tracking-wide uppercase">Available for Opportunities</span>
          </div>

          <h2 className="text-sm md:text-base font-semibold tracking-wider text-brand-accent-blue mb-4 uppercase">
            Transforming Operations Into Scalable Growth
          </h2>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            SUHAIL <br /> AHAMED
          </h1>
          
          <p className="text-lg md:text-xl text-brand-gray mb-8 max-w-lg leading-relaxed">
            Chief Operating Officer | Business Operations Leader | Project Delivery Specialist
          </p>

          <p className="text-base text-brand-gray/80 mb-10 max-w-lg">
            I help organizations streamline operations, build high-performing teams, and successfully deliver digital transformation initiatives that create measurable business impact.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a href="/resume.pdf" target="_blank" className="inline-flex items-center gap-2 bg-brand-accent text-brand-black px-6 py-3 rounded-full font-semibold hover:bg-white transition-colors group">
              <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              Download Resume
            </a>
            
            <a href="https://www.linkedin.com/in/suhail-ahamed" target="_blank" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-brand-accent hover:border-brand-accent hover:text-brand-black transition-all">
              <Globe className="w-5 h-5" />
            </a>
            <a href="tel:+919384102425" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-brand-accent hover:border-brand-accent hover:text-brand-black transition-all">
              <Phone className="w-5 h-5" />
            </a>
            <a href="mailto:suhailahamed1410@gmail.com" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-brand-accent hover:border-brand-accent hover:text-brand-black transition-all">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/20">
            <div>
              <p className="text-3xl font-bold text-brand-accent mb-1">95%</p>
              <p className="text-sm text-brand-gray/80 uppercase tracking-wider">On-Time Delivery</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-brand-accent mb-1">14+</p>
              <p className="text-sm text-brand-gray/80 uppercase tracking-wider">Team Members</p>
            </div>
          </div>
        </motion.div>
        
        {/* Bottom Logo Shape Placeholder */}
        <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 flex items-end z-0">
          <div className="w-16 h-16 rounded-full bg-brand-accent"></div>
          <div className="w-12 h-24 rounded-r-full bg-brand-black -ml-4"></div>
          <div className="w-4 h-4 rounded-full bg-brand-accent-blue ml-2 mb-2"></div>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 h-[40vh] md:h-screen relative">
        <Image 
          src="/image.png"
          alt="Suhail Ahamed"
          fill
          className="object-cover"
          priority
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-brand-black/20 mix-blend-overlay"></div>
      </div>
    </section>
  );
}
