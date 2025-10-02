import Skill from "../components/Skill";



const skills = {
    technicalSkills: [
        {title: "Networking Basics", percentage: 60},
        {title: "Networking (Physical Network and Wireless Network)", percentage: 60},
        {title: "MikroTik (Configuration, Management)", percentage: 50},
        {title: "Cisco (Routing, Switching, VLANs etc)", percentage: 40},
        {title: "ONU and OLT (Configuration and Management)", percentage: 60},
        {title: "Network Troubleshooting", percentage: 50},
        {title: "Problem-Solving (Analytical Thinking and Root Cause Analysis)", percentage: 50},
        {title: "Network Monitoring (Nagios, Zabbix and Winbox)", percentage: 50},
        {title: "Virtualization (VMware)", percentage: 40},
        {title: "OS Windows (Installation, Configuration and Maintenance)", percentage: 30},
    ],
    softSkills: [
        {title: "Good Communication", percentage: 60},
        {title: "Team Working", percentage: 55},
        {title: "Team Mangaement", percentage: 65},
    ]
};





const Skills = () => {

    const technicalSkills = skills.technicalSkills.map((skill) => <Skill title={skill.title} percentage={skill.percentage} />);
    const softSkills = skills.softSkills.map((skill) => <Skill title={skill.title} percentage={skill.percentage} />);


    return (
        <section id="skills">
            <div className="max-w-7xl mx-auto px-6 py-10">
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