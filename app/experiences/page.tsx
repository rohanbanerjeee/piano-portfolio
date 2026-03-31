"use client";

import { motion } from "framer-motion";
import { Download, MapPin, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const experiences = [
  {
    title: "Research Assistant",
    company: "Intelligent Vision and Automation Lab (IVALab)",
    institution: "Georgia Institute of Technology",
    location: "Atlanta, GA",
    dates: "Aug 2025 – Present",
    active: true,
    overview:
      "Working on cutting-edge autonomous robotics research at Georgia Tech's IVALab, developing algorithms for robots that can see, think, and act in the real world. This role sits at the intersection of computer vision, machine learning, and control theory — exactly where I want to build my career.",
    bullets: [
      "Researched and developed algorithms for vision-based navigation, robotic manipulation, and SLAM, enabling autonomous robots to perceive, map, and act reliably in dynamic environments.",
      "Contributed to bio-inspired and AI-driven robotics projects, integrating computer vision, machine learning, and control theory to advance autonomous locomotion, grasping, and accessibility technologies.",
    ],
    tags: ["Python", "Computer Vision", "SLAM", "Robotics", "Machine Learning", "ROS"],
  },
  {
    title: "QA Architect Intern",
    company: "RLI Insurance Corporation",
    location: "Alpharetta, GA",
    dates: "May 2025 – Aug 2025",
    active: false,
    overview:
      "Led performance testing initiatives for enterprise insurance software, building the tooling and automation frameworks that improved system reliability and response times. I owned the full testing lifecycle for the company's PUP application — from test plan design to bottleneck identification.",
    bullets: [
      "Ran OctoPerf-based performance testing for RLI's PUP app; built automated scripts and test plans that identified bottlenecks and improved response times by 15%.",
      "Developed software tools in Python to validate APIs, process datasets, and automate workflows; applied object-oriented programming and debugging practices.",
    ],
    tags: ["Python", "OctoPerf", "API Testing", "Performance Testing", "OOP", "Automation"],
  },
  {
    title: "Machine Learning Intern",
    company: "AAA Global Technologies",
    location: "Dunwoody, GA",
    dates: "Aug 2023 – May 2024",
    active: false,
    overview:
      "Applied machine learning and software engineering principles to build scalable data pipelines and Python applications supporting client workflows. The role emphasized writing maintainable, test-driven code that could be deployed and trusted in production.",
    bullets: [
      "Built scalable Python-based applications leveraging algorithms and design patterns; emphasized maintainable, test-driven development for real-world deployments.",
      "Contributed to improving client data workflows and internal content strategy, supporting the company's growth in employee engagement solutions.",
    ],
    tags: ["Python", "Machine Learning", "TDD", "Data Pipelines", "Design Patterns"],
  },
  {
    title: "Software Engineer Intern",
    company: "Zentek Global",
    location: "Remote",
    dates: "Aug 2022 – Aug 2023",
    active: false,
    overview:
      "Built robust automated testing infrastructure using Playwright and Selenium across distributed systems, ensuring frontend and backend reliability. This was my first real engineering role and where I learned to write code that other people depend on.",
    bullets: [
      "Designed and implemented automated test suites using Playwright and Selenium to validate frontend and backend functionality across distributed systems.",
      "Collaborated with developers to integrate and transform structured datasets into software systems; improved reliability and system compatibility.",
    ],
    tags: ["Playwright", "Selenium", "JavaScript", "Test Automation", "Distributed Systems"],
  },
];

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-24 space-y-8">
        {/* Header */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <h1 className="text-4xl font-bold mb-2">Experience</h1>
            <p className="text-gray-400 text-base">
              From automated testing to autonomous robotics — a timeline of where
              I&apos;ve worked and what I&apos;ve built.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/15 text-sm font-medium text-white hover:bg-white/15 transition-colors shrink-0"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[11px] top-4 bottom-4 w-px bg-white/10" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title + exp.company}
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
                className="relative pl-10"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-1.5 w-[23px] h-[23px] rounded-full border-2 ${
                    exp.active
                      ? "border-red-400 bg-red-400/20"
                      : "border-white/20 bg-white/5"
                  }`}
                >
                  {exp.active && (
                    <div className="absolute inset-1 rounded-full bg-red-400 animate-pulse" />
                  )}
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/3 p-6 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-lg font-bold">{exp.title}</h2>
                        {exp.active && (
                          <Badge className="bg-red-500/20 text-red-300 border-red-500/30 text-[10px]">
                            Current
                          </Badge>
                        )}
                      </div>
                      <p className="text-gray-300 text-sm font-medium">
                        {exp.company}
                        {exp.institution && (
                          <span className="text-gray-500">
                            {" "}
                            · {exp.institution}
                          </span>
                        )}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3 text-xs text-gray-500 shrink-0">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.dates}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {exp.overview}
                  </p>

                  <ul className="space-y-2 text-sm text-gray-400">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="text-red-400 mt-0.5 shrink-0">•</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {exp.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-white/10 text-gray-200 border-0 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
