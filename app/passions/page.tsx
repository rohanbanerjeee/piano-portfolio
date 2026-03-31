"use client";

import { useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Flag, Music2, Plane } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const VIDEO_EXT = new Set(["mov", "mp4", "webm", "m4v", "mpeg", "mkv"]);

function isVideoFilename(name: string): boolean {
  const ext = name.split(".").pop()?.toLowerCase() ?? "";
  return VIDEO_EXT.has(ext);
}

function publicUrl(folder: string, filename: string): string {
  return `/${folder}/${encodeURIComponent(filename)}`;
}

type MediaItem = { src: string; kind: "image" | "video"; alt: string };

function mediaFromFiles(
  folder: string,
  filenames: string[],
  options?: { sort?: boolean }
): MediaItem[] {
  const sort = options?.sort !== false;
  const ordered = sort
    ? [...filenames].sort((a, b) =>
        a.localeCompare(b, undefined, { sensitivity: "base" })
      )
    : [...filenames];
  return ordered.map((name) => ({
    src: publicUrl(folder, name),
    kind: isVideoFilename(name) ? "video" : "image",
    alt: name,
  }));
}

type PassionSection = {
  title: string;
  blurb: string;
  icon: typeof Flag;
  accent: string;
  ring: string;
  glow: string;
  media: MediaItem[];
};

const sections: PassionSection[] = [
  {
    title: "Golf",
    blurb:
      "I've been playing golf since I was 10. It's my favorite sport and I'll keep playing for the rest of my life. I'm always working on my swing to get better and better.",
    icon: Flag,
    accent: "from-emerald-50 via-teal-50/90 to-white",
    ring: "ring-emerald-200/60",
    glow: "shadow-[0_8px_36px_-10px_rgba(16,185,129,0.22)]",
    media: mediaFromFiles("golf", [
      "4b366c80-2aa3-4a48-9f85-7f7908bae07a.jpg",
      "IMG_0563.jpeg",
      "IMG_2973.mov",
      "IMG_5909.MOV",
      "IMG_6016.MOV",
      "IMG_7881.mov",
    ]),
  },
  {
    title: "Piano",
    blurb:
      "I've been playing since I was 6 years old. I love learning new songs and playing for my friends. Some small clips of some of my work.",
    icon: Music2,
    accent: "from-amber-50 via-orange-50/80 to-white",
    ring: "ring-amber-200/60",
    glow: "shadow-[0_8px_36px_-10px_rgba(245,158,11,0.22)]",
    media: mediaFromFiles(
      "piano",
      [
        "grdr 2026-02-08 185438AD605AAE57A4.JPG",
        "08d739ede4bc4fab817c9f3c25a023f2.mov",
        "188B47BE-1F8D-4017-8CE5-372655A0ADD5.mp4",
        "E883157E-887B-4D7A-89E4-C4B323101E9B.mp4",
        "IMG_1703.MOV",
      ],
      { sort: false }
    ),
  },
  {
    title: "Traveling",
    blurb:
      "I love traveling everywhere with my family and friends. Eventually I want a passport full of stamps.",
    icon: Plane,
    accent: "from-sky-50 via-blue-50/80 to-white",
    ring: "ring-sky-200/60",
    glow: "shadow-[0_8px_36px_-10px_rgba(14,165,233,0.22)]",
    media: mediaFromFiles("travel", [
      "grdr 2025-07-25 153547.816.JPG",
      "IMG_0122.jpeg",
      "IMG_0478.JPG",
      "IMG_1223.JPG",
      "IMG_4898.jpeg",
      "IMG_5263.JPG",
      "IMG_5553.JPG",
    ]),
  },
];

function MediaCarousel({ items }: { items: MediaItem[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByStep = useCallback((dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const first = el.querySelector<HTMLElement>("[data-carousel-card]");
    const step = (first?.offsetWidth ?? 320) + 16;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  }, []);

  return (
    <div className="relative group/carousel">
      <button
        type="button"
        aria-label="Scroll media left"
        onClick={() => scrollByStep(-1)}
        className="absolute left-1 top-1/2 z-10 -translate-y-1/2 rounded-full border border-slate-200/90 bg-white/95 p-2 text-slate-700 shadow-md backdrop-blur-md transition hover:bg-white hover:text-slate-900 md:opacity-0 md:group-hover/carousel:opacity-100 opacity-95"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Scroll media right"
        onClick={() => scrollByStep(1)}
        className="absolute right-1 top-1/2 z-10 -translate-y-1/2 rounded-full border border-slate-200/90 bg-white/95 p-2 text-slate-700 shadow-md backdrop-blur-md transition hover:bg-white hover:text-slate-900 md:opacity-0 md:group-hover/carousel:opacity-100 opacity-95"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div
        ref={scrollerRef}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-2 pt-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory"
      >
        {items.map((item, i) => (
          <div
            key={`${item.src}-${i}`}
            data-carousel-card
            className="snap-center shrink-0 w-[min(88vw,440px)]"
          >
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-md shadow-slate-200/50 ring-1 ring-slate-100">
              {item.kind === "image" ? (
                <>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover/carousel:scale-[1.02]"
                    loading={i < 2 ? "eager" : "lazy"}
                    draggable={false}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-white/30" />
                </>
              ) : (
                <video
                  src={item.src}
                  className="h-full w-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PassionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50/90 via-violet-50/70 to-cyan-50/90 text-slate-800">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-15%,rgba(196,181,253,0.35),transparent_58%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_55%_45%_at_100%_85%,rgba(125,211,252,0.28),transparent_52%)]" />

      <div className="relative mx-auto max-w-5xl px-6 py-24">
        <motion.header
          {...fadeUp}
          transition={{ duration: 0.55 }}
          className="mb-16 text-center md:text-left"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
            Beyond engineering
          </p>
          <h1
            className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Passions
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 md:mx-0">
            Golf, piano, and travel — the things that keep me curious and inspired when
            I&apos;m away from the screen.
          </p>
        </motion.header>

        <div className="space-y-20">
          {sections.map((section, i) => {
            const Icon = section.icon;
            return (
              <motion.section
                key={section.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.08 * (i + 1) }}
                className={`relative overflow-hidden rounded-3xl border border-slate-200/90 bg-gradient-to-br ${section.accent} p-6 md:p-8 shadow-lg shadow-slate-200/50 ring-1 ${section.ring} ${section.glow}`}
              >
                <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-200/80 bg-white/90 shadow-sm">
                      <Icon className="h-6 w-6 text-slate-700" />
                    </div>
                    <div>
                      <h2
                        className="text-2xl font-bold text-slate-900 md:text-3xl"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        {section.title}
                      </h2>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
                        {section.blurb}
                      </p>
                    </div>
                  </div>
                </div>

                <MediaCarousel items={section.media} />
              </motion.section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
