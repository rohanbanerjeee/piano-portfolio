"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black flex flex-col items-center justify-end p-0 pb-0">
      {/* Header */}
      <div className="text-center mb-auto mt-16">
        <h1 className="text-6xl font-bold text-white mb-4">Rohan Banerjee</h1>
        <p className="text-xl text-gray-400">Developer • Designer • Creative</p>
      </div>

      {/* Piano Keyboard */}
      <div
        className="relative w-full mt-auto px-4"
        style={{ perspective: "1000px" }}
      >
        {/* Piano body shadow/base - enhanced 3D effect */}
        <div className="absolute -inset-4 bg-gradient-to-b from-zinc-800 to-zinc-950 rounded-[1.5rem] -z-10 shadow-[0_20px_60px_rgba(0,0,0,0.6),0_10px_20px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(0,0,0,0.3)]" />

        {/* White Keys */}
        <div className="flex gap-[2px] p-4">
          {whiteKeys.map((key, index) => (
            <Link key={index} href={key.href} className="flex-1">
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98, y: 6 }}
                className="relative h-96 rounded-b-[2rem] cursor-pointer flex items-end justify-center pb-12 group transition-all duration-200"
                style={{
                  background:
                    "linear-gradient(to bottom, #ffffff 0%, #f8f8f8 50%, #e8e8e8 100%)",
                  boxShadow: `
                    inset 0 -8px 16px rgba(0, 0, 0, 0.15),
                    inset 0 4px 8px rgba(255, 255, 255, 0.95),
                    0 12px 24px rgba(0, 0, 0, 0.4),
                    0 4px 8px rgba(0, 0, 0, 0.3),
                    0 0 0 2px rgba(0, 0, 0, 0.05)
                  `,
                  borderLeft: "1px solid rgba(255, 255, 255, 0.3)",
                  borderRight: "1px solid rgba(0, 0, 0, 0.15)",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Key top highlight - bubble effect */}
                <div
                  className="absolute top-0 left-0 right-0 h-4 rounded-t-[2rem]"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.3))",
                  }}
                />

                {/* Key side shadow for depth */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-8 rounded-b-xl"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.15))",
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
            const blackKeyWidth = whiteKeyWidth * 0.65;
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
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97, y: 4 }}
                  className="relative h-72 rounded-b-[1.5rem] cursor-pointer flex items-end justify-center pb-10 group transition-all duration-200"
                  style={{
                    background:
                      "linear-gradient(135deg, #2a2a2a 0%, #0a0a0a 50%, #000000 100%)",
                    boxShadow: `
                    inset 0 -4px 8px rgba(255, 255, 255, 0.15),
                    inset 0 4px 12px rgba(0, 0, 0, 0.9),
                    0 14px 28px rgba(0, 0, 0, 0.7),
                    0 5px 10px rgba(0, 0, 0, 0.5),
                    inset -1px 0 3px rgba(255, 255, 255, 0.08),
                    inset 1px 0 3px rgba(255, 255, 255, 0.08),
                    0 0 0 1px rgba(0, 0, 0, 0.5)
                  `,
                    border: "1px solid rgba(0, 0, 0, 0.9)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Glossy highlight on black key - bubble effect */}
                  <div
                    className="absolute top-0 left-1 right-1 h-12 rounded-t-[1rem]"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.05), transparent)",
                    }}
                  />

                  {/* Bottom bevel - enhanced depth */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-8 rounded-b-[1.5rem]"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.6))",
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
  );
}
