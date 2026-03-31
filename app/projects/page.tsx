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
  video?: string;
  devpostUrl?: string;
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
    gradient: "from-rose-100/95 via-orange-50/80 to-amber-50/50",
    iconColor: "text-red-600",
    overview:
      "An AI-powered computer vision system designed to enforce personal protective equipment protocols in industrial environments. Using YOLO v5 and Roboflow, the system processes live camera feeds to identify workers who aren't wearing required safety gear — hard hats, vests, goggles — and flags violations in real time.",
    bullets: [
      "Devised cloud-hosted computer vision models using YOLO v5 and Roboflow for real-time PPE violation detection across security cameras and mobile devices.",
      "Led the full ML pipeline end-to-end: data collection from job sites, image annotation, iterative model training, and deployment to production endpoints.",
      "Integrated the system with existing security infrastructure, enabling non-compliance alerts without requiring new hardware.",
    ],
    impact:
      "Enabled real-time safety enforcement in workplace environments, reducing the delay between PPE violations and corrective action from hours to seconds.",
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
    gradient: "from-rose-100/95 via-pink-50/75 to-white",
    iconColor: "text-rose-700",
    overview:
      "A mobile-first app built to support dementia caregivers through empathy-building simulations, behavior response guides, emotional self-care tools, and resource directories. Designed around storytelling and calming UX to make a genuinely difficult job a little easier.",
    bullets: [
      "Built four core pillars: immersive caregiver simulations with post-experience debriefs, a searchable behavior toolkit with do/don't communication guides, an emotional support dashboard with journaling and burnout self-checks, and a resource directory with crisis contacts.",
      "Designed a warm, calming UI system with OKLCH color variables, serif + sans font pairing (Lora + Inter), and cream/teal/sage tones optimized for low-stress reading.",
      "Structured all content through a single mock-data layer for rapid prototyping, with onboarding, grounding exercises, and affirmation flows wired into the App Router.",
    ],
    impact:
      "Created a polished prototype that demonstrates how thoughtful UX and strong narrative copy can make caregiving tools feel supportive rather than clinical.",
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
    gradient: "from-violet-100/95 via-purple-50/70 to-fuchsia-50/40",
    iconColor: "text-violet-700",
    overview:
      "Ongoing research at Georgia Tech's Intelligent Vision and Automation Lab, developing algorithms that enable autonomous robots to perceive, map, and interact with dynamic environments. The work spans vision-based navigation, simultaneous localization and mapping (SLAM), and robotic manipulation — contributing to the frontier of bio-inspired and AI-driven robotics.",
    bullets: [
      "Researched and developed algorithms for vision-based navigation and robotic manipulation, enabling robots to perceive and act reliably in unstructured environments.",
      "Contributed to bio-inspired robotics projects integrating computer vision, machine learning, and control theory for autonomous locomotion and grasping.",
      "Advanced accessibility-focused technologies by applying SLAM and perception algorithms to assistive robotics use cases.",
    ],
    impact:
      "Contributing to published research advancing autonomous locomotion, grasping, and accessibility technologies at one of the nation's leading robotics labs.",
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
    title: "HarmonyAPI",
    event: "HackGT 12: Midnight at the Museum",
    dates: "Sep 2025",
    icon: Webhook,
    gradient: "from-teal-100/95 via-emerald-50/75 to-white",
    iconColor: "text-teal-700",
    overview:
      "An AI-powered API that helps healthcare providers cut through information overload. Search a medical topic and HarmonyAPI pulls real studies from PubMed, then uses Groq-hosted LLMs to analyze them for clinical relevance, key findings, and actionable implications in seconds.",
    bullets: [
      "Built a Flask REST API that connects PubMed's biomedical literature database with Groq's ultra-fast LLM inference (Llama 3.1, Mixtral, Gemma) behind a single authenticated endpoint.",
      "Literature search pulls real studies from PubMed, then the top results are analyzed by the LLM for a structured summary, key findings, clinical implications, and a confidence score.",
      "Added rule-based risk prediction and cost estimation for patient data, plus population health trend analytics with pandas.",
      "Included real-time WebSocket notifications (Flask-SocketIO) that fire alerts when a patient is flagged as high-risk.",
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
    image: "/HCP/harmonyapi-dashboard.png",
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
      "Built an 8-stage async pipeline — Gemini classifies raw camera frames into structured incident data (type, severity, vehicles, blocked lanes) in a single API call.",
      "Stored incidents in SQLite and embedded them with Gemini for vector similarity search via Actian VectorAI, with an in-memory fallback.",
      "Integrated OSRM routing to score multiple alternate paths and pick the shortest route that avoids every active incident.",
      "Built a Next.js + Leaflet frontend with live polling, clickable incident dots, camera frame popups, and Web Speech API voice alerts.",
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
      "Built a live streaming pipeline that captures 3-second video chunks, sends them to Gemini 2.0 Flash for real-time object and scene detection, and stores everything in a spatial memory session.",
      "Integrated Web Speech API for continuous speech recognition — the system detects questions on the fly and answers them using current video context or past memory depending on tense.",
      "Implemented a three-tier query system (cache, keyword match, Gemini NLU) so simple lookups skip expensive AI calls and still return results in milliseconds.",
      "Added ElevenLabs text-to-speech for natural voice responses and a proof-of-concept Solana NFT mint for saving memorable moments on-chain.",
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
    devpostUrl: "https://devpost.com/software/augmented-recall-vision-system",
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
      <div className="rounded-2xl border border-slate-200/90 bg-white/85 shadow-md shadow-slate-200/40 overflow-hidden backdrop-blur-sm">
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
                Details & Impact
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
              <h2 className="text-xl font-bold text-slate-900">{project.title}</h2>
              {project.devpostUrl && (
                <a
                  href={project.devpostUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex shrink-0 items-center gap-1.5 rounded-full border border-slate-200/90 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
                >
                  <ExternalLink className="h-3 w-3" />
                  Devpost
                </a>
              )}
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

          {(project.image || project.video) && (
            <div className="flex flex-wrap gap-4">
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
              {project.video && (
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
                What We Built
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
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.45 }}
              className="rounded-2xl border border-slate-200/90 bg-white/85 p-5 shadow-md shadow-slate-200/40 backdrop-blur-sm"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-200/80 bg-violet-50">
                  <Zap className="h-5 w-5 text-violet-800" />
                </div>
                <p className="text-sm text-slate-600 leading-relaxed pt-1">
                  Weekend builds and rapid prototypes from hackathons. Write-ups coming soon.
                </p>
              </div>
            </motion.div>
            {hackathonProjects.map((project, i) =>
              isPlaceholder(project) ? (
                <PlaceholderProjectCard key={project.title} project={project} index={i} />
              ) : (
                <HackathonFullCard key={project.title} project={project} index={i} />
              ),
            )}
          </TabsContent>

          <TabsContent value="hardware" className="mt-0 outline-none">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.45 }}
              className="rounded-2xl border border-slate-200/90 bg-white/85 p-6 shadow-md shadow-slate-200/40 backdrop-blur-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amber-200/80 bg-amber-50">
                  <Microchip className="h-5 w-5 text-amber-800" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-lg font-semibold text-slate-900">Hardware</h2>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    I just started in the hardware field, so I plan to fill this tab up over
                    time &mdash; right now there isn&apos;t much here yet.
                  </p>
                </div>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
