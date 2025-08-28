import Skill from "../componenets/Skill";



const skills = {
    technicalSkills: [
        {title: "Networking Basics", percentage: 70},
        {title: "Networking (Physical Network and Wireless Network)", percentage: 80},
        {title: "MikroTik (Configuration, Management)", percentage: 67},
        {title: "Cisco (Routing, Switching, VLANs etc)", percentage: 34},
        {title: "ONU and OLT (Configuration and Management)", percentage: 78},
        {title: "Network Troubleshooting", percentage: 45},
        {title: "Problem-Solving (Analytical Thinking and Root Cause Analysis)", percentage: 58},
        {title: "Network Monitoring (Nagios, Zabbix and Winbox)", percentage: 36},
        {title: "Virtualization (VMware)", percentage: 72},
        {title: "OS Windows (Installation, Configuration and Maintenance)", percentage: 56},
    ],
    softSkills: [
        {title: "Good Communication", percentage: 60},
        {title: "Team Working", percentage: 80},
        {title: "Team Mangaement", percentage: 60},
    ]
};





const Skills = () => {

    const technicalSkills = skills.technicalSkills.map((skill) => <Skill title={skill.title} percentage={skill.percentage} />);
    const softSkills = skills.softSkills.map((skill) => <Skill title={skill.title} percentage={skill.percentage} />);


    return (
        <section>
            <div className="max-w-7xl mx-auto px-6 py-15">
                <h2 className="text-5xl font-bold py-4 text-center">Skills</h2>
                <div className="my-12">
                    <h3 className="text-3xl font-semibold capitalize mb-6">Technical Skills</h3>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
                        {technicalSkills}
                    </div>
                </div>
                <div className="my-12">
                    <h3 className="text-3xl font-semibold capitalize mb-6">Soft Skills</h3>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
                        {softSkills}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;