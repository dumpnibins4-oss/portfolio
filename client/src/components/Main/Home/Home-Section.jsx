import { useState, useEffect } from "react"

import Links from "./Home-Components/Links"

const codeIcon = "./images/code.png"
const githubIcon = "./images/github.png"
const linkedInIcon = "./images/linkedin.png"
const mailIcon = "./images/mail.png"
const downloadIcon = "./images/download.png"
const starIcon = "./images/stars.png"
const profileImage = "./images/red-profile.jpg"

export default function HomeSection() {
    const occupations = [
        "Full Stack Developer",
        "UI/UX Enthusiast",
    ]
    
    const [displayText, setDisplayText] = useState("")
    const [occupationIndex, setOccupationIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentOccupation = occupations[occupationIndex]
        const typingSpeed = isDeleting ? 50 : 100
        
        const timer = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < currentOccupation.length) {
                    setDisplayText(currentOccupation.substring(0, displayText.length + 1))
                } else {
                    setTimeout(() => setIsDeleting(true), 2000)
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(currentOccupation.substring(0, displayText.length - 1))
                } else {
                    setIsDeleting(false)
                    setOccupationIndex((prev) => (prev + 1) % occupations.length)
                }
            }
        }, typingSpeed)

        return () => clearTimeout(timer)
    }, [displayText, isDeleting, occupationIndex])

    return (
        <>
            <div id="home" className="flex flex-col items-center justify-center lg:grid grid-cols-2 w-full min-h-screen mt-30 lg:mt-20 px-10 lg:px-40 gap-15 lg:gap-5">
                <div className="h-full w-full flex flex-col items-center lg:items-start justify-center gap-5 lg:gap-10">
                    <div className="flex items-center justify-center gap-2 bg-gray-800 px-4 py-2 rounded-full border-2 border-red-500">
                        <img src={starIcon} alt="stars" className="h-7 w-auto invert-100" />
                        <h2 className="text-white text-lg">Available for work</h2>
                    </div>
                    <h1 className="text-4xl lg:text-6xl text-white font-normal">
                        Hi, I'm <span className="text-red-500">Vince</span>
                    </h1>
                    <div className="flex flex-row items-center justify-center lg:justify-start gap-5">
                        <img src={codeIcon} alt="code-icon" className="h-10 w-auto hidden lg:flex"/>
                        <h2 className="text-2xl lg:text-4xl text-gray-400 text-center lg:text-left">
                            {displayText}
                            <span className="inline-block w-0.5 h-6 bg-orange-500 ml-1 animate-blink"></span>
                        </h2>
                    </div>
                    <p className="text-md lg:text-lg font-normal text-white text-center lg:text-left">
                        I craft beautiful, functional, and user-centered digital experiences. Passionate about turning complex problems into elegant solutions through clean code and thoughtful design.
                    </p>
                    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-5 w-full">
                        <a
                            href="#projects"
                            className="border-2 border-red-500 bg-red-500 text-white text-lg px-8 py-2 cursor-pointer hover:bg-red-700 transition duration-200 flex flex-row items-center justify-center gap-2 rounded-xl lg:w-auto lg:h-auto w-full"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contacts"
                            className="border-2 border-red-500 text-white text-lg px-8 py-2 cursor-pointer hover:bg-red-500 transition duration-200 flex flex-row items-center justify-center gap-2 rounded-xl lg:w-auto lg:h-auto w-full"
                        >
                            Get In Touch
                        </a>
                    </div>
                    <div className="flex flex-row items-center justify-start">
                        <div className="flex flex-row items-center justify-start gap-2 pr-3 mr-3 border-r-2 border-white">
                            <Links linkImage={githubIcon} linkUrl="https://github.com/Vincxzse" />
                            <Links linkImage={linkedInIcon} linkUrl="www.linkedin.com/in/vince-salenga-03758329a" />
                            <Links linkImage={mailIcon} linkUrl="" />
                        </div>
                        <Links linkImage={downloadIcon} linkUrl="/Files/VinceSalenga_CV.pdf" />
                    </div>
                    <div className="flex flex-row items-center justify-start gap-2">
                        <div className="relative">
                            <div className="h-4 w-4 bg-red-500 rounded-full"></div>
                            <div className="absolute top-0 left-0 h-4 w-4 bg-red-500 rounded-full animate-ping"></div>
                        </div>
                        <p className="text-gray-400">Currently cooking some shit up</p>
                    </div>
                </div>
                <div className="w-full h-full flex items-center justify-center lg:justify-end">
                    <div className="flex items-center justify-center w-100 h-100 lg:w-130 lg:h-130 border border-[rgba(255,0,0,0.5)] rounded-full">
                        <div className="flex items-center justify-center w-70 h-70 lg:w-100 lg:h-100 border border-[rgba(255,0,0,0.5)] rounded-full relative">
                            <img src={profileImage} alt="profile image" className="w-70 h-70 lg:w-100 lg:h-100 rounded-full animate-bounce-low shadow-md shadow-red-300" />
                            <div className="flex flex-row items-center justify-center absolute bg-gray-800 p-2 rounded-full top-0 right-0 shadow-md shadow-[rgba(255,255,255,0.1)] animate-bounce-mid">
                                <p className="text-white">🚀 Fast</p>
                            </div>
                            <div className="flex flex-row items-center justify-center absolute bg-gray-800 p-2 rounded-full bottom-0 left-0 shadow-md shadow-[rgba(255,255,255,0.1)] animate-bounce-high">
                                <p className="text-white">💡 Creative</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}