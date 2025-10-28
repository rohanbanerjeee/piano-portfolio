"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const whiteKeys = [
  { label: "About Me", href: "/about-me" },
  { label: "Projects", href: "/projects" },
  { label: "Experiences", href: "/experiences" },
  { label: "Involvements", href: "/involvements" },
  { label: "Funzies", href: "/funzies" },
]

const blackKeys = [
  { label: "Bio", href: "/bio", left: "13%" },
  { label: "Music", href: "/music", left: "30%" },
  { label: "Tech", href: "/tech", left: "47%" },
  { label: "Life", href: "/life", left: "64%" },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black flex flex-col items-center justify-center p-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold text-white mb-4">Your Name</h1>
        <p className="text-xl text-gray-400">Developer • Designer • Creative</p>
      </div>

      {/* Piano Keyboard */}
      <div className="relative w-full max-w-4xl" style={{ perspective: "1000px" }}>
        {/* Piano body shadow/base */}
        <div className="absolute -inset-4 bg-gradient-to-b from-zinc-800 to-zinc-950 rounded-lg -z-10 shadow-2xl" />

        {/* White Keys */}
        <div className="flex gap-[2px] p-4">
          {whiteKeys.map((key, index) => (
            <Link key={index} href={key.href} className="flex-1">
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ y: 6 }}
                className="relative h-72 rounded-b-xl cursor-pointer flex items-end justify-center pb-8 group"
                style={{
                  background: "linear-gradient(to bottom, #ffffff 0%, #f8f8f8 50%, #e8e8e8 100%)",
                  boxShadow: `
                    inset 0 -4px 8px rgba(0, 0, 0, 0.1),
                    inset 0 2px 4px rgba(255, 255, 255, 0.9),
                    0 8px 16px rgba(0, 0, 0, 0.3),
                    0 2px 4px rgba(0, 0, 0, 0.2)
                  `,
                  borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
                  borderRight: "1px solid rgba(0, 0, 0, 0.1)",
                  transformStyle: "preserve-3d",
                  transition: "all 0.1s ease",
                }}
              >
                {/* Key top highlight */}
                <div
                  className="absolute top-0 left-0 right-0 h-2 rounded-t-xl"
                  style={{
                    background: "linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
                  }}
                />

                {/* Key side shadow for depth */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-8 rounded-b-xl"
                  style={{
                    background: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.15))",
                  }}
                />

                <span className="text-black font-semibold text-lg relative z-10 opacity-70 group-hover:opacity-100 transition-opacity">
                  {key.label}
                </span>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Black Keys */}
        <div className="absolute top-4 left-4 right-4 h-44 pointer-events-none">
          {blackKeys.map((key, index) => (
            <Link key={index} href={key.href} className="pointer-events-auto absolute" style={{ left: key.left }}>
              <motion.div
                whileHover={{ y: -1 }}
                whileTap={{ y: 4 }}
                className="relative w-14 h-44 rounded-b-lg cursor-pointer flex items-end justify-center pb-6 group"
                style={{
                  background: "linear-gradient(135deg, #2a2a2a 0%, #0a0a0a 50%, #000000 100%)",
                  boxShadow: `
                    inset 0 -2px 4px rgba(255, 255, 255, 0.1),
                    inset 0 2px 8px rgba(0, 0, 0, 0.8),
                    0 12px 24px rgba(0, 0, 0, 0.6),
                    0 4px 8px rgba(0, 0, 0, 0.4),
                    inset -1px 0 2px rgba(255, 255, 255, 0.05),
                    inset 1px 0 2px rgba(255, 255, 255, 0.05)
                  `,
                  border: "1px solid rgba(0, 0, 0, 0.9)",
                  transformStyle: "preserve-3d",
                  transition: "all 0.1s ease",
                }}
              >
                {/* Glossy highlight on black key */}
                <div
                  className="absolute top-2 left-1 right-1 h-12 rounded-t"
                  style={{
                    background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.15), transparent)",
                  }}
                />

                {/* Bottom bevel */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-6 rounded-b-lg"
                  style={{
                    background: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.5))",
                  }}
                />

                <span className="text-white font-medium text-xs relative z-10 opacity-60 group-hover:opacity-100 transition-opacity">
                  {key.label}
                </span>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 text-gray-500 text-sm">Click any key to explore</div>
    </div>
  )
}
