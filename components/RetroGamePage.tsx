"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"

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
              RETRO QUEST
            </h1>
            <p className="text-xl sm:text-2xl text-center mb-8 text-[#39ff14]">Press START to begin your adventure!</p>

            <div className="flex justify-center">
              <button className="retro-button px-8 py-3 bg-[#25f79c] text-black font-bold text-xl border-4 border-white hover:bg-[#5df8b6] transition-colors font-pixel">
                START GAME
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="px-4 py-16 bg-[#091c69]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center text-[#39ff14] retro-text font-pixel">
            SELECT YOUR QUEST
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {quests.map((quest, index) => (
              <Link href={quest.link} key={index} className="retro-card group">
                <div className="bg-[#5acffa] border-4 border-[#25f79c] p-4 h-full transition-transform hover:translate-y-[-5px] hover:shadow-[0_0_10px_#25f79c]">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-16 h-16 bg-[#25f79c] p-2 flex items-center justify-center">{quest.icon}</div>
                    <div className="text-[#091c69] font-bold font-pixel">LVL {quest.level}</div>
                  </div>

                  <h3 className="text-lg font-bold mb-2 text-[#091c69] font-pixel">{quest.title}</h3>
                  <p className="text-[#091c69] mb-4">{quest.description}</p>

                  <div className="flex justify-between items-center mt-auto pt-4 border-t-2 border-[#25f79c] border-dashed">
                    <span className="text-[#091c69] font-bold font-pixel">{quest.points} PTS</span>
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
  )
}

const quests = [
  {
    title: "Pixel Forest",
    description: "Navigate through the dangerous pixel forest and collect the hidden gems.",
    level: 1,
    points: 100,
    link: "/quests/pixel-forest",
    icon: <span className="text-2xl">🌲</span>,
  },
  {
    title: "Dungeon Crawler",
    description: "Explore the ancient dungeon and defeat the boss to claim your reward.",
    level: 3,
    points: 300,
    link: "/quests/dungeon",
    icon: <span className="text-2xl">🏰</span>,
  },
  {
    title: "Space Invaders",
    description: "Defend your planet against waves of alien invaders from outer space.",
    level: 2,
    points: 200,
    link: "/quests/space",
    icon: <span className="text-2xl">👾</span>,
  },
  {
    title: "Dragon's Lair",
    description: "Face the mighty dragon and claim its treasure as your own.",
    level: 5,
    points: 500,
    link: "/quests/dragon",
    icon: <span className="text-2xl">🐉</span>,
  },
  {
    title: "Underwater World",
    description: "Dive deep into the ocean and discover the secrets of the ancient civilization.",
    level: 4,
    points: 400,
    link: "/quests/underwater",
    icon: <span className="text-2xl">🌊</span>,
  },
  {
    title: "Desert Wasteland",
    description: "Survive the harsh desert and find the oasis before your water runs out.",
    level: 2,
    points: 200,
    link: "/quests/desert",
    icon: <span className="text-2xl">🏜️</span>,
  },
]

const tips = [
  { icon: "👾", text: "Use v0 for prototyping UI" },
  { icon: "🎮", text: "Use cursor settings for global guardrails" },
  { icon: "🛠️", text: "Use cursorrules for project settings" },
  { icon: "📄", text: "Use a PRD md file" },
  { icon: "📝", text: "On the PRD, add as much info as you can" },
  { icon: "🎯", text: "Include Goals, User Journeys, Tech stack, Deliverables, and Project Steps in your PRD" },
]

