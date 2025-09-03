import ProgressBar from "./ProgressBar"


const Skill = ({title, percentage}) => {
    return (
        <div>
            <p className="text-lg mb-2">{title}</p>
            <ProgressBar percentage={percentage} />
        </div>
    )
}

export default Skill;