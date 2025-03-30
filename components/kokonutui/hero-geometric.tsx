"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Pacifico } from "next/font/google"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { X, ExternalLink, Github, Mail, ArrowRight } from "lucide-react"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  gradient?: string
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
          )}
        />
      </motion.div>
    </motion.div>
  )
}

interface Project {
  id: string
  title: string
  image: string
  description: string
  demoUrl: string
  sourceUrl: string
}

const projects: Project[] = [
  {
    id: "project1",
    title: "AI-Powered Analytics",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "A comprehensive analytics platform leveraging machine learning algorithms to provide actionable insights from complex datasets. This solution transforms raw data into strategic business intelligence through intuitive visualizations and automated reporting systems.",
    demoUrl: "https://example.com/demo1",
    sourceUrl: "https://github.com/bharath/project1",
  },
  {
    id: "project2",
    title: "Immersive VR Experience",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "An innovative virtual reality application designed to create immersive educational experiences. This project combines cutting-edge VR technology with interactive storytelling to revolutionize how users engage with educational content across various disciplines.",
    demoUrl: "https://example.com/demo2",
    sourceUrl: "https://github.com/bharath/project2",
  },
  {
    id: "project3",
    title: "Sustainable IoT Solution",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "An environmentally conscious Internet of Things platform that optimizes energy consumption in smart buildings. This system utilizes a network of sensors and intelligent algorithms to reduce carbon footprint while maintaining optimal comfort levels for occupants.",
    demoUrl: "https://example.com/demo3",
    sourceUrl: "https://github.com/bharath/project3",
  },
  {
    id: "project4",
    title: "Blockchain Marketplace",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "A decentralized marketplace built on blockchain technology that enables secure, transparent transactions without intermediaries. This platform incorporates smart contracts to automate agreement enforcement and provides a trustless environment for digital commerce.",
    demoUrl: "https://example.com/demo4",
    sourceUrl: "https://github.com/bharath/project4",
  },
  {
    id: "project5",
    title: "Neural Art Generator",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "A creative tool that leverages neural networks to transform ordinary images into artistic masterpieces. This application employs style transfer algorithms to apply the characteristics of famous art styles to user-uploaded photos, creating unique visual compositions.",
    demoUrl: "https://example.com/demo5",
    sourceUrl: "https://github.com/bharath/project5",
  },
  {
    id: "project6",
    title: "Quantum Computing Simulator",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "An educational platform that simulates quantum computing principles for researchers and students. This simulator visualizes quantum circuits and algorithms, providing an accessible entry point to quantum computing concepts without requiring specialized hardware.",
    demoUrl: "https://example.com/demo6",
    sourceUrl: "https://github.com/bharath/project6",
  },
  {
    id: "project7",
    title: "Augmented Reality Navigation",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "A mobile application that overlays directional guidance on real-world environments using augmented reality. This solution enhances navigation experiences by providing contextual information about surroundings and points of interest through an intuitive visual interface.",
    demoUrl: "https://example.com/demo7",
    sourceUrl: "https://github.com/bharath/project7",
  },
  {
    id: "project8",
    title: "Biometric Security System",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "A multi-factor authentication system that combines various biometric identifiers for enhanced security. This solution integrates facial recognition, fingerprint scanning, and voice pattern analysis to create a robust, user-friendly security framework for sensitive applications.",
    demoUrl: "https://example.com/demo8",
    sourceUrl: "https://github.com/bharath/project8",
  },
  {
    id: "project9",
    title: "Autonomous Drone Platform",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "A software platform for programming and controlling autonomous drone operations in various industries. This system enables complex flight patterns, obstacle avoidance, and automated data collection through an intuitive interface accessible to both technical and non-technical users.",
    demoUrl: "https://example.com/demo9",
    sourceUrl: "https://github.com/bharath/project9",
  },
]

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="group relative overflow-hidden rounded-xl bg-white/[0.03] border border-white/[0.08] cursor-pointer"
      onClick={onClick}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="p-6">
        <h3
          className={cn(
            "text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300",
            pacifico.className,
          )}
        >
          {project.title}
        </h3>
        <div className="mt-4 flex items-center">
          <span className="text-sm text-white/60">View Details</span>
          <motion.div
            className="ml-2"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            →
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-gradient-to-br from-[#0a0a0a] to-[#121212] rounded-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5 text-white/80" />
          </button>

          <div className="relative h-64">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
          </div>

          <div className="p-8">
            <h2
              className={cn(
                "text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 mb-6",
                pacifico.className,
              )}
            >
              {project.title}
            </h2>

            <p className="text-white/70 leading-relaxed mb-8">{project.description}</p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </motion.a>

              <motion.a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white/[0.05] border border-white/10 text-white/80 font-medium"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4" />
                Source Code
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 w-full py-12 mt-16 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white/60 text-sm">© {currentYear} Bharath's Portfolio. All rights reserved.</div>

          <div className="flex items-center gap-6">
            <motion.a
              href="mailto:contact@bharath.com"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-4 h-4" />
              <span>contact@bharath.com</span>
            </motion.a>

            <motion.a
              href="/portfolio"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-medium overflow-hidden relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Main Portfolio</span>
              <motion.div
                className="absolute right-4"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function HeroGeometric() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-500/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/[0.15]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 py-16 flex-grow">
        <div className="max-w-5xl mx-auto">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">Bharath's</span>
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 ml-3",
                  pacifico.className,
                )}
              >
                Portfolio
              </span>
            </h1>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-y-10"
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />

      <Footer />

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  )
}

