import { useState, useEffect } from "react"
import NavButton from "./Nav-Button"

export default function NavigationBar() {
    const [mobileMenu, setMobileMenu] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        handleScroll()
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        if (mobileMenu) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
        return () => { document.body.style.overflow = "auto" }
    }, [mobileMenu])

    return (
        <>
            {/* Mobile Menu Backdrop */}
            <div 
                onClick={() => setMobileMenu(false)}
                className={`fixed inset-0 z-[190] bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
                    mobileMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            ></div>

            {/* Mobile Menu Sidebar (Reference Color: #2b2d3a) */}
            <div 
                className={`fixed top-0 right-0 h-full w-[85%] max-w-[340px] z-[200] bg-[#2b2d3a] flex flex-col items-start transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] lg:hidden rounded-l-[20px] shadow-[-20px_0_50px_rgba(0,0,0,0.5)] ${
                    mobileMenu ? "translate-x-0" : "translate-x-full shadow-none"
                }`}
            >
                {/* Hamburger lines from Reference */}
                <div className="w-full px-8 pt-10 pb-4 flex justify-end">
                    <button
                        onClick={() => setMobileMenu(false)}
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-9 h-9">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h12M3.75 12h12M3.75 17.25h12" />
                         </svg>
                    </button>
                </div>

                {/* Profile Card Header */}
                <div className="flex items-center gap-4 mt-2 px-8 w-full border-b border-white/5 pb-8 mb-6">
                    <div className="w-[60px] h-[60px] rounded-full border-[2.5px] border-pink-200 p-[3px]">
                        <img src="./images/red-profile.jpg" alt="Vince" className="w-full h-full object-cover rounded-full" />
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-white text-[16px] font-bold tracking-wide">Vince Salenga</h2>
                        <p className="text-white/60 text-[13px] font-medium mt-0.5">Developer</p>
                    </div>
                </div>

                {/* Links */}
                <div className="flex flex-col w-full">
                    <NavButton buttonTitle="Home" targetId="home" closeMobileMenu={() => setMobileMenu(false)} isMobile={true} />
                    <NavButton buttonTitle="About" targetId="about" closeMobileMenu={() => setMobileMenu(false)} isMobile={true} />
                    <NavButton buttonTitle="Projects" targetId="projects" closeMobileMenu={() => setMobileMenu(false)} isMobile={true} />
                    <NavButton buttonTitle="Contact" targetId="contacts" closeMobileMenu={() => setMobileMenu(false)} isMobile={true} />
                </div>

                {/* Bottom Box (Upgrade to PRO style from Reference) */}
                <div className="w-full flex-1 flex flex-col items-center justify-end px-7 pb-10">
                    <div className="relative w-full bg-[#526bf6] rounded-[20px] p-6 pb-8 pt-10 flex flex-col items-center text-center mt-12 shadow-[0_15px_40px_rgba(82,107,246,0.3)] border border-white/10">
                        {/* Cutout avatar on top edge */}
                        <div className="absolute -top-[30px] w-[60px] h-[60px] rounded-full border-4 border-[#2b2d3a] overflow-hidden bg-[#2b2d3a]">
                            <img src="./images/red-profile.jpg" alt="" className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-white font-bold text-[13px] mt-2 mb-3 tracking-wide">Available to Work</h3>
                        <p className="text-white/90 text-[11px] leading-[1.6] max-w-[200px]">
                            Open for web development projects and roles. Tap messages to talk!
                        </p>
                    </div>
                </div>
            </div>
            
            {/* Main Navbar Desktop / Mobile Toggle */}
            <div className={`fixed w-full top-0 left-0 h-20 flex flex-row items-center justify-between px-5 lg:px-40 text-white z-[150] transition-all duration-500 ${
                scrolled ? "bg-[#0d0d1a]/85 backdrop-blur-lg border-b border-white/5 shadow-lg shadow-[#000000]/30" : "bg-transparent border-b border-transparent"
            }`}>
                <div className="flex flex-row items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <h2 className="font-bold text-2xl tracking-wide select-none transition-transform hover:scale-105">
                        Vince<span className="text-red-500">.</span>
                    </h2>
                </div>
                
                <div className="hidden lg:flex flex-row items-center gap-10">
                    <NavButton buttonTitle="home" targetId="home" />
                    <NavButton buttonTitle="about" targetId="about" />
                    <NavButton buttonTitle="projects" targetId="projects" />
                    <NavButton buttonTitle="contact" targetId="contacts" />
                </div>

                <button
                    onClick={() => setMobileMenu(true)}
                    className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/80 hover:text-red-500 hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                    </svg>
                </button>
            </div>
        </>
    )
}