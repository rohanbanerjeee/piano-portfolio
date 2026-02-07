"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const rafRef = useRef<number | null>(null);
  const currentPositionRef = useRef({ x: -100, y: -100 });
  const targetPosition = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      targetPosition.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);
    };

    const hideCursor = () => {
      setIsVisible(false);
    };

    // Ultra-fast interpolation for instant response
    const interpolate = () => {
      const current = currentPositionRef.current;
      const target = targetPosition.current;
      
      const dx = target.x - current.x;
      const dy = target.y - current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Snap instantly if very close
      if (distance < 0.1) {
        currentPositionRef.current = target;
        setPosition(target);
        rafRef.current = requestAnimationFrame(interpolate);
        return;
      }
      
      // Ultra-high speed interpolation (0.98 = very fast, almost instant)
      const speed = 0.98;
      const newX = current.x + dx * (1 - speed);
      const newY = current.y + dy * (1 - speed);
      
      currentPositionRef.current = { x: newX, y: newY };
      setPosition({ x: newX, y: newY });
      
      rafRef.current = requestAnimationFrame(interpolate);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseenter", moveCursor);
    window.addEventListener("mouseleave", hideCursor);

    // Start continuous loop
    interpolate();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseenter", moveCursor);
      window.removeEventListener("mouseleave", hideCursor);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
        transition: "none",
      }}
    >
      <motion.div
        animate={{
          scale: isVisible ? 1 : 0,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "tween",
          duration: 0.15,
          ease: "easeOut",
        }}
        className="text-white text-2xl font-bold select-none"
        style={{
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
        }}
      >
        :)
      </motion.div>
    </div>
  );
}
