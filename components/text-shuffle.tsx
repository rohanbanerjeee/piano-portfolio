"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

interface TextShuffleProps {
  text: string;
  className?: string;
  duration?: number;
  onHover?: boolean;
}

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export default function TextShuffle({
  text,
  className = "",
  duration = 3000,
  onHover = false,
}: TextShuffleProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isShuffling, setIsShuffling] = useState(false);

  const shuffle = useCallback(() => {
    setIsShuffling(true);
    let iteration = 0;
    const maxIterations = text.length * 3;

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setIsShuffling(false);
      }

      iteration += 1 / 3;
    }, 30);
  }, [text]);

  useEffect(() => {
    shuffle();
  }, [shuffle]);

  return (
    <motion.span
      className={className}
      onHoverStart={onHover ? shuffle : undefined}
      animate={{ opacity: 1 }}
    >
      {displayText.split("").map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial={{ opacity: 0 }}
          animate={{
            opacity: isShuffling && char !== text[index] ? 0.3 : 1,
          }}
          transition={{ duration: 0.1 }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

