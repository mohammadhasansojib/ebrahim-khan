import AcademicCard from "../components/AcademicCard";
import CourseCard from "../components/CourseCard";


const education = {
    academic: [
        {start: 2019, end: 2020, certificate: "Secondary School Certificate", institute: "Bangabandhu Sheikh Mujibur Rahman Agricultural University School", result: "4.44 / 5.00"},
        {start: 2019, end: 2020, certificate: "Diploma In Computer Technology", institute: "Mymensingh Polytechnic Institute", result: "3.51 / 4.00"},
        {start: 2019, end: 2020, certificate: "BSc In CSE", institute: "Northern University Bangladesh", result: "pending..."},
    ],
    courses: [
        {certificate: "CompTIA A+ ( Hardware, Operating Systems, Networking, Security, Virtualization, Cloud Computing, and Troubleshooting)", institute: "One Sky Information Technology"},
        {certificate: "CCNA (Network access, IP Connectivity, IP Services, Network Security)", institute: "One Sky Information Technology"},
    ],
};


const Education = () => {


    const academic = education.academic.map((i) => <AcademicCard start={i.start} end={i.end} certificate={i.certificate} institute={i.institute} result={i.result} />);
    const courses = education.courses.map((i) => <CourseCard certificate={i.certificate} institute={i.institute}  />);

    return (
        <section id="education">
            <div className="max-w-7xl mx-auto px-6 py-15">
                <h2 className="text-5xl font-bold py-4 text-center">Education</h2>
                <div className="mt-12">
                    <h3 className="text-3xl font-semibold capitalize mb-6">Academic</h3>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
                        {academic}
                    </div>
                </div>
                <div className="mt-12">
                    <h3 className="text-3xl font-semibold capitalize mb-6">Courses</h3>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
                        {courses}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education;