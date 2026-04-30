const liveIcon = "./images/live.png"
const githubIcon = "./images/github.png"

export default function ProjectCard({ title, description, imageSrc, liveUrl, githubUrl, techStack = [] }) {
    return (
        <div className="relative flex flex-col h-full bg-[#0d0d1a] rounded-2xl overflow-hidden border border-white/6 select-none">
            {/* Image */}
            <div className="relative w-full h-40 sm:h-48 lg:h-56 overflow-hidden">
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-full object-cover object-top"
                    draggable={false}
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0d0d1a] via-[#0d0d1a]/20 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2 sm:gap-3 p-4 sm:p-5 lg:p-6 grow">
                <span className="text-red-500 text-[10px] font-bold tracking-[0.2em] uppercase">Full-Stack App</span>
                <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-bold">{title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed grow">{description}</p>

                {techStack.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-1">
                        {techStack.map((tech, i) => (
                            <span key={i} className="text-[10px] sm:text-[11px] text-gray-400 bg-white/4 border border-white/6 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full">
                                {tech}
                            </span>
                        ))}
                    </div>
                )}

                <div className="flex gap-2 sm:gap-3 mt-2 sm:mt-3">
                    {liveUrl && (
                        <a href={liveUrl} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1.5 sm:gap-2 bg-red-500 hover:bg-red-600 text-white text-xs sm:text-sm font-semibold px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(239,68,68,0.35)]">
                            <img src={liveIcon} alt="" className="w-3 h-3 sm:w-3.5 sm:h-3.5 invert" />
                            Live Demo
                        </a>
                    )}
                    {githubUrl && (
                        <a href={githubUrl} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1.5 sm:gap-2 bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl border border-white/10 transition-all duration-300">
                            <img src={githubIcon} alt="" className="w-3 h-3 sm:w-3.5 sm:h-3.5 invert" />
                            Code
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}
