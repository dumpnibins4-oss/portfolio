import { useState, useEffect, useCallback, useRef } from "react"
import ProjectCard from "./Project-Card"

const projects = [
    {
        title: "Invique",
        description:
            "A full-stack event management system where you can create and manage events, and send invitations to other users.",
        imageSrc: "./images/invique-preview.png",
        liveUrl: "https://invique.onrender.com/",
        githubUrl: "",
        techStack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    },
    {
        title: "Invique",
        description:
            "A full-stack event management system where you can create and manage events, and send invitations to other users.",
        imageSrc: "./images/invique-preview.png",
        liveUrl: "https://invique.onrender.com/",
        githubUrl: "",
        techStack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    },
    {
        title: "Invique",
        description:
            "A full-stack event management system where you can create and manage events, and send invitations to other users.",
        imageSrc: "./images/invique-preview.png",
        liveUrl: "https://invique.onrender.com/",
        githubUrl: "",
        techStack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    },
]

// Responsive config based on screen width
function useCarouselConfig() {
    const [config, setConfig] = useState(getConfig())

    function getConfig() {
        const w = typeof window !== "undefined" ? window.innerWidth : 1024
        if (w < 640) {
            // Mobile
            return { cardWidth: Math.min(w * 0.78, 320), translateX: 180, rotateY: 30, zOffset: 150, scale: 0.82, containerH: 460 }
        } else if (w < 1024) {
            // Tablet
            return { cardWidth: 360, translateX: 250, rotateY: 35, zOffset: 200, scale: 0.82, containerH: 500 }
        } else {
            // Desktop
            return { cardWidth: 400, translateX: 320, rotateY: 40, zOffset: 250, scale: 0.82, containerH: 540 }
        }
    }

    useEffect(() => {
        const onResize = () => setConfig(getConfig())
        window.addEventListener("resize", onResize)
        return () => window.removeEventListener("resize", onResize)
    }, [])

    return config
}

export default function ProjectsSection() {
    const [current, setCurrent] = useState(0)
    const total = projects.length
    const autoRef = useRef(null)
    const touchX = useRef(0)
    const cfg = useCarouselConfig()

    const go = useCallback((i) => setCurrent(((i % total) + total) % total), [total])
    const next = useCallback(() => go(current + 1), [current, go])
    const prev = useCallback(() => go(current - 1), [current, go])

    // Auto-advance
    useEffect(() => {
        autoRef.current = setInterval(next, 5000)
        return () => clearInterval(autoRef.current)
    }, [next])

    // Keyboard
    useEffect(() => {
        const fn = (e) => { if (e.key === "ArrowRight") next(); if (e.key === "ArrowLeft") prev() }
        window.addEventListener("keydown", fn)
        return () => window.removeEventListener("keydown", fn)
    }, [next, prev])

    const getOffset = (index) => {
        let diff = index - current
        if (diff > total / 2) diff -= total
        if (diff < -total / 2) diff += total
        return diff
    }

    const getStyle = (index) => {
        const offset = getOffset(index)
        const abs = Math.abs(offset)

        if (abs > 1) return { opacity: 0, pointerEvents: "none", position: "absolute", zIndex: 0 }

        const tX = offset * cfg.translateX
        const rY = -offset * cfg.rotateY
        const tZ = -abs * cfg.zOffset
        const s = abs === 0 ? 1 : cfg.scale
        const opacity = abs === 0 ? 1 : 0.45
        const blur = abs === 0 ? 0 : 3

        return {
            transform: `perspective(1200px) translateX(${tX}px) translateZ(${tZ}px) rotateY(${rY}deg) scale(${s})`,
            opacity,
            filter: `blur(${blur}px)`,
            zIndex: 10 - abs,
            pointerEvents: abs === 0 ? "auto" : "none",
            position: abs === 0 ? "relative" : "absolute",
        }
    }

    return (
        <div id="projects" className="flex flex-col items-start justify-start w-full px-5 lg:px-40 gap-8 sm:gap-10 mt-10 min-h-screen">
            {/* Header */}
            <div className="w-full flex flex-row items-center justify-start gap-5">
                <h1 className="text-white text-2xl font-semibold whitespace-nowrap">
                    <span className="text-red-500">#</span>featured projects
                </h1>
                <div className="grow bg-red-500 h-[1px] rounded-full"></div>
            </div>

            {/* 3D Carousel */}
            <div
                className="relative w-full flex items-center justify-center overflow-hidden"
                style={{ height: `${cfg.containerH}px`, perspective: "1200px" }}
                onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
                onTouchEnd={(e) => {
                    const d = e.changedTouches[0].clientX - touchX.current
                    if (Math.abs(d) > 50) d < 0 ? next() : prev()
                }}
            >
                {projects.map((project, index) => {
                    const style = getStyle(index)
                    const isCenter = style.position === "relative"
                    return (
                        <div
                            key={index}
                            className={`transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                                isCenter ? "" : "absolute top-0 left-1/2"
                            }`}
                            style={{
                                width: `${cfg.cardWidth}px`,
                                ...style,
                                ...(isCenter ? {} : { marginLeft: `${-cfg.cardWidth / 2}px` }),
                                transformStyle: "preserve-3d",
                            }}
                        >
                            <ProjectCard
                                title={project.title}
                                description={project.description}
                                imageSrc={project.imageSrc}
                                liveUrl={project.liveUrl}
                                githubUrl={project.githubUrl}
                                techStack={project.techStack}
                            />
                        </div>
                    )
                })}

                {/* Left Arrow */}
                <button
                    onClick={prev}
                    className="absolute left-2 sm:left-4 lg:left-10 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-[#0d0d1a]/80 border border-white/10 text-white/60 hover:text-red-500 hover:border-red-500/50 backdrop-blur-md transition-all duration-300 cursor-pointer hover:shadow-[0_0_15px_rgba(239,68,68,0.2)]"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>

                {/* Right Arrow */}
                <button
                    onClick={next}
                    className="absolute right-2 sm:right-4 lg:right-10 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-[#0d0d1a]/80 border border-white/10 text-white/60 hover:text-red-500 hover:border-red-500/50 backdrop-blur-md transition-all duration-300 cursor-pointer hover:shadow-[0_0_15px_rgba(239,68,68,0.2)]"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-2 w-full -mt-2 sm:-mt-4">
                {projects.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => go(i)}
                        className={`rounded-full transition-all duration-500 cursor-pointer ${
                            i === current
                                ? "w-8 h-2.5 bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"
                                : "w-2.5 h-2.5 bg-white/10 hover:bg-white/20"
                        }`}
                    />
                ))}
            </div>
        </div>
    )
}