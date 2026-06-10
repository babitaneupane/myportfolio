"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Heading & Visuals */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-5 relative"
          >
            <motion.h2 variants={textVariants} className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              A bit <br/><span className="text-gradient-accent">about me.</span>
            </motion.h2>
            <motion.div variants={textVariants} className="w-20 h-[2px] bg-accent/50 mb-8" />
            
            <motion.div variants={textVariants} className="relative w-full aspect-[4/5] md:aspect-square rounded-[2rem] overflow-hidden p-2 group shadow-2xl">
              {/* Modern Glowing Background behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/40 via-surface to-accent-light/20 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-bl from-accent/20 to-transparent opacity-50 border border-white/10 rounded-[2rem]"></div>
              
              <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden border border-white/10 z-10 bg-surface">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-20 pointer-events-none"></div>
                <Image 
                  src="/me.jpg" 
                  alt="Babita Neupane" 
                  fill 
                  className="object-cover transition-transform duration-700 ease-out scale-100 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.2 }}
            className="md:col-span-7 flex flex-col gap-8"
          >
            <motion.p variants={textVariants} className="text-xl md:text-2xl text-foreground/80 leading-relaxed font-light">
              I am a passionate <strong className="font-semibold text-foreground">Computer Engineering student</strong> at 
              Lumbini Engineering College. My journey in tech has driven me to explore both the development and 
              quality assurance sides of software engineering.
            </motion.p>
            
            <motion.p variants={textVariants} className="text-lg md:text-xl text-foreground/60 leading-relaxed font-light">
              I enjoy building dynamic, user-friendly full-stack applications and have a keen interest in 
              ensuring their reliability through rigorous software testing, specifically using modern tools like 
              <span className="text-accent ml-1 font-medium">Playwright</span>.
            </motion.p>

            <motion.div variants={textVariants} className="grid grid-cols-2 gap-6 mt-8">
              <div className="card-glass p-6 rounded-2xl">
                <h3 className="text-3xl font-bold text-accent mb-2">Code</h3>
                <p className="text-sm text-foreground/60 tracking-wider uppercase">Full Stack Dev</p>
              </div>
              <div className="card-glass p-6 rounded-2xl">
                <h3 className="text-3xl font-bold text-accent mb-2">Test</h3>
                <p className="text-sm text-foreground/60 tracking-wider uppercase">QA Automation</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}