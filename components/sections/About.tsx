"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="bg-brand-black text-white py-24 px-6 md:px-16 lg:px-24 relative overflow-hidden ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden">
            <Image
              src="/suh.png"
              alt="Strategic Planning"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 space-y-8"
        >
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            Operations is more than managing tasks—it&apos;s about creating systems that enable people, processes, and technology to work together efficiently.
          </p>

          <p className="text-brand-gray/70 leading-relaxed">
            As a Business Operations and Project Management professional, I have led cross-functional teams, coordinated international stakeholders, and delivered transformation initiatives across finance, audit, accounting, and tourism sectors.
          </p>

          <p className="text-brand-gray/70 leading-relaxed">
            My focus is simple: build strong teams, optimize workflows, and ensure projects move from concept to successful execution.
          </p>

          <div className="pt-12 mt-12 border-t border-white/10 flex justify-between items-end">
            {/* Shape element from theme */}
            <div className="flex items-end">
              <div className="w-16 h-16 rounded-full bg-brand-blue"></div>
              <div className="w-12 h-24 rounded-l-full bg-brand-accent -ml-6"></div>
              <div className="w-4 h-4 rounded-full bg-brand-accent-blue ml-2 mb-2"></div>
            </div>

            <div className="text-right">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-2">About Me</h2>
              <p className="text-sm uppercase tracking-widest text-brand-gray/50">Portfolio</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
