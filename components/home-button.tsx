"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

const lightPages = ["/about-me", "/projects", "/passions"];

export default function HomeButton() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const isLight = lightPages.includes(pathname);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 25, delay: 0.1 }}
      className="fixed top-5 left-5 z-50"
    >
      <Link href="/">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`flex items-center justify-center w-11 h-11 rounded-full backdrop-blur-md shadow-lg transition-colors ${
            isLight
              ? "bg-black/5 border border-black/10 shadow-black/10 hover:bg-black/10"
              : "bg-white/10 border border-white/20 shadow-black/30 hover:bg-white/20"
          }`}
        >
          <Home className={`w-5 h-5 ${isLight ? "text-gray-700" : "text-white"}`} />
        </motion.div>
      </Link>
    </motion.div>
  );
}
