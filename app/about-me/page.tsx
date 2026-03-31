"use client";

import { motion } from "framer-motion";
import {
  User,
  GraduationCap,
  Code,
  Cpu,
  BookOpen,
  Globe,
  Wrench,
  Briefcase,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const skills = [
  {
    category: "Programming",
    icon: <Code className="w-5 h-5 text-violet-600" />,
    gradient: "from-violet-50 via-purple-50/80 to-fuchsia-50/50",
    items: ["C", "RISC-V", "Python", "Java"],
  },
  {
    category: "Hardware Prototyping",
    icon: <Cpu className="w-5 h-5 text-amber-600" />,
    gradient: "from-amber-50 via-yellow-50/80 to-orange-50/50",
    items: ["Arduino", "ESP32", "Breadboarding", "FPGA", "VHDL"],
  },
  {
    category: "Software",
    icon: <Wrench className="w-5 h-5 text-sky-600" />,
    gradient: "from-sky-50 via-blue-50/80 to-indigo-50/50",
    items: ["Version Control Systems (VCS)", "MySQL"],
  },
  {
    category: "Web & Mobile Dev",
    icon: <Globe className="w-5 h-5 text-emerald-600" />,
    gradient: "from-emerald-50 via-teal-50/80 to-cyan-50/50",
    items: ["HTML", "React", "JavaScript", "CSS", "Flask"],
  },
];


export default function AboutMePage() {
  return (
    <div
      className="min-h-screen text-gray-900"
      style={{
        fontFamily: "var(--font-dm-sans)",
        backgroundColor: "#fafafa",
        backgroundImage: "radial-gradient(circle, #e0e0e0 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 py-24 space-y-20">
        {/* Header */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <div className="p-2.5 rounded-xl bg-gray-100 border border-gray-200">
            <User className="w-5 h-5 text-red-500" />
          </div>
          <h1
            className="text-4xl font-bold text-gray-900"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            About Me
          </h1>
        </motion.div>

        {/* Row 1: Education left, Image right */}
        <motion.section
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="flex flex-col md:flex-row items-center gap-8"
        >
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-3 mb-1">
              <div className="p-2 rounded-lg bg-gray-100 border border-gray-200">
                <GraduationCap className="w-5 h-5 text-red-500" />
              </div>
              <h2
                className="text-2xl font-bold"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Education
              </h2>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Georgia Institute of Technology</h3>
              <p className="text-gray-600 text-sm">
                Bachelor of Science, Computer Engineering ·{" "}
                <span className="text-red-500 font-semibold">3.80 GPA</span>
              </p>
              <p className="text-gray-500 text-sm">Expected May 2027</p>
            </div>

            <div>
              <p className="text-gray-600 text-sm">
                Thread:{" "}
                <a
                  href="https://catalog.gatech.edu/programs/computing-hardware-emerging-architectures-systems-architecture-computer-engineering-bs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:text-red-600 underline underline-offset-2 transition-colors"
                >
                  Computing Hardware &amp; Emerging Architectures + Systems &amp; Architecture
                </a>
              </p>
            </div>

            <div className="space-y-3 pt-1">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-3.5 h-3.5 text-gray-400" />
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Completed
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Data Structures & Algorithms",
                    "Fundamentals of Digital Design",
                    "Object Oriented Programming",
                    "Objects and Design",
                  ].map((course) => (
                    <Badge
                      key={course}
                      variant="outline"
                      className="border-gray-300 text-gray-700 bg-white text-xs"
                    >
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-3.5 h-3.5 text-gray-400" />
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    In Progress
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Programming Hardware Software Systems",
                    "Data Analysis & Algorithms",
                    "Digital Design Lab",
                    "Circuit Design",
                  ].map((course) => (
                    <Badge
                      key={course}
                      variant="outline"
                      className="border-red-200 text-red-600 bg-red-50 text-xs"
                    >
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-80 shrink-0 aspect-4/3 rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <img
              src="/IMG_2777.jpeg"
              alt="Rohan Banerjee"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 rounded-xl bg-gray-100 border border-gray-200">
              <Code className="w-5 h-5 text-red-500" />
            </div>
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Skills
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((group) => (
              <div
                key={group.category}
                className={`rounded-2xl border border-gray-200 bg-gradient-to-br ${group.gradient} p-5 space-y-3 shadow-sm`}
              >
                <div className="flex items-center gap-2">
                  {group.icon}
                  <h3 className="font-semibold text-lg">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-gray-100 text-gray-700 border-0 hover:bg-gray-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Experiences & Activities */}
        <motion.section
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 rounded-xl bg-gray-100 border border-gray-200">
              <Briefcase className="w-5 h-5 text-red-500" />
            </div>
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Experiences &amp; Activities
            </h2>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-3 shadow-sm flex items-center gap-3">
              <span className="text-xs font-semibold text-red-500 uppercase tracking-wide">Upcoming</span>
              <span className="text-sm text-gray-800 font-medium">Data Engineering Intern at Lockheed Martin</span>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-sky-50 via-indigo-50/70 to-violet-50/40 p-6 space-y-2 shadow-sm">
              <h3 className="text-lg font-semibold">Software</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                I&apos;ve held multiple software engineering internships, including
                building performance testing frameworks at RLI Insurance Corporation,
                developing scalable ML pipelines at AAA Global Technologies, and creating
                automated test suites with Playwright and Selenium at Zentek Global.
                I&apos;ve also built backend applications for image categorization at
                Shoot Proof and co-developed employee engagement tools at Cool Leaf.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-emerald-50 via-teal-50/70 to-cyan-50/40 p-6 space-y-2 shadow-sm">
              <h3 className="text-lg font-semibold">Research</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Currently, I&apos;m a Research Assistant in Georgia Tech&apos;s
                Intelligent Vision and Automation Lab (IVALab), developing algorithms for
                vision-based navigation, SLAM, and robotic manipulation. My work
                integrates computer vision, machine learning, and control theory to
                advance autonomous robotics and accessibility technologies.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
