"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const codeSnippets = [
  "const build = () => {",
  "  return success;",
  "}",
  "function create() {",
  "  deploy();",
  "}",
  "<Component />",
  "npm install",
  "git commit -m",
  "docker build",
  "useState()",
  "useEffect()",
]

const blockColors = [
  { bg: "bg-emerald-500", shadow: "shadow-emerald-500/50" },
  { bg: "bg-blue-500", shadow: "shadow-blue-500/50" },
  { bg: "bg-purple-500", shadow: "shadow-purple-500/50" },
  { bg: "bg-pink-500", shadow: "shadow-pink-500/50" },
  { bg: "bg-yellow-500", shadow: "shadow-yellow-500/50" },
  { bg: "bg-red-500", shadow: "shadow-red-500/50" },
  { bg: "bg-indigo-500", shadow: "shadow-indigo-500/50" },
  { bg: "bg-green-500", shadow: "shadow-green-500/50" },
  { bg: "bg-orange-500", shadow: "shadow-orange-500/50" },
  { bg: "bg-cyan-500", shadow: "shadow-cyan-500/50" },
]

export default function Enhanced3DAnimation() {
  const [currentPhase, setCurrentPhase] = useState(0)
  const [blocks, setBlocks] = useState<
    Array<{
      id: number
      color: (typeof blockColors)[0]
      x: number
      y: number
      z: number
      rotateX: number
      rotateY: number
    }>
  >([])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhase((prev) => (prev + 1) % 3)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (currentPhase === 2) {
      const newBlocks = Array.from({ length: 10 }, (_, i) => ({
        id: i,
        color: blockColors[i % blockColors.length],
        x: Math.random() * 300 - 150,
        y: Math.random() * 300 - 150,
        z: Math.random() * 100 - 50,
        rotateX: Math.random() * 360,
        rotateY: Math.random() * 360,
      }))
      setBlocks(newBlocks)
    }
  }, [currentPhase])

  return (
    <div className="relative w-full h-[100%] animation-container">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-emerald-500/20 via-transparent to-transparent rounded-full blur-3xl" />

      <AnimatePresence mode="wait">
        {/* Phase 1: 3D Floating Code */}
        {currentPhase === 0 && (
          <motion.div
            key="code-phase-3d"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute inset-0 flex flex-col items-center justify-center space-y-3"
          >
            {codeSnippets.slice(0, 8).map((code, index) => (
              <motion.div
                key={index}
                initial={{
                  x: -200,
                  opacity: 0,
                  rotateX: -90,
                  z: -100,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  rotateX: 0,
                  z: 0,
                  y: [0, -8, 0],
                  rotateY: [0, 5, -5, 0],
                }}
                transition={{
                  delay: index * 0.15,
                  y: {
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: index * 0.4,
                  },
                  rotateY: {
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  },
                }}
                className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600 font-mono text-sm whitespace-nowrap bg-slate-800/80 dark:bg-slate-800/80 light:bg-white/80 px-3 py-2 rounded-lg backdrop-blur-sm border border-emerald-500/30"
                style={{
                  transform: `perspective(1000px) rotateX(${Math.sin(index) * 10}deg)`,
                  textShadow: "0 0 10px rgba(16, 185, 129, 0.5)",
                }}
              >
                {code}
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Phase 2: 3D Transformation Vortex */}
        {currentPhase === 1 && (
          <motion.div
            key="transform-phase-3d"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {codeSnippets.slice(0, 10).map((code, index) => (
              <motion.div
                key={index}
                initial={{
                  x: (index % 2 === 0 ? -1 : 1) * (80 + index * 25),
                  y: ((index % 3) - 1) * 40,
                  z: index * 10,
                  scale: 1,
                  rotateX: 0,
                  rotateY: 0,
                  rotateZ: 0,
                }}
                animate={{
                  x: [null, 0, 0],
                  y: [null, 0, 0],
                  z: [null, 0, 100],
                  scale: [1, 0.3, 0],
                  rotateX: [0, 180, 360],
                  rotateY: [0, 360, 720],
                  rotateZ: [0, 180, 360],
                  borderRadius: ["8px", "50%", "50%"],
                }}
                transition={{
                  duration: 2,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="absolute text-emerald-400 dark:text-emerald-400 light:text-emerald-600 font-mono text-xs bg-slate-800/90 dark:bg-slate-800/90 light:bg-white/90 px-2 py-1 rounded backdrop-blur-sm border border-emerald-500/50"
                style={{
                  transformStyle: "preserve-3d",
                  boxShadow: "0 0 20px rgba(16, 185, 129, 0.4)",
                }}
              >
                {code.slice(0, 6)}...
              </motion.div>
            ))}

            {/* Central vortex effect */}
            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              animate={{
                scale: [0, 1.5, 0],
                rotate: [0, 360, 720],
                opacity: [0, 0.8, 0],
              }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute w-32 h-32 border-4 border-emerald-500/50 rounded-full"
              style={{
                background: "conic-gradient(from 0deg, transparent, rgba(16, 185, 129, 0.3), transparent)",
              }}
            />
          </motion.div>
        )}

        {/* Phase 3: 3D Stacked Architecture */}
        {currentPhase === 2 && (
          <motion.div
            key="blocks-phase-3d"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {/* Building foundation with 3D effect */}
            <motion.div
              initial={{ scaleX: 0, rotateX: 90 }}
              animate={{ scaleX: 1, rotateX: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="absolute bottom-16 w-64 h-4 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 rounded-lg"
              style={{
                transform: "perspective(1000px) rotateX(60deg)",
                boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)",
              }}
            />

            {/* 3D Blocks */}
            {blocks.map((block, index) => (
              <motion.div
                key={block.id}
                initial={{
                  x: block.x,
                  y: block.y,
                  z: block.z,
                  scale: 0,
                  rotateX: block.rotateX,
                  rotateY: block.rotateY,
                  rotateZ: 0,
                }}
                animate={{
                  x: ((index % 5) - 2) * 35,
                  y: -Math.floor(index / 5) * 40 - 20,
                  z: Math.floor(index / 5) * 20,
                  scale: 1,
                  rotateX: 0,
                  rotateY: 0,
                  rotateZ: 0,
                }}
                transition={{
                  duration: 1.2,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                className={`absolute w-12 h-12 ${block.color.bg} ${block.color.shadow} rounded-lg block-3d floating-block-3d`}
                style={{
                  transformStyle: "preserve-3d",
                  transform: `perspective(1000px) rotateX(${Math.sin(index) * 5}deg) rotateY(${Math.cos(index) * 5}deg)`,
                }}
              >
                {/* Top face */}
                <div
                  className={`absolute inset-0 ${block.color.bg} rounded-lg opacity-90`}
                  style={{ transform: "translateZ(6px)" }}
                />
                {/* Right face */}
                <div
                  className={`absolute top-0 right-0 w-2 h-full bg-black/20 rounded-r-lg`}
                  style={{ transform: "rotateY(90deg) translateZ(6px)" }}
                />
                {/* Bottom face */}
                <div
                  className={`absolute bottom-0 left-0 w-full h-2 bg-black/30 rounded-b-lg`}
                  style={{ transform: "rotateX(-90deg) translateZ(6px)" }}
                />
              </motion.div>
            ))}

            {/* Enhanced particle system */}
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-emerald-400 rounded-full sparkle"
                animate={{
                  x: [0, Math.random() * 400 - 200],
                  y: [0, Math.random() * 400 - 200],
                  z: [0, Math.random() * 200 - 100],
                  opacity: [0, 1, 0],
                  scale: [0, Math.random() * 2 + 0.5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.2,
                  ease: "easeOut",
                }}
                style={{
                  left: "50%",
                  top: "50%",
                  boxShadow: "0 0 10px rgba(16, 185, 129, 0.8)",
                }}
              />
            ))}

            {/* Holographic grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.3, scale: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `
                  linear-gradient(90deg, transparent 49%, rgba(16, 185, 129, 0.1) 50%, transparent 51%),
                  linear-gradient(0deg, transparent 49%, rgba(16, 185, 129, 0.1) 50%, transparent 51%)
                `,
                backgroundSize: "40px 40px",
                transform: "perspective(1000px) rotateX(60deg)",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
