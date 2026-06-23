"use client";

import { motion } from "framer-motion";

const expertise = [
  "Business Operations",
  "Project Management",
  "Service Delivery",
  "Team Leadership",
  "Stakeholder Management",
  "Client Relationship Management",
  "Recruitment & Talent Acquisition",
  "Business Analysis",
  "Requirements Gathering",
  "Resource Planning",
  "Process Improvement",
  "Agile & Scrum",
  "Digital Transformation",
  "Strategic Operations"
];

export default function Experience() {
  return (
    <section className="bg-brand-black text-white py-24 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      
      {/* Decorative Topographic Lines */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-10 pointer-events-none">
         <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <path d="M 0,0 C 20,50 80,50 100,100" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <path d="M 10,0 C 30,50 90,50 100,90" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <path d="M 20,0 C 40,50 100,50 100,80" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <path d="M 30,0 C 50,50 100,40 100,70" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 relative z-10">
        
        {/* Core Expertise */}
        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-brand-accent">Core Expertise</h3>
            <div className="flex flex-wrap gap-3">
              {expertise.map((skill, idx) => (
                <span 
                  key={idx} 
                  className="px-4 py-2 border border-brand-gray/20 rounded-full text-sm text-brand-gray/80 hover:bg-brand-blue hover:border-brand-blue transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Personal Statement */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
           <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
           >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Personal Statement</h3>
              <p className="text-lg text-brand-gray/80 leading-relaxed font-light border-l-4 border-brand-blue pl-6">
                I believe that successful organizations are built at the intersection of people, processes, and technology.
              </p>
              <p className="text-lg text-brand-gray/80 leading-relaxed font-light border-l-4 border-brand-accent pl-6">
                My goal is to help businesses grow sustainably by creating operational excellence, empowering teams, and delivering projects that generate real business value.
              </p>
           </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-white/10 text-right">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-2">Experience</h2>
        <p className="text-sm uppercase tracking-widest text-brand-gray/50">Portfolio</p>
      </div>
    </section>
  );
}
