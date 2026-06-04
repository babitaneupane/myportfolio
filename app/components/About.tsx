"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/20 rounded-full blur-[50px]" />
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-accent inline-block" />
            About Me
          </h2>

          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-slate-300 leading-relaxed text-lg mb-6">
              I am a passionate <span className="text-white font-medium">Computer Engineering student</span> at 
              Lumbini Engineering College. My journey in tech has driven me to explore both the development and 
              quality assurance sides of software engineering.
            </p>
            <p className="text-slate-300 leading-relaxed text-lg">
              I enjoy building dynamic, user-friendly full-stack applications and have a keen interest in 
              ensuring their reliability through rigorous software testing, specifically using modern tools like 
              <span className="text-accent-light font-medium"> Playwright</span>. I'm always eager to learn 
              new technologies and tackle challenging problems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}