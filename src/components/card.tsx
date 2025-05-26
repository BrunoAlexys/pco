interface CardProps {
    icon?: string;
    title?: string;
    description?: string;
    color?: string;
    colorIcon?: string;
}

function Card({ icon, title, description, color, colorIcon }: CardProps) {
    return (
        <div className={`${color ? color : 'bg-[#f7f5f0]'} w-[308px] md:w-[400px] lg:w-[308px] h-[328px] sm:h-[] flex flex-col items-center justify-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-b-3 hover:border-yellow-400`}>
            <div className={`flex items-center p-4 rounded-full text-[40px] bg-[#0d1e26] ${colorIcon ? colorIcon : ''}`}>
                {icon}
            </div>
            <div className="flex flex-col items-center mt-4 gap-1">
                <h2 className="text-lg md:text-2xl font-semibold text-gray-800">{title}</h2>
                <p className="text-gray-600 md:text-xl font-medium">{description}</p>
            </div>
        </div>
    );
}

export default Card;