

export default function CardItem({ title, description, imageSrc }) {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-full h-full flex flex-col items-start justify-between bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-red-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/5 group">
                <div className="flex flex-col items-center justify-center h-12 w-12 bg-gray-700 rounded-lg group-hover:bg-red-500/10 transition-colors duration-300">
                    <img src={imageSrc} className="h-6 w-auto invert-100" />
                </div>
                <h2 className="text-white font-medium text-lg mt-4">{title}</h2>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">{description}</p>
            </div>
        </div>
    )
}