

export default function SkillItem({ imageSrc, skillName }) {
    return (
        <div className="flex flex-row items-center justify-start bg-gray-800 rounded-lg border border-gray-700 px-4 py-2 gap-2.5 hover:border-red-500 transition duration-300 hover:shadow-md hover:shadow-red-500/10 group">
            <img src={imageSrc} className="h-5 w-auto invert-100 group-hover:scale-110 transition-transform duration-300" />
            <p className="text-white text-sm font-light">{skillName}</p>
        </div>
    )
}