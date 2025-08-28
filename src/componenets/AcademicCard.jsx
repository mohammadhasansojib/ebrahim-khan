

const AcademicCard = ({start, end, certificate, institute, result}) => {
    return (
        <div className="bg-gray-300 p-8 rounded-lg w-full flex flex-col justify-between gap-4">
            <span>{start} - {end}</span>
            <div>
                <strong className="inline-block text-2xl font-semibold leading-7 mb-1">{certificate}</strong>
                <p className="text-sm">{institute}</p>
                <p className="font-semibold mt-2">Result: {result}</p>
            </div>
        </div>
    )
}

export default AcademicCard;