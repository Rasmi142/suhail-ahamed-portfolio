"use client";

import { motion } from "framer-motion";
import { Settings, Users, MonitorSmartphone, Target, LineChart, Briefcase } from "lucide-react";

const services = [
  {
    title: "Business Operations Management",
    description: "Designing and optimizing operational frameworks that improve efficiency, accountability, and business performance.",
    icon: Settings
  },
  {
    title: "Project Leadership",
    description: "Leading projects from planning to delivery while aligning stakeholders, teams, and business objectives.",
    icon: Target
  },
  {
    title: "Team Building & Recruitment",
    description: "Building high-performing teams through strategic recruitment, onboarding, mentoring, and performance management.",
    icon: Users
  },
  {
    title: "Digital Transformation",
    description: "Helping organizations modernize processes, improve workflows, and adopt technology-driven solutions.",
    icon: MonitorSmartphone
  },
  {
    title: "Stakeholder Management",
    description: "Creating strong relationships between leadership teams, clients, and delivery teams to ensure project success.",
    icon: Briefcase
  },
  {
    title: "Process Improvement",
    description: "Identifying bottlenecks, implementing improvements, and driving continuous operational excellence.",
    icon: LineChart
  }
];

export default function Services() {
  return (
    <section className="bg-brand-gray text-brand-black py-24 px-6 md:px-16 lg:px-24 relative">
      {/* Decorative lines */}
      <div className="absolute top-0 right-0 w-1/3 h-full overflow-hidden pointer-events-none opacity-5">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <path d="M50,0 Q100,50 50,100" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M60,0 Q110,50 60,100" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M70,0 Q120,50 70,100" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-brand-black">What I Do</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-brand-accent flex items-center justify-center text-brand-black">
                  <service.icon className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-blue-dark mb-2 uppercase tracking-wide">
                  {service.title}
                </h3>
                <p className="text-brand-black/70 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 pt-8 border-t border-brand-black/10 flex justify-end">
          <p className="text-sm uppercase tracking-widest text-brand-black/40">Portfolio</p>
        </div>
      </div>
    </section>
  );
}
