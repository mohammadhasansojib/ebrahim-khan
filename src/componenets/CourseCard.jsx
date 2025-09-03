

const CourseCard = ({certificate, institute}) => {
    return (
        <div className="transition-all duration-200 transform hover:scale-105 bg-gray-300 p-8 rounded-lg w-full flex flex-col justify-between gap-4">
            <div>
                <strong className="inline-block text-sm font-normal leading-6 mb-1">{certificate}</strong>
                <p className="text-xl font-semibold">{institute}</p>
            </div>
        </div>
    )
}

export default CourseCard;