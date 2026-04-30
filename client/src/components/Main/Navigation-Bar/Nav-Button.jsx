import { useState, useEffect } from "react"

export default function NavButton({ buttonTitle, targetId, badgeCount, closeMobileMenu, isMobile }) {
    const [active, setActive] = useState(false)

    useEffect(() => {
        const section = document.getElementById(targetId)
        if (!section) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                setActive(entry.isIntersecting)
            },
            {
                threshold: 0.5,
            }
        )
        observer.observe(section)
        return () => observer.disconnect()
    }, [targetId])

    const handleClick = () => {
        if (closeMobileMenu) {
            closeMobileMenu()
        }
    }

    if (isMobile) {
        let iconPath = ""
        const titleL = buttonTitle.toLowerCase()
        if (targetId === "home" || titleL === "dashboard") {
            iconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        } else if (targetId === "about" || titleL === "users") {
            iconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        } else if (targetId === "projects" || titleL === "collections" || titleL === "analytics") {
            // Using a chart/analytics icon depending on context
            iconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        } else if (targetId === "contacts" || titleL === "messages") {
            iconPath = <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
        }

        return (
            <a
                href={`#${targetId}`}
                onClick={handleClick}
                className={`relative flex items-center w-full px-8 py-[18px] transition-colors duration-300 group ${
                    active ? 'bg-transparent text-white' : 'text-white/80 hover:text-white'
                }`}
            >
                {/* SVG Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-[22px] h-[22px] mr-5 transition-colors duration-300 ${active ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'}`}>
                    {iconPath}
                </svg>

                <span className={`text-[15px] tracking-wide capitalize ${active ? 'font-semibold' : 'font-medium'}`}>{ buttonTitle }</span>
                
                {/* Badge if passed */}
                { badgeCount && (
                    <div className="ml-auto bg-white px-2 py-[2px] rounded-full shadow-sm">
                        <span className="text-[10px] text-[#2b2d3a] font-bold">{badgeCount}</span>
                    </div>
                )}
            </a>
        )
    }

    return (
        <a
            href={`#${targetId}`}
            className={`group relative flex items-center text-[15px] font-medium tracking-wide transition-colors duration-300 py-2 ${
                active ? 'text-white' : 'text-gray-400 hover:text-white'
            }`}
        >
            <span className={`mr-1 transition-colors duration-300 ${active ? 'text-red-500' : 'text-red-500/50 group-hover:text-red-500'}`}>#</span>
            { buttonTitle }
            
            <span className={`absolute -bottom-1 left-0 h-[2px] bg-red-500 transition-all duration-300 rounded-full ${
                active ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-50'
            }`}></span>
        </a>
    )
}