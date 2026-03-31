"use client";

import { motion } from "framer-motion";
import { FlaskConical, Zap, Users, Clock, Quote } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const involvements = [
  {
    icon: FlaskConical,
    iconColor: "text-purple-400",
    title: "IVALab Research Community",
    subtitle: "Georgia Institute of Technology",
    body: `Being part of Georgia Tech's Intelligent Vision and Automation Lab isn't just a line on my resume — it's a community that has fundamentally shaped how I think about engineering. Beyond my individual research contributions, I attend weekly lab meetings where grad students and faculty present cutting-edge work in robotics, perception, and autonomy. I've learned as much from those discussions as from any class. The lab culture emphasizes rigor, curiosity, and collaboration, and being surrounded by people solving genuinely hard problems pushes me to raise my own bar every week.`,
  },
  {
    icon: Zap,
    iconColor: "text-yellow-400",
    title: "Hackathons",
    subtitle: "Rapid Prototyping & Innovation",
    body: `I've participated in multiple hackathons throughout college, and they've become one of my favorite ways to learn. There's something uniquely clarifying about having 24-48 hours to go from idea to working prototype. These events have sharpened my rapid prototyping skills, taught me to scope ruthlessly, and pushed me to work with technologies I wouldn't normally touch — from microcontrollers to mobile app frameworks. More than the technical skills, hackathons taught me how to communicate ideas quickly, divide work effectively with strangers, and ship something real under pressure.`,
  },
  {
    icon: Users,
    iconColor: "text-blue-400",
    title: "Georgia Tech Engineering Community",
    subtitle: "College of Engineering · ECE",
    body: `As a Computer Engineering student in Georgia Tech's School of Electrical and Computer Engineering, I'm part of one of the most rigorous and collaborative engineering programs in the country. The CompE program specifically attracts students who refuse to pick between software and hardware — and that shared mindset creates a community where cross-disciplinary thinking is the norm, not the exception. From study groups to project teams to late nights in the lab, the GT engineering community has been the backbone of my college experience.`,
  },
];

export default function InvolvementsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-24 space-y-12">
        {/* Header */}
        <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl font-bold mb-2">Involvements</h1>
          <p className="text-gray-400 text-base">
            The communities, events, and organizations that shape who I am
            beyond the code.
          </p>
        </motion.div>

        {/* Quote */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-white/10 bg-white/3 p-6"
        >
          <div className="flex gap-4">
            <Quote className="w-8 h-8 text-red-400/60 shrink-0 mt-1" />
            <blockquote className="text-gray-300 text-base leading-relaxed italic">
              &ldquo;The best things I&apos;ve built were never solo efforts. Every
              project, every breakthrough, every late-night debugging session that
              actually led somewhere — there were other people in the room. I invest in
              community because community is what makes the work meaningful.&rdquo;
            </blockquote>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="space-y-6">
          {involvements.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.15 * (i + 1) }}
                className="rounded-2xl border border-white/10 bg-white/3 p-6 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <Icon className={`w-5 h-5 ${item.iconColor}`} />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">{item.title}</h2>
                    <p className="text-sm text-gray-500">{item.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.body}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Coming Soon */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="rounded-2xl border-2 border-dashed border-white/10 bg-transparent p-8 text-center space-y-3"
        >
          <Clock className="w-8 h-8 text-gray-600 mx-auto" />
          <h3 className="text-lg font-semibold text-gray-500">
            More Coming Soon
          </h3>
          <p className="text-sm text-gray-600 max-w-md mx-auto">
            I&apos;m always looking to get more involved. Check back soon for
            updates on clubs, organizations, and community initiatives.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
