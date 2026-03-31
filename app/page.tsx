"use client";

import { useCallback, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram, Linkedin, Github } from "lucide-react";

import LiquidEther from "@/components/liquid-ether";

const chords: number[][] = [
  [261.63, 329.63, 392.0],  // C major: C4, E4, G4
  [293.66, 369.99, 440.0],  // D major: D4, F#4, A4
  [329.63, 415.3, 493.88],  // E major: E4, G#4, B4
  [349.23, 440.0, 523.25],  // F major: F4, A4, C5
];

const whiteKeys = [
  { label: "About Me", href: "/about-me" },
  { label: "Projects", href: "/projects" },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1fYzPOfedpD2MXAHPqPXRp_DIxKdVLKAK/view?usp=sharing",
    external: true,
  },
  { label: "Passions", href: "/passions" },
];

const blackKeys = [
  { between: 0 },
  { between: 1 },
  { between: 2 },
];

export default function Home() {
  const audioCtxRef = useRef<AudioContext | null>(null);

  const playChord = useCallback((frequencies: number[]) => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new AudioContext();
    }
    const ctx = audioCtxRef.current;

    frequencies.forEach((freq) => {
      const oscillator = ctx.createOscillator();
      const gain = ctx.createGain();
      oscillator.type = "triangle";
      oscillator.frequency.value = freq;
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);
      oscillator.connect(gain);
      gain.connect(ctx.destination);
      oscillator.start();
      oscillator.stop(ctx.currentTime + 1.2);
    });
  }, []);

  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-black">
        {/* LiquidEther Background - only responds to mouse movement */}
        <div className="absolute inset-0 -z-10">
          <LiquidEther
            colors={["#FF0000", "#FF4444", "#FF6666", "#FF8888"]}
            mouseForce={40}
            cursorSize={140}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.7}
            isBounce={false}
            autoDemo={false}
            autoSpeed={0.5}
            autoIntensity={3.0}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>

        {/* Content with semi-transparent overlay to show liquid ether */}
        <div className="relative min-h-screen bg-black/75 flex flex-col items-center justify-end p-0 pb-0">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-auto mt-24 md:mt-32 px-6 md:px-16">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-36 h-36 md:w-44 md:h-44 rounded-full border-2 border-white/15 bg-white/5 shrink-0 flex items-center justify-center overflow-hidden"
            >
              <img
                src="/profile.jpg/IMG_2441.jpeg"
                alt="Rohan Banerjee"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Name, Statement, Socials */}
            <div className="text-center md:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-7xl font-bold text-white mb-3"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Rohan Banerjee
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-base md:text-lg text-gray-400 max-w-lg leading-relaxed"
              >
                A passionate second-year Computer Engineering major at Georgia Tech,
                interested in chip design, embedded systems, and software engineering.
              </motion.p>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center justify-center md:justify-start gap-5 mt-5"
              >
                <a
                  href="https://www.instagram.com/rban_25"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rohanbanerjee68/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/rohanbanerjeee"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </motion.div>
            </div>
          </div>

          {/* Piano Keyboard */}
          <div
            className="relative w-full mt-auto px-4"
            style={{ perspective: "1000px" }}
          >
            {/* Piano body shadow/base - enhanced 3D effect */}
            <div className="absolute -inset-4 bg-black/80 rounded-[1.5rem] -z-10 shadow-[0_24px_64px_rgba(0,0,0,0.8),0_12px_24px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(0,0,0,0.4)]" />

            {/* White Keys */}
            <div className="flex gap-[2px] p-4">
              {whiteKeys.map((key, index) => {
                const keyContent = (
                  <motion.div
                    whileHover={{
                      scale: 1.003,
                      y: -1,
                    }}
                    whileTap={{
                      scale: 0.998,
                      y: 3,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                    className="relative h-96 rounded-b-[2rem] cursor-pointer flex items-end justify-center pb-12 group transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.6),0_0_50px_rgba(255,255,255,0.4),0_0_100px_rgba(255,255,255,0.2),0_0_150px_rgba(255,255,255,0.1)]"
                    style={{
                      background:
                        "linear-gradient(180deg, #ffffff 0%, #f5f5f5 25%, #eeeeee 50%, #e8e8e8 75%, #d0d0d0 100%)",
                      boxShadow: `
                      inset 0 -12px 24px rgba(0, 0, 0, 0.25),
                      inset 0 6px 12px rgba(255, 255, 255, 0.98),
                      inset 0 1px 0 rgba(255, 255, 255, 1),
                      0 16px 32px rgba(0, 0, 0, 0.5),
                      0 8px 16px rgba(0, 0, 0, 0.4),
                      0 2px 4px rgba(0, 0, 0, 0.3),
                      inset -2px 0 4px rgba(0, 0, 0, 0.1),
                      inset 2px 0 4px rgba(255, 255, 255, 0.4)
                    `,
                      borderLeft: "1px solid rgba(255, 255, 255, 0.5)",
                      borderRight: "1px solid rgba(0, 0, 0, 0.2)",
                      borderTop: "1px solid rgba(255, 255, 255, 0.3)",
                      transformStyle: "preserve-3d",
                      transformPerspective: 1000,
                    }}
                  >
                    {/* Key top highlight - enhanced realistic shine */}
                    <div
                      className="absolute top-0 left-0 right-0 h-6 rounded-t-[2rem] opacity-90"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.8) 30%, rgba(255, 255, 255, 0.4) 60%, transparent 100%)",
                        boxShadow: "inset 0 2px 4px rgba(255, 255, 255, 0.5)",
                      }}
                    />

                    {/* Key side lighting - left edge highlight */}
                    <div
                      className="absolute top-0 bottom-0 left-0 w-2 rounded-tl-[2rem]"
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(255, 255, 255, 0.4), transparent)",
                      }}
                    />

                    {/* Key side shadow for depth */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-12 rounded-b-xl"
                      style={{
                        background:
                          "linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.25) 100%)",
                      }}
                    />

                    <span className="text-black font-semibold text-2xl relative z-10 opacity-70 group-hover:opacity-100 group-hover:text-amber-500 transition-all duration-300">
                      {key.label}
                    </span>
                  </motion.div>
                );

                if (key.external) {
                  return (
                    <a
                      key={index}
                      href={key.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                      onClick={() => playChord(chords[index])}
                    >
                      {keyContent}
                    </a>
                  );
                }

                return (
                  <Link
                    key={index}
                    href={key.href}
                    className="flex-1"
                    onClick={() => playChord(chords[index])}
                  >
                    {keyContent}
                  </Link>
                );
              })}
            </div>

            {/* Black Keys (decorative) */}
            <div className="absolute top-4 left-4 right-4 h-72 pointer-events-none">
              {blackKeys.map((key, index) => {
                const whiteKeyWidth = 100 / whiteKeys.length;
                const blackKeyWidth = whiteKeyWidth * 0.55;
                const centerPercent = (key.between + 1) * whiteKeyWidth;

                return (
                  <div
                    key={index}
                    className="absolute z-20"
                    style={{
                      left: `${centerPercent}%`,
                      width: `${blackKeyWidth}%`,
                      transform: "translateX(-50%)",
                    }}
                  >
                    <div
                      className="relative h-72 rounded-b-[1.5rem]"
                      style={{
                        background:
                          "linear-gradient(180deg, #3a3a3a 0%, #2a2a2a 15%, #1a1a1a 40%, #0a0a0a 65%, #000000 100%)",
                        boxShadow: `
                        inset 0 -8px 16px rgba(255, 255, 255, 0.2),
                        inset 0 6px 16px rgba(0, 0, 0, 0.95),
                        inset 0 1px 0 rgba(255, 255, 255, 0.1),
                        0 18px 36px rgba(0, 0, 0, 0.8),
                        0 8px 16px rgba(0, 0, 0, 0.7),
                        0 2px 4px rgba(0, 0, 0, 0.6),
                        inset -2px 0 4px rgba(255, 255, 255, 0.12),
                        inset 2px 0 4px rgba(0, 0, 0, 0.8),
                        inset 0 0 20px rgba(0, 0, 0, 0.5)
                      `,
                        border: "1px solid rgba(0, 0, 0, 0.95)",
                        borderTop: "1px solid rgba(80, 80, 80, 0.3)",
                      }}
                    >
                      <div
                        className="absolute top-0 left-2 right-2 h-14 rounded-t-[1rem] opacity-90"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.2) 25%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.05) 75%, transparent 100%)",
                          boxShadow:
                            "inset 0 2px 4px rgba(255, 255, 255, 0.15)",
                        }}
                      />

                      <div
                        className="absolute top-0 bottom-0 left-0 w-1.5 rounded-tl-[1.5rem]"
                        style={{
                          background:
                            "linear-gradient(90deg, rgba(150, 150, 150, 0.3), transparent)",
                        }}
                      />

                      <div
                        className="absolute bottom-0 left-0 right-0 h-10 rounded-b-[1.5rem]"
                        style={{
                          background:
                            "linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0.7) 100%)",
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
