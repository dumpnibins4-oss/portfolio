

import SkillItem from "./About-Components/Skill-Item"
import CardItem from "./About-Components/Card-Item"

const codeIcon = "./images/black-code.png"
const reactIcon = "./images/react.png"
const databaseIcon = "./images/database.png"
const paintIcon = "./images/paint.png"
const githubIcon = "./images/github.png"
const figmaIcon = "./images/figma.png"
const rocketIcon = "./images/rocket.png"
const phpIcon = "./images/php.png"
const pythonIcon = "./images/python.png"
const locationIcon = "./images/location.png"

const skillCategories = [
    {
        title: "Frontend",
        icon: paintIcon,
        skills: [
            { name: "ReactJS", icon: reactIcon },
            { name: "JavaScript", icon: codeIcon },
            { name: "Tailwind CSS", icon: paintIcon },
            { name: "Bootstrap", icon: paintIcon },
            { name: "Figma", icon: figmaIcon },
        ],
    },
    {
        title: "Backend",
        icon: codeIcon,
        skills: [
            { name: "NodeJS", icon: codeIcon },
            { name: "PHP", icon: phpIcon },
            { name: "Python", icon: pythonIcon },
            { name: "Git", icon: githubIcon },
        ],
    },
    {
        title: "Database",
        icon: databaseIcon,
        skills: [
            { name: "PostgreSQL", icon: databaseIcon },
            { name: "MySQL", icon: databaseIcon },
            { name: "SSMS", icon: databaseIcon },
        ],
    },
]

export default function AboutSection() {
    return (
        <>
            <div id="about" className="flex flex-col items-start justify-between h-auto lg:min-h-screen w-full px-5 lg:px-40 gap-12 lg:gap-10">
                {/* Section Header */}
                <div className="w-full lg:w-1/2 flex flex-row items-center justify-start gap-5">
                    <h1 className="text-white text-2xl font-semibold"><span className="text-red-500">#</span>about me</h1>
                    <div className="flex-grow bg-red-500 h-[1px] rounded-full"></div>
                </div>

                {/* Bio + Skills */}
                <div className="flex flex-col lg:grid grid-cols-2 w-full gap-10 lg:gap-12">
                    {/* Left - Bio & Experience */}
                    <div className="flex flex-col items-start justify-start gap-6 h-full w-full">
                        <div className="flex flex-col gap-4">
                            <p className="text-gray-300 text-md leading-relaxed">
                                I'm a full-stack developer with a passion for building beautiful, functional, and user-centered digital experiences. With several years of experience in web development, I specialize in creating responsive applications that solve real-world problems.
                            </p>
                            <p className="text-gray-300 text-md leading-relaxed">
                                When I'm not coding, you can find me exploring new technologies, playing video games, or sharing knowledge with the developer community.
                            </p>
                            <p className="text-gray-300 text-md leading-relaxed">
                                I believe in writing clean, maintainable code and continuously learning to stay at the forefront of technology.
                            </p>
                        </div>

                        {/* Experience */}
                        <div className="flex flex-col gap-4 w-full mt-2">
                            <h2 className="text-white text-xl font-medium">Experience</h2>
                            <div className="relative flex flex-col gap-4 pl-6 border-l-2 border-red-500/30">
                                {/* Internship */}
                                <div className="relative group">
                                    {/* Timeline dot */}
                                    <div className="absolute -left-[29px] top-1 w-3.5 h-3.5 rounded-full bg-red-500 border-2 border-[#0f172a] group-hover:shadow-[0_0_10px_rgba(239,68,68,0.5)] transition-shadow duration-300"></div>

                                    <div className="flex flex-col gap-1.5 bg-gray-800/50 rounded-xl p-4 border border-gray-700/50 hover:border-red-500/30 transition-all duration-300">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                                            <h3 className="text-white font-medium text-base">Intern — Web Developer</h3>
                                            <span className="text-red-400 text-xs font-medium tracking-wide">OJT</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                                            <img src={locationIcon} alt="" className="w-3.5 h-3.5 invert opacity-60" />
                                            <span>La Rose Noire PH</span>
                                        </div>
                                        <p className="text-gray-400 text-sm leading-relaxed mt-1">
                                            Contributed to web development projects, assisted in building and maintaining company web applications, and gained hands-on experience with modern web technologies in a professional environment.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Categorized Skills */}
                    <div className="flex flex-col items-start justify-start gap-5">
                        <h2 className="text-white text-xl font-medium">Skills & Technologies</h2>
                        <div className="flex flex-col gap-6 w-full">
                            {skillCategories.map((category, i) => (
                                <div key={i} className="flex flex-col gap-3">
                                    <div className="flex items-center gap-2">
                                        <img src={category.icon} alt="" className="w-4 h-4 invert opacity-60" />
                                        <h3 className="text-red-400 text-sm font-semibold tracking-[0.1em] uppercase">{category.title}</h3>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        {category.skills.map((skill, j) => (
                                            <SkillItem key={j} skillName={skill.name} imageSrc={skill.icon} />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Cards */}
                <div className="h-auto w-full flex flex-col lg:grid grid-cols-3 gap-5">
                    <CardItem
                        title="Clean Code"
                        description="Writing maintainable, scalable, and efficient code that stands the test of time."
                        imageSrc={codeIcon}
                    />
                    <CardItem
                        title="Design Focus"
                        description="Creating beautiful interfaces with attention to detail and user experience."
                        imageSrc={paintIcon}
                    />
                    <CardItem
                        title="Fast Delivery"
                        description="Delivering high-quality projects on time with agile methodology and best practices."
                        imageSrc={rocketIcon}
                    />
                </div>
            </div>
        </>
    )
}