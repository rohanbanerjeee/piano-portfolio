"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import LiquidEther from "@/components/liquid-ether";
import CustomCursor from "@/components/custom-cursor";

const whiteKeys = [
  { label: "About Me", href: "/about-me" },
  { label: "Projects", href: "/projects" },
  { label: "Experiences", href: "/experiences" },
  { label: "Involvements", href: "/involvements" },
  { label: "Funzies", href: "/funzies" },
];

const blackKeys = [
  { label: "Bio", href: "/bio", between: 0 }, // Between white keys 0 and 1
  { label: "Music", href: "/music", between: 1 }, // Between white keys 1 and 2
  { label: "Tech", href: "/tech", between: 2 }, // Between white keys 2 and 3
  { label: "Life", href: "/life", between: 3 }, // Between white keys 3 and 4
];

export default function Home() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = "* { cursor: none !important; }";
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <div className="relative min-h-screen overflow-hidden bg-black cursor-none">
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
          <div className="text-center mb-auto mt-32">
            <h1 className="text-8xl font-bold text-white mb-4">
              Rohan Banerjee
            </h1>
            <p className="text-xl text-gray-400">
              Developer • Designer • Creative
            </p>
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
              {whiteKeys.map((key, index) => (
                <Link key={index} href={key.href} className="flex-1">
                  <motion.div
                    whileHover={{
                      scale: 1.01,
                      y: -3,
                      rotateX: -2,
                    }}
                    whileTap={{
                      scale: 0.995,
                      y: 8,
                      rotateX: 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 25,
                      mass: 0.8,
                    }}
                    className="relative h-96 rounded-b-[2rem] cursor-pointer flex items-end justify-center pb-12 group"
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

                    <span className="text-black font-semibold text-2xl relative z-10 opacity-70 group-hover:opacity-100 transition-opacity">
                      {key.label}
                    </span>
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Black Keys */}
            <div className="absolute top-4 left-4 right-4 h-72 pointer-events-none">
              {blackKeys.map((key, index) => {
                const whiteKeyWidth = 100 / whiteKeys.length;
                const blackKeyWidth = whiteKeyWidth * 0.55;
                const centerPercent = (key.between + 1) * whiteKeyWidth;
                const leftPercent = centerPercent;

                return (
                  <Link
                    key={index}
                    href={key.href}
                    className="pointer-events-auto absolute z-20"
                    style={{
                      left: `${leftPercent}%`,
                      width: `${blackKeyWidth}%`,
                      transform: "translateX(-50%)",
                    }}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.015,
                        y: -2,
                        rotateX: -1,
                      }}
                      whileTap={{
                        scale: 0.99,
                        y: 5,
                        rotateX: 0.5,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 450,
                        damping: 28,
                        mass: 0.7,
                      }}
                      className="relative h-72 rounded-b-[1.5rem] cursor-pointer flex items-end justify-center pb-10 group"
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
                        transformStyle: "preserve-3d",
                        transformPerspective: 1000,
                      }}
                    >
                      {/* Glossy highlight on black key - enhanced realistic shine */}
                      <div
                        className="absolute top-0 left-2 right-2 h-14 rounded-t-[1rem] opacity-90"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.2) 25%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.05) 75%, transparent 100%)",
                          boxShadow:
                            "inset 0 2px 4px rgba(255, 255, 255, 0.15)",
                        }}
                      />

                      {/* Side lighting - left edge highlight */}
                      <div
                        className="absolute top-0 bottom-0 left-0 w-1.5 rounded-tl-[1.5rem]"
                        style={{
                          background:
                            "linear-gradient(90deg, rgba(150, 150, 150, 0.3), transparent)",
                        }}
                      />

                      {/* Bottom bevel - enhanced depth */}
                      <div
                        className="absolute bottom-0 left-0 right-0 h-10 rounded-b-[1.5rem]"
                        style={{
                          background:
                            "linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0.7) 100%)",
                        }}
                      />

                      <span className="text-white font-medium text-base relative z-10 opacity-60 group-hover:opacity-100 transition-opacity">
                        {key.label}
                      </span>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
