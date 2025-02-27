"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function RetroGamePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative px-4 py-16 sm:py-24 border-b-4 border-[#25f79c] bg-[#5acffa]">
        <div className="container mx-auto max-w-5xl">
          <div className="retro-box p-6 sm:p-8 bg-[#091c69] border-4 border-[#25f79c] relative">
            <div className="absolute top-0 left-0 w-4 h-4 bg-[#25f79c]"></div>
            <div className="absolute top-0 right-0 w-4 h-4 bg-[#25f79c]"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 bg-[#25f79c]"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#25f79c]"></div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-[#25f79c] retro-text font-pixel">
              AI TIPS
            </h1>
            <p className="text-xl sm:text-2xl text-center mb-8 text-[#39ff14]">
              What will you discover?
            </p>

            <div className="flex justify-center">
              <button className="retro-button px-8 py-3 bg-[#25f79c] text-black font-bold text-xl border-4 border-white hover:bg-[#5df8b6] transition-colors font-pixel">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="px-4 py-16 bg-[#091c69]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center text-[#39ff14] retro-text font-pixel">
            SELECT YOUR TIP:
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {quests.map((quest, index) => (
              <Link href={quest.link} key={index} className="retro-card group">
                <div className="bg-[#5acffa] border-4 border-[#25f79c] p-4 h-full transition-transform hover:translate-y-[-5px] hover:shadow-[0_0_10px_#25f79c]">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-16 h-16 bg-[#25f79c] p-2 flex items-center justify-center">
                      {quest.icon}
                    </div>
                    <div className="text-[#091c69] font-bold font-pixel">
                      LVL {quest.level}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold mb-2 text-[#091c69] font-pixel">
                    {quest.title}
                  </h3>
                  <p className="text-[#091c69] mb-4">{quest.description}</p>

                  <div className="flex justify-between items-center mt-auto pt-4 border-t-2 border-[#25f79c] border-dashed">
                    <span className="text-[#091c69] font-bold font-pixel">
                      {quest.points} PTS
                    </span>
                    <ChevronRight className="w-6 h-6 text-[#25f79c] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="px-4 py-16 bg-[#5acffa]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center text-[#091c69] retro-text font-pixel">
            PRO TIPS
          </h2>
          <ul className="space-y-4">
            {tips.map((tip, index) => (
              <li key={index} className="flex items-start">
                <span className="text-2xl mr-4">{tip.icon}</span>
                <span className="text-[#091c69] text-lg">{tip.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

const quests = [
  {
    title: " Setup Dictation on a Mac",
    description:
      "Dictation is a feature built right into the Mac that many of us don't even realize is there, but it's a great little tool to use once you discover it.",
    level: 1,
    points: 100,
    link: "https://www.youtube.com/watch?v=77tm3sgwRP0",
    icon: <span className="text-2xl">🌲</span>,
  },
  {
    title: "These Hidden Cursor Features Will Make You 10x More Productive",
    description:
      "Cursor is more powerful than you think! This video will show you how to unlock its full potential to control everything—from your browser to databases, Docker, and even a Minecraft character! 🚀",
    level: 3,
    points: 300,
    link: "https://www.youtube.com/watch?v=A9BiNPf34Z4",
    icon: <span className="text-2xl">🏰</span>,
  },
  {
    title: "The VS Code/Cursor Setup to INCREASE Productivity (2025)",
    description:
      "This is my setup for Cursor/VSCode that boosts my productivity as a developer. In this video, I'll show you the best VSCode extensions, settings, themes and Cursor AI tips that I've found helpful. I hope this is valuable.",
    level: 2,
    points: 200,
    link: "https://www.youtube.com/watch?v=fG6HV3pxtOI&t=602s",
    icon: <span className="text-2xl">👾</span>,
  },
  {
    title: "Build and Deploy an app with Grok 3 (in under 3 minutes)",
    description:
      "Build and deploy a Brick Breaker Game in 3 minutes using Grok-3 and Replit.",
    level: 5,
    points: 500,
    link: "https://www.youtube.com/watch?v=pvOsDB3xUWg",
    icon: <span className="text-2xl">🐉</span>,
  },
  {
    title: "Cursor + V0: Can We Build An AI Next.js App in 8 Minutes?",
    description:
      "In this video, I'll show you how to build a simple AI application using Cursor, v0 by Vercel, combined with a background removal model from fal.ai.",
    level: 4,
    points: 400,
    link: "https://www.youtube.com/watch?v=zyqwt65NIgs",
    icon: <span className="text-2xl">🌊</span>,
  },
  {
    title:
      "Vercel's VP of Product on how to use v0 to build your own ideas (Step-by-Step Guide)",
    description:
      "We dive deep into the frameworks and strategies on how to best use v0.",
    level: 2,
    points: 200,
    link: "https://www.youtube.com/watch?v=sCFS_U7d9Do",
    icon: <span className="text-2xl">🏜️</span>,
  },
];

const tips = [
  { icon: "🎤", text: "Try dictation!" },
  { icon: "👾", text: "Use v0 for prototyping UI" },
  {
    icon: "☢️",
    text: "Use a frontend framework with huge community like Next JS",
  },
  { icon: "🎮", text: "Use cursor settings for global guardrails" },
  { icon: "🛠️", text: "Use cursorrules for project settings" },
  { icon: "📄", text: "Use a PRD md file" },
  { icon: "📝", text: "On the PRD, add as much info as you can" },
  {
    icon: "🎯",
    text: "Include Goals, User Journeys, Tech stack, Deliverables, and Project Steps in your PRD",
  },
];
