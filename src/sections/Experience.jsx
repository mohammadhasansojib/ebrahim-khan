import ExperienceCard from "../componenets/ExperienceCard";


const experiences = {
    workExperience: [
        {start: 2020, end: 2022, title: "Race Online Bangladesh", designation: "Junior Network Engineer"},
        {start: 2020, end: 2022, title: "Business Network (B.net)", designation: "Junior Support Engineer"},
        {start: 2020, end: 2022, title: "OneSky Communications Limited", designation: "Internship"},
    ],
    coCurricularExperience: [
        {start: 2020, end: 2022, title: "Assistant Media and Communication Secretary", designation: "Northern University Bangladesh"},
        {start: 2020, end: 2022, title: "Social Media Executive", designation: "Green Earth Resilience Foundation"},
        {start: 2020, end: 2022, title: "Former Division Co-Coordinator", designation: "Bondhumohol Blood Donor Society"},
        {start: 2020, end: 2022, title: "Former Assistant Scouts Leader", designation: "Bangladesh Scouts - BSMRAU School"},
    ],
};


const Experience = () => {


    const workExperience = experiences.workExperience.map((ex) => <ExperienceCard start={ex.start} end={ex.end} title={ex.title} designation={ex.designation} />);
    const coCurricularExperience = experiences.coCurricularExperience.map((ex) => <ExperienceCard start={ex.start} end={ex.end} title={ex.title} designation={ex.designation} />);

    return (
        <section>
            <div className="max-w-7xl mx-auto px-6 py-15">
                <h2 className="text-5xl font-bold py-4 text-center">Experience</h2>
                <div className="my-12">
                    <h3 className="text-3xl font-semibold capitalize mb-6">Work Experience</h3>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
                        {workExperience}
                    </div>
                </div>
                <div className="my-12">
                    <h3 className="text-3xl font-semibold capitalize mb-6">Co-curricular Experience</h3>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
                        {coCurricularExperience}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;