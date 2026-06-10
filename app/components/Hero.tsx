"use client";
import { motion, Variants } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl z-10 relative bg-background/20 backdrop-blur-[2px] p-8 md:p-12 rounded-[3rem] border border-white/5 shadow-2xl"
      >
        <motion.div variants={itemVariants} className="inline-block mb-6">
          <span className="px-4 py-2 rounded-full border border-surface-border bg-surface/50 text-accent-light text-sm tracking-widest uppercase font-medium backdrop-blur-md">
            Welcome to my universe
          </span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-extrabold mb-6 leading-[1.1] tracking-tight">
          Crafting Digital <br className="hidden md:block" />
          <span className="text-gradient-accent">Experiences.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
        >
          I'm <strong className="text-foreground font-semibold">Babita Neupane</strong>. As a Computer Engineering student, I specialize in turning ideas into well-structured digital experiences through web development, QA, and engineering practices. I focus on writing clean code, ensuring software quality, and building applications that are both functional and user-centered.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#projects"
            className="group relative flex items-center justify-center gap-3 bg-accent text-background px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Selected Work
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full"></div>
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium transition-all hover:text-accent group relative"
          >
            Let's Talk
            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-foreground/50 z-10"
      >
        <ChevronDown size={32} strokeWidth={1} />
      </motion.div>
    </section>
  );
}