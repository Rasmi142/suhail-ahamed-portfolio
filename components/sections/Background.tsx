"use client";

import { motion } from "framer-motion";

const philosophy = [
  { title: "Lead With Clarity", desc: "Clear expectations create confident teams and successful outcomes." },
  { title: "Focus On Execution", desc: "Ideas create opportunities. Execution creates results." },
  { title: "Build Strong Systems", desc: "Scalable businesses are built on repeatable processes and operational discipline." },
  { title: "Empower People", desc: "Great teams perform best when they are trusted, supported, and aligned with a common vision." }
];

const highlights = [
  { title: "Chief Operating Officer", desc: "Leading business operations, project delivery, recruitment, stakeholder engagement, and strategic initiatives for international clients." },
  { title: "Digital Transformation Leadership", desc: "Successfully supported transformation projects across accounting, audit, finance, and tourism industries." },
  { title: "Team Management", desc: "Managed cross-functional teams of developers, business analysts, designers, QA engineers, and project coordinators." },
  { title: "International Collaboration", desc: "Worked closely with stakeholders and clients across Europe and international markets." }
];

const achievements = [
  { title: "14+ Professionals Managed", desc: "Successfully coordinated cross-functional teams across multiple projects." },
  { title: "95% Project Delivery Success", desc: "Maintained strong delivery performance through planning, communication, and execution." },
  { title: "Multiple Industries Served", desc: "Experience spanning finance, accounting, audit, compliance, and tourism sectors." },
  { title: "Process Optimization", desc: "Established operational workflows and reporting structures that improved visibility and accountability." }
];

export default function Background() {
  return (
    <section className="bg-brand-blue text-white py-24 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* Left Column - Philosophy & Highlights */}
        <div className="w-full lg:w-2/3 space-y-20">
          
          {/* Philosophy Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-brand-accent">Leadership Philosophy</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {philosophy.map((item, idx) => (
                <div key={idx} className="border-l-2 border-white/20 pl-6">
                  <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                  <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Career Highlights Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-brand-accent">Career Highlights</h3>
            <div className="space-y-8">
              {highlights.map((item, idx) => (
                <div key={idx} className="border-l-2 border-white/20 pl-6">
                  <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                  <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column - Impact & Achievements */}
        <div className="w-full lg:w-1/3">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-brand-blue-dark/50 p-8 rounded-lg border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-8 text-white">Impact & Achievements</h3>
            <div className="space-y-8">
              {achievements.map((item, idx) => (
                <div key={idx}>
                  <h4 className="font-semibold text-brand-accent mb-2">{item.title}</h4>
                  <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-white/20 flex justify-between items-end relative z-10">
        <div className="flex items-end">
          <div className="w-16 h-16 rounded-full bg-brand-accent"></div>
          <div className="w-12 h-24 rounded-r-full bg-brand-black -ml-4"></div>
          <div className="w-4 h-4 rounded-full bg-brand-accent-blue ml-2 mb-2"></div>
        </div>
        <div className="text-right">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-2">Background</h2>
          <p className="text-sm uppercase tracking-widest text-white/50">Portfolio</p>
        </div>
      </div>
    </section>
  );
}
