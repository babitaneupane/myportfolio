"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'a' || 
          target.tagName.toLowerCase() === 'button' ||
          target.closest('a') || 
          target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!isClient) return null;

  return (
    <>
      {/* Glow aura */}
      <motion.div
        className="fixed top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none z-[40]"
        animate={{
          x: mousePosition.x - 128,
          y: mousePosition.y - 128,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 150, mass: 0.8 }}
      />
      
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-accent/40 pointer-events-none z-[100] mix-blend-difference"
        animate={{
          x: mousePosition.x - (isHovering ? 24 : 16),
          y: mousePosition.y - (isHovering ? 24 : 16),
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
          backgroundColor: isHovering ? "rgba(212, 175, 55, 0.1)" : "rgba(0, 0, 0, 0)",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 250, mass: 0.5 }}
      />
      
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-accent pointer-events-none z-[100]"
        animate={{
          x: mousePosition.x - (isHovering ? 0 : 4),
          y: mousePosition.y - (isHovering ? 0 : 4),
          width: isHovering ? 0 : 8,
          height: isHovering ? 0 : 8,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ type: "spring", damping: 40, stiffness: 400, mass: 0.2 }}
      />
    </>
  );
}
