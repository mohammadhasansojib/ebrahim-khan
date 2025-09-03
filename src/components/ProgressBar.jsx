

// bg-blue-600
// bg-gray-500/20

const ProgressBar = ({percentage}) => {


    return (
        <div className="relative flex items-center w-full bg-gray-500/20 h-5 rounded-full">
            <div className="absolute top-0 left-0 bg-gradient-to-r from-[#5524B7] to-[#380B60] h-5 rounded-full" style={{width: `${percentage}%`}}></div>
                <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-gray-400">
                    {percentage}%
                </span>
        </div>

        
    )
}

export default ProgressBar;