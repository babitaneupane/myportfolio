"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code, Terminal, Database, Cpu, Globe, Layers, MonitorSmartphone, Braces, Server } from "lucide-react";

const FloatingIcon = ({ icon: Icon, top, left, size, delay, scrollYProgress, depth }: any) => {
  const y = useTransform(scrollYProgress, [0, 1], [0, depth * -1000]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, depth * 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.8]);

  return (
    <motion.div
      style={{ y, rotate, scale }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 0.15, y: 0 }}
      transition={{ duration: 1, delay, ease: "easeOut" }}
      className={`fixed text-accent mix-blend-screen pointer-events-none z-0 ${top} ${left}`}
    >
      <Icon size={size} strokeWidth={1} />
    </motion.div>
  );
};

export default function FloatingBackground() {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden [perspective:1000px]">
      {/* Deep background layer */}
      <FloatingIcon icon={Terminal} top="top-[10%]" left="left-[15%]" size={120} delay={0.2} scrollYProgress={scrollYProgress} depth={0.2} />
      <FloatingIcon icon={Database} top="top-[60%]" left="left-[8%]" size={160} delay={0.4} scrollYProgress={scrollYProgress} depth={0.3} />
      <FloatingIcon icon={Server} top="top-[20%]" left="right-[15%]" size={140} delay={0.3} scrollYProgress={scrollYProgress} depth={0.25} />
      <FloatingIcon icon={Code} top="top-[85%]" left="left-[30%]" size={80} delay={0.5} scrollYProgress={scrollYProgress} depth={0.5} />
      
      {/* Mid layer */}
      <FloatingIcon icon={Layers} top="top-[70%]" left="right-[25%]" size={100} delay={0.6} scrollYProgress={scrollYProgress} depth={0.6} />
      <FloatingIcon icon={MonitorSmartphone} top="top-[90%]" left="left-[45%]" size={90} delay={0.7} scrollYProgress={scrollYProgress} depth={0.4} />

      {/* Foreground layer */}
      <FloatingIcon icon={Cpu} top="top-[30%]" left="right-[35%]" size={60} delay={0.8} scrollYProgress={scrollYProgress} depth={1} />
      <FloatingIcon icon={Globe} top="top-[15%]" left="left-[40%]" size={70} delay={0.9} scrollYProgress={scrollYProgress} depth={1.2} />
      <FloatingIcon icon={Braces} top="top-[50%]" left="right-[10%]" size={110} delay={1.0} scrollYProgress={scrollYProgress} depth={1.5} />
    </div>
  );
}
