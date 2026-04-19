"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Eye,
  Bot,
  Briefcase,
  Calendar,
  FlaskConical,
  Cpu,
  Compass,
  Radar,
  Glasses,
  Webhook,
  Microchip,
  Zap,
  Github,
  ExternalLink,
  Swords,
  Trophy,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

type FullProject = {
  placeholder?: false;
  title: string;
  role: string;
  company: string;
  location: string;
  dates: string;
  type: "Project" | "Research";
  icon: LucideIcon;
  gradient: string;
  iconColor: string;
  overview: string;
  bullets: string[];
  impact: string;
  tags: string[];
  image?: string;
  githubUrl?: string;
};

type PlaceholderProject = {
  placeholder: true;
  title: string;
  icon: LucideIcon;
  gradient: string;
  iconColor: string;
};

type ProjectEntry = FullProject | PlaceholderProject;

type HackathonFullProject = {
  placeholder?: false;
  title: string;
  event: string;
  dates: string;
  icon: LucideIcon;
  gradient: string;
  iconColor: string;
  overview: string;
  bullets: string[];
  tags: string[];
  image?: string;
  images?: string[];
  video?: string;
  youtubeUrl?: string;
  devpostUrl?: string;
  githubUrl?: string;
  award?: string;
};

type HackathonEntry = HackathonFullProject | PlaceholderProject;

const projects: ProjectEntry[] = [
  {
    title: "PPE Compliance Detection System",
    role: "Shadowing AI Developer",
    company: "Cobotics Business Services",
    location: "Dunwoody, GA",
    dates: "Jan 2024 – Aug 2024",
    type: "Project",
    icon: Eye,
    gradient: "from-sky-100/95 via-blue-50/75 to-indigo-50/40",
    iconColor: "text-red-600",
    overview:
      "An AI-powered computer vision system designed to enforce personal protective equipment protocols in industrial environments. Using YOLO v5 and Roboflow, the system processes live camera feeds to identify workers who aren't wearing required safety gear — hard hats, vests, goggles — and flags violations in real time.",
    bullets: [
      "Devised cloud-hosted computer vision models using YOLO v5 and Roboflow for real-time PPE violation detection across security cameras and mobile devices. Trained the model on thousands of annotated images captured from active job sites, iterating on bounding-box accuracy across hard hats, safety vests, and goggles.",
      "Led the full ML pipeline end-to-end: data collection from job sites, image annotation with Roboflow's labeling tools, iterative model training with hyperparameter tuning, validation against held-out test sets, and deployment to cloud-hosted inference endpoints for low-latency predictions.",
      "Integrated the system with existing security camera infrastructure using RTSP streams, enabling non-compliance alerts to be pushed to supervisors in real time without requiring any new hardware installations on-site.",
      "Built a dashboard interface that logs every flagged violation with a timestamped snapshot, the detected class, and confidence score — giving safety managers a searchable audit trail for compliance reporting.",
      "Worked closely with on-site safety teams to refine detection thresholds and reduce false positives in challenging lighting conditions, reflective surfaces, and partially occluded gear.",
    ],
    impact:
      "Enabled real-time safety enforcement in workplace environments, reducing the delay between PPE violations and corrective action from hours to seconds. The system processed hundreds of frames per minute across multiple camera feeds simultaneously.",
    tags: [
      "Python",
      "YOLO v5",
      "Roboflow",
      "Computer Vision",
      "Cloud Deployment",
      "Machine Learning",
    ],
  },
  {
    title: "Caregiver Compass",
    role: "Solo Developer",
    company: "Personal Project",
    location: "Atlanta, GA",
    dates: "Mar 2026",
    type: "Project",
    icon: Compass,
    gradient: "from-rose-100/95 via-pink-50/70 to-orange-50/40",
    iconColor: "text-rose-700",
    overview:
      "A mobile-first app built to support dementia caregivers through empathy-building simulations, behavior response guides, emotional self-care tools, and resource directories. Designed around storytelling and calming UX to make a genuinely difficult job a little easier.",
    bullets: [
      "Built four core pillars: immersive caregiver simulations that walk users through realistic dementia scenarios with post-experience debriefs, a searchable behavior toolkit with do/don't communication guides for common situations like sundowning and wandering, an emotional support dashboard with guided journaling prompts and burnout self-assessment quizzes, and a curated resource directory with crisis hotlines and local support groups.",
      "Designed a warm, calming UI system using OKLCH color variables for perceptually uniform tones, a serif + sans font pairing (Lora for headings, Inter for body), and cream/teal/sage color palette specifically chosen for low-stress, extended reading sessions — every design decision was made with caregiver fatigue in mind.",
      "Structured all content through a single mock-data layer for rapid prototyping, with an onboarding flow that personalizes the experience based on the caregiver's relationship to the patient, plus grounding exercises and daily affirmation routines wired into the App Router.",
      "Implemented responsive layouts optimized for mobile-first use since most caregivers access tools on their phones during breaks, with offline-friendly static generation so pages load instantly even on slow connections.",
      "Wrote all narrative copy from scratch — simulation scripts, empathy prompts, and resource descriptions — treating the writing as a core feature rather than placeholder text.",
    ],
    impact:
      "Created a polished prototype that demonstrates how thoughtful UX and strong narrative copy can make caregiving tools feel supportive rather than clinical. The project was built end-to-end in under a week as a solo developer.",
    tags: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "Vercel",
    ],
    githubUrl: "https://github.com/rohanbanerjeee/Caregiver-Compass-App",
    image: "/Caregiver/caregiver-compass.png",
  },
  {
    title: "IVALab Robotics Research",
    role: "Research Assistant",
    company: "Georgia Tech IVALab",
    location: "Atlanta, GA",
    dates: "Aug 2025 – Present",
    type: "Research",
    icon: Bot,
    gradient: "from-emerald-100/95 via-teal-50/70 to-cyan-50/40",
    iconColor: "text-violet-700",
    overview:
      "Ongoing research at Georgia Tech's Intelligent Vision and Automation Lab, developing algorithms that enable autonomous robots to perceive, map, and interact with dynamic environments. The work spans vision-based navigation, simultaneous localization and mapping (SLAM), and robotic manipulation — contributing to the frontier of bio-inspired and AI-driven robotics.",
    bullets: [
      "Researching and developing algorithms for vision-based navigation and robotic manipulation, enabling robots to perceive depth, detect obstacles, and plan paths reliably in cluttered, unstructured environments where pre-mapped layouts aren't available.",
      "Contributing to bio-inspired robotics projects that integrate computer vision, deep learning, and classical control theory for autonomous locomotion and dexterous grasping — drawing on biological motion patterns to improve efficiency and adaptability.",
      "Advancing accessibility-focused technologies by applying SLAM (Simultaneous Localization and Mapping) and real-time perception algorithms to assistive robotics use cases, including navigation aids for visually impaired users.",
      "Running experiments on physical robot platforms in the lab, collecting and processing sensor data from LiDAR, stereo cameras, and IMUs to validate algorithmic improvements against baseline performance metrics.",
      "Collaborating with PhD students and faculty on paper submissions, contributing to literature reviews, experimental design, and result analysis for conference and journal publications.",
    ],
    impact:
      "Contributing to published research advancing autonomous locomotion, grasping, and accessibility technologies at one of the nation's leading robotics labs. Work spans both simulation environments and physical robot platforms.",
    tags: [
      "Python",
      "Computer Vision",
      "SLAM",
      "Robotics",
      "Machine Learning",
      "ROS",
      "Control Theory",
    ],
  },
];

const hackathonProjects: HackathonEntry[] = [
  {
    title: "NutriGO — Eat. Snap. Battle.",
    event: "Claude Builder Club Hackathon",
    dates: "Apr 2026",
    award: "3rd Place",
    icon: Swords,
    gradient: "from-emerald-100/95 via-lime-50/75 to-amber-50/40",
    iconColor: "text-emerald-700",
    overview:
      "A gamified nutrition app where your diet is your army. Eat at real restaurants near you, snap a photo, and Claude scores the meal — turning every healthy choice into collectible cards you can battle friends with 1v1. The cleaner you eat this week, the stronger your deck on Sunday.",
    bullets: [
      "Built a location-aware Discover map seeded with real Midtown and West Midtown Atlanta restaurant data, AI-cleaned and nutrition-scored so each pin shows its top 5 healthiest dishes with macros, a 0–100 health score, and the card fragment that dish would unlock. Restaurant tier (Standard / Healthy / Legendary) gates the rarity of cards you can earn there, turning every block into a treasure map for your deck.",
      "Wired Claude's vision API into a one-tap Snap flow on the Macros home screen — the camera opens, Claude identifies the dish, estimates calories and the protein/carbs/fat split, and returns a 0–100 health score with one sentence of plain-English reasoning. Animated macro rings and a scrubable day selector make daily logging take seconds with zero manual entry.",
      "Designed the Battle system as the competitive payoff: a Collection of cards dynamically generated from Atlanta restaurants where HP scales with calories, ATK with protein, and DEF inversely with fat. Players assemble a 6-card deck and duel turn-by-turn with Attack / Ability / Retreat actions, five wired abilities (Shield, Double Strike, Leech, Airstrike, Rally), and a live combat log that narrates every hit.",
      "Shipped a Twilio + Claude SMS layer so users can log meals over plain text — \"Chipotle chicken bowl\" or a photo gets a reply with macros, fragments earned, and deck status. The agent has full context of the user's macro goals, streak, and collection, so it can also answer \"how am I doing today?\" or \"what should I eat near JFK?\" without ever opening the app.",
      "Stack: React Native (Expo) for mobile with Zustand + AsyncStorage, a Vite + React + TypeScript web companion sharing the same card schema and battle engine, Claude Sonnet for vision and menu ranking, Twilio for SMS routing, and React Native Maps + Google Places for the discovery surface.",
    ],
    tags: [
      "React Native",
      "Expo",
      "TypeScript",
      "Vite",
      "Claude API",
      "Twilio",
      "Zustand",
      "Google Places",
    ],
    githubUrl: "https://github.com/nm121212/ClaudeHack",
    images: [
      "/NutriGO/team.jpeg",
      "/NutriGO/macros.png",
      "/NutriGO/discover.png",
      "/NutriGO/battle.png",
    ],
  },
  {
    title: "HarmonyAPI",
    event: "HackGT 12: Midnight at the Museum",
    dates: "Sep 2025",
    icon: Webhook,
    gradient: "from-teal-100/95 via-emerald-50/75 to-white",
    iconColor: "text-teal-700",
    overview:
      "An AI-powered API that helps healthcare providers cut through information overload. Search a medical topic and HarmonyAPI pulls real studies from PubMed, then uses Groq-hosted LLMs to analyze them for clinical relevance, key findings, and actionable implications in seconds.",
    bullets: [
      "Built a Flask REST API that connects PubMed's biomedical literature database with Groq's ultra-fast LLM inference engine, supporting multiple models (Llama 3.1, Mixtral, Gemma) behind a single JWT-authenticated endpoint. Users send a medical topic and the API handles the full pipeline — search, retrieval, analysis, and response — in one call.",
      "Literature search pulls real peer-reviewed studies from PubMed's database, then the top results are fed to the LLM for a structured breakdown: a plain-language summary, key clinical findings, practical implications for treatment decisions, and a confidence score indicating how well-supported the conclusions are.",
      "Added a rule-based risk prediction engine that takes patient demographic and clinical data, calculates risk scores using weighted heuristics, and estimates associated healthcare costs — plus a population health trend analytics module built with pandas for aggregate reporting across patient cohorts.",
      "Integrated real-time WebSocket notifications via Flask-SocketIO that fire push alerts to connected clients whenever a patient is flagged as high-risk, enabling care teams to respond immediately rather than waiting for batch reports.",
      "Designed the API with modular middleware for rate limiting, request validation, and structured error handling so it could be extended or swapped into different frontend applications without rewriting business logic.",
    ],
    tags: [
      "Python",
      "Flask",
      "Groq API",
      "PubMed",
      "JWT",
      "WebSockets",
      "pandas",
      "REST API",
    ],
    youtubeUrl: "https://www.youtube.com/embed/sLcXdgIRQKA",
    devpostUrl: "https://devpost.com/software/hcp-engagement-api",
  },
  {
    title: "LookOut",
    event: "Hacklytics 2026: Golden Byte",
    dates: "Feb 2026",
    icon: Radar,
    gradient: "from-cyan-100/95 via-sky-50/75 to-white",
    iconColor: "text-cyan-700",
    overview:
      "A real-time traffic intelligence system inspired by Waze. LookOut uses AI to analyze traffic camera feeds, detect incidents in seconds, and reroute drivers around danger automatically.",
    bullets: [
      "Built an 8-stage asynchronous pipeline that ingests raw traffic camera frames, sends them to Gemini for classification, and outputs structured incident data including incident type (collision, stall, debris), severity level, number of vehicles involved, and which lanes are blocked — all from a single API call per frame.",
      "Stored detected incidents in a SQLite database and generated vector embeddings via Gemini for semantic similarity search through Actian VectorAI, with a fast in-memory fallback index so queries still work if the vector DB is unreachable.",
      "Integrated OSRM (Open Source Routing Machine) to compute multiple alternate driving paths in real time, scoring each route against all active incidents and automatically selecting the shortest path that avoids every blocked segment.",
      "Built a Next.js + Leaflet interactive map frontend with live polling that updates every few seconds, clickable incident markers with severity-colored dots, camera frame popups showing the raw image that triggered the detection, and Web Speech API voice alerts that announce new incidents hands-free.",
      "Designed the backend with FastAPI for high-throughput async request handling, with structured logging, retry logic for flaky camera feeds, and automatic incident expiration so stale data clears itself from the map.",
    ],
    tags: [
      "Python",
      "FastAPI",
      "Next.js",
      "React",
      "Gemini",
      "YOLOv8",
      "SQLite",
      "Vector DB",
      "OSRM",
      "TypeScript",
    ],
    image: "/LookOut/lookout-demo.jpeg",
    youtubeUrl: "https://www.youtube.com/embed/xyyFgD8itY8",
    devpostUrl: "https://devpost.com/software/lookout-n5491g",
  },
  {
    title: "ARVS",
    event: "AI ATL 2025",
    dates: "Nov 2025",
    icon: Glasses,
    gradient: "from-fuchsia-100/95 via-pink-50/75 to-white",
    iconColor: "text-fuchsia-700",
    overview:
      "Smart glasses that remember everything you see. ARVS (Augmented Recall & Vision System) records video from your daily life, uses Gemini to analyze every object, scene, and activity, and lets you ask natural language questions like \"Where did I leave my wallet?\" to get instant answers with voice responses.",
    bullets: [
      "Built a live streaming pipeline that continuously captures 3-second video chunks from the glasses' camera, sends each chunk to Gemini 2.0 Flash for real-time object detection, scene classification, and activity recognition, then stores every analyzed frame in a persistent spatial memory session so nothing is ever forgotten.",
      "Integrated Web Speech API for always-on continuous speech recognition — the system listens in the background, detects when the user asks a question (like \"Where did I leave my keys?\"), determines whether to search current video context or past memory based on verb tense, and returns an answer within seconds.",
      "Implemented a three-tier query system to keep responses fast and costs low: a local cache handles repeated questions instantly, a keyword-matching index catches simple object lookups without any API call, and Gemini NLU handles complex natural language queries only when the first two tiers miss.",
      "Added ElevenLabs text-to-speech integration so answers are spoken back naturally through the glasses' audio output, making the entire experience hands-free and eyes-free — no screen interaction required.",
      "Built a proof-of-concept Solana NFT minting feature that lets users save memorable moments (a sunset, a concert, meeting someone new) as on-chain tokens with the AI-generated scene description embedded in the metadata.",
      "Designed the Express backend with session management so multiple users can run independent memory streams simultaneously, with MongoDB storing the full history of detected objects, scenes, and user queries for each session.",
    ],
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Gemini",
      "MongoDB",
      "ElevenLabs",
      "Solana",
      "Snowflake",
    ],
    image: "/ARVS/Gemini_Generated_Image_l5asp1l5asp1l5as.png",
    video: "/ARVS/IMG_1319.MOV",
    youtubeUrl: "https://www.youtube.com/embed/CJRQLQQt7Pc",
    devpostUrl: "https://devpost.com/software/augmented-recall-vision-system",
  },
];

type HardwareProject = {
  title: string;
  course: string;
  institution: string;
  icon: LucideIcon;
  gradient: string;
  iconColor: string;
  overview: string;
  bullets: string[];
  tags: string[];
  images: string[];
};

const hardwareProjects: HardwareProject[] = [
  {
    title: "Production Line Monitor",
    course: "ECE 2031 — Digital Design Lab",
    institution: "Georgia Tech",
    icon: Cpu,
    gradient: "from-amber-100/95 via-yellow-50/75 to-white",
    iconColor: "text-amber-700",
    overview:
      "A hardware state machine built on a breadboard to monitor an automated production line. The Moore machine uses two D flip-flops (74HCT74), NAND gates, and inverters to track whether a feeder and packager are running correctly, outputting a green or red status signal in real time clocked at 1 Hz.",
    bullets: [
      "Designed a three-state Moore machine entirely from scratch — started with a behavioral specification, created both classic and UML state diagrams following OMG/ISO standards, derived a full state transition table covering all possible input combinations including unused states with don't-care assignments, and minimized next-state logic expressions using Karnaugh maps.",
      "Implemented the complete circuit on a breadboard using a 74HCT74 dual D flip-flop for state storage, 74HC00 quad 2-input NAND gates and 74HC20 dual 4-input NAND gates for next-state logic (drawn in correct mixed-logic SoP form), and 74HC04 hex inverters — with DIP switches for the feeding/packing inputs, a pushbutton clock from the DE10-Standard FPGA board, and LEDs to monitor both state bits.",
      "Simulated the full design in Intel Quartus Prime before touching the breadboard, creating custom VWF test vectors that exercised every state transition, verified Moore outputs in all states, and confirmed correct reset behavior — catching a wiring mistake in the process that would have taken much longer to debug on hardware.",
      "Reused the combinational logic circuit from a prior lab (Lab 2) as part of the next-state network, recognizing that one of the minimized SoP expressions was nearly identical to a previous design — reducing build time and gate count.",
      "Calculated the maximum reliable clock frequency by tracing the worst-case timing path through flip-flop propagation delay, inverter delay, NAND gate delay, and flip-flop setup time, annotating the schematic with datasheet values for each component.",
    ],
    tags: [
      "Digital Logic",
      "State Machines",
      "D Flip-Flops",
      "Karnaugh Maps",
      "Quartus",
      "Breadboard",
      "VHDL",
      "74HCT74",
    ],
    images: ["/hardware/IMG_2821.jpeg", "/hardware/IMG_2926.jpeg"],
  },
];

function isPlaceholder(p: ProjectEntry | HackathonEntry): p is PlaceholderProject {
  return (p as PlaceholderProject).placeholder === true;
}

function PlaceholderProjectCard({
  project,
  index,
}: {
  project: PlaceholderProject;
  index: number;
}) {
  const Icon = project.icon;
  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
    >
      <div className="rounded-2xl border border-slate-200/90 bg-white/85 shadow-md shadow-slate-200/40 overflow-hidden backdrop-blur-sm">
        <div
          className={`relative h-40 bg-linear-to-b ${project.gradient} flex items-center justify-center`}
        >
          <div className="p-4 rounded-2xl bg-white/80 border border-white shadow-sm backdrop-blur-sm">
            <Icon className={`w-10 h-10 ${project.iconColor}`} />
          </div>
        </div>
        <div className="p-6 space-y-2">
          <h2 className="text-xl font-bold text-slate-900">{project.title}</h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Description and details coming soon.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function FullProjectCard({ project, index }: { project: FullProject; index: number }) {
  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
    >
      <div className={`rounded-2xl border border-slate-200/90 bg-gradient-to-br ${project.gradient} shadow-md shadow-slate-200/40 overflow-hidden backdrop-blur-sm`}>
        <div className="p-6 space-y-4">
          {project.type === "Research" && (
            <Badge className="bg-violet-100 text-violet-800 border-violet-200 w-fit">
              <FlaskConical className="w-3 h-3 mr-1" />
              Research
            </Badge>
          )}
          <div>
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-xl font-bold text-slate-900">{project.title}</h2>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex shrink-0 items-center gap-1.5 rounded-full border border-slate-200/90 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
                >
                  <Github className="h-3 w-3" />
                  GitHub
                </a>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5" />
                {project.role} · {project.company}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {project.dates}
              </span>
            </div>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed">{project.overview}</p>

          {project.image && (
            <div className="overflow-hidden rounded-xl border border-slate-200/80 max-w-sm">
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
          )}

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="details" className="border-slate-200">
              <AccordionTrigger className="text-sm text-slate-700 hover:text-slate-900 hover:no-underline py-3">
                Details &amp; Impact <span className="ml-1 text-slate-400 text-xs font-normal">(click to expand)</span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-medium text-slate-800 mb-2">What I Did</h4>
                    <ul className="space-y-2 text-slate-600">
                      {project.bullets.map((bullet, j) => (
                        <li key={j} className="flex gap-2">
                          <span className="text-rose-500 mt-1 shrink-0">•</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 mb-1">Impact</h4>
                    <p className="text-slate-600">{project.impact}</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="flex flex-wrap gap-2 pt-1">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-slate-100/90 text-slate-700 border-0 text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function HackathonFullCard({
  project,
  index,
}: {
  project: HackathonFullProject;
  index: number;
}) {
  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
    >
      <div className={`rounded-2xl border border-slate-200/90 bg-gradient-to-br ${project.gradient} shadow-md shadow-slate-200/40 overflow-hidden backdrop-blur-sm`}>
        <div className="p-6 space-y-4">
          <div>
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-2">
                {project.award && (
                  <Badge className="bg-amber-100 text-amber-800 border-amber-200 w-fit">
                    <Trophy className="w-3 h-3 mr-1" />
                    {project.award}
                  </Badge>
                )}
                <h2 className="text-xl font-bold text-slate-900">{project.title}</h2>
              </div>
              <div className="flex shrink-0 flex-wrap justify-end gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-full border border-slate-200/90 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    <Github className="h-3 w-3" />
                    GitHub
                  </a>
                )}
                {project.devpostUrl && (
                  <a
                    href={project.devpostUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-full border border-slate-200/90 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    <ExternalLink className="h-3 w-3" />
                    Devpost
                  </a>
                )}
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" />
                {project.event}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {project.dates}
              </span>
            </div>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed">{project.overview}</p>

          {(project.image || project.images?.length || project.video || project.youtubeUrl) && (
            <div className="flex flex-wrap gap-4">
              {project.images?.map((img, j) => (
                <div
                  key={j}
                  className="overflow-hidden rounded-xl border border-slate-200/80 w-44 sm:w-52"
                >
                  <img
                    src={img}
                    alt={`${project.title} screenshot ${j + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
              {project.image && !project.images && (
                <div className="overflow-hidden rounded-xl border border-slate-200/80 max-w-sm">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}
              {project.youtubeUrl && (
                <div className="overflow-hidden rounded-xl border border-slate-200/80 max-w-sm w-full sm:w-96 aspect-video">
                  <iframe
                    src={project.youtubeUrl}
                    title={`${project.title} demo video`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
              {project.video && !project.youtubeUrl && (
                <div className="overflow-hidden rounded-xl border border-slate-200/80 max-w-sm">
                  <video
                    src={project.video}
                    className="w-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                  />
                </div>
              )}
            </div>
          )}

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="details" className="border-slate-200">
              <AccordionTrigger className="text-sm text-slate-700 hover:text-slate-900 hover:no-underline py-3">
                What We Built <span className="ml-1 text-slate-400 text-xs font-normal">(click to expand)</span>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  {project.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-cyan-600 mt-1 shrink-0">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="flex flex-wrap gap-2 pt-1">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-slate-100/90 text-slate-700 border-0 text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-violet-50/80 to-amber-50/90 text-slate-800">
      <div className="max-w-5xl mx-auto px-6 py-24 space-y-8">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl font-bold mb-2 text-slate-900">Projects</h1>
          <p className="text-slate-600 text-base">
            A selection of technical work across computer vision, robotics, and embedded
            experiments.
          </p>
        </motion.div>

        <Tabs defaultValue="projects" className="w-full gap-6">
          <TabsList className="h-9 w-fit rounded-full border border-slate-200/90 bg-slate-100/80 p-1 shadow-sm">
            <TabsTrigger
              value="projects"
              className="rounded-full px-4 text-xs font-medium data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm"
            >
              Projects
            </TabsTrigger>
            <TabsTrigger
              value="hackathon"
              className="rounded-full px-4 text-xs font-medium data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm"
            >
              Hackathon
            </TabsTrigger>
            <TabsTrigger
              value="hardware"
              className="rounded-full px-4 text-xs font-medium data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm"
            >
              Hardware
            </TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="mt-0 space-y-6 outline-none">
            {projects.map((project, i) =>
              isPlaceholder(project) ? (
                <PlaceholderProjectCard key={project.title} project={project} index={i} />
              ) : (
                <FullProjectCard key={project.title} project={project} index={i} />
              ),
            )}
          </TabsContent>

          <TabsContent value="hackathon" className="mt-0 space-y-6 outline-none">
            {hackathonProjects.map((project, i) =>
              isPlaceholder(project) ? (
                <PlaceholderProjectCard key={project.title} project={project} index={i} />
              ) : (
                <HackathonFullCard key={project.title} project={project} index={i} />
              ),
            )}
          </TabsContent>

          <TabsContent value="hardware" className="mt-0 space-y-6 outline-none">
            {hardwareProjects.map((project, i) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.title}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
                >
                  <div className={`rounded-2xl border border-slate-200/90 bg-gradient-to-br ${project.gradient} shadow-md shadow-slate-200/40 overflow-hidden backdrop-blur-sm`}>
                    <div className="p-6 space-y-4">
                      <div>
                        <div className="flex items-start gap-3">
                          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-200/80 bg-white/70`}>
                            <Icon className={`h-5 w-5 ${project.iconColor}`} />
                          </div>
                          <div>
                            <h2 className="text-xl font-bold text-slate-900">{project.title}</h2>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-slate-500">
                              <span className="flex items-center gap-1.5">
                                <Briefcase className="w-3.5 h-3.5" />
                                {project.course}
                              </span>
                              <span className="flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5" />
                                {project.institution}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-slate-600 text-sm leading-relaxed">{project.overview}</p>

                      <div className="flex flex-wrap gap-4">
                        {project.images.map((img, j) => (
                          <div key={j} className="overflow-hidden rounded-xl border border-slate-200/80 max-w-xs">
                            <img
                              src={img}
                              alt={`${project.title} photo ${j + 1}`}
                              className="w-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </div>

                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="details" className="border-slate-200">
                          <AccordionTrigger className="text-sm text-slate-700 hover:text-slate-900 hover:no-underline py-3">
                            What I Built <span className="ml-1 text-slate-400 text-xs font-normal">(click to expand)</span>
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2 text-sm text-slate-600">
                              {project.bullets.map((bullet, j) => (
                                <li key={j} className="flex gap-2">
                                  <span className="text-amber-600 mt-1 shrink-0">•</span>
                                  {bullet}
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>

                      <div className="flex flex-wrap gap-2 pt-1">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-slate-100/90 text-slate-700 border-0 text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
