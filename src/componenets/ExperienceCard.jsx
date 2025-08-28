


const ExperienceCard = ({start, end, title, designation}) => {
    return (
        <div className="bg-gray-300 p-8 rounded-lg w-full flex flex-col justify-between gap-4">
            <span>{start} - {end}</span>
            <div>
                <strong className="inline-block text-lg font-semibold leading-6 mb-1">{title}</strong>
                <p className="text-sm">{designation}</p>
            </div>
        </div>
    )
}

export default ExperienceCard;