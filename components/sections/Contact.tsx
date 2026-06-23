"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, FileText } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-brand-gray text-brand-black py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 md:p-16 rounded-2xl shadow-xl shadow-brand-black/5"
        >
          <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-8">
            <Mail className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-brand-black tracking-tight">
            Let&apos;s Build Something Meaningful Together
          </h2>
          
          <p className="text-lg text-brand-black/70 mb-8 leading-relaxed max-w-2xl mx-auto">
            Whether you&apos;re looking for operational leadership, project delivery expertise, business transformation support, or strategic growth initiatives, I&apos;d love to connect.
          </p>

          <p className="font-semibold text-brand-blue-dark mb-10 max-w-lg mx-auto">
            Available for Leadership Opportunities, Strategic Partnerships, and Business Transformation Projects.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="mailto:suhailahamed1410@gmail.com" 
              className="inline-flex items-center justify-center gap-2 bg-brand-black text-white px-8 py-4 rounded-full font-medium hover:bg-brand-blue transition-colors group w-full sm:w-auto"
            >
              Get In Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="/resume.pdf" 
              target="_blank"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-black border-2 border-brand-black/10 px-8 py-4 rounded-full font-medium hover:border-brand-accent hover:bg-brand-accent transition-colors group w-full sm:w-auto"
            >
              <FileText className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              Download Resume
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-brand-black/10">
            <p className="text-sm font-bold tracking-wider text-brand-black/60">
              Let&apos;s turn complex challenges into scalable solutions. 🚀
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
