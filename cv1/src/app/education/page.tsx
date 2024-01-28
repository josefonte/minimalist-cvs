import { EducationDataType, data } from "@/data/education";
import EduWorkCard from "@/components/me/edu_work-card";
const eduData: EducationDataType[] = data;

function CustomFields(props: { index: number }) {
    const { index } = props;

    const coursesData = [
        "",
        "Functional, Imperative and Object Oriented Programming, Algorithms, Operating Systems, Distributed Systems, Data Bases, Computer Networks & Communications, Compilers & Language Processing, Artificial Intelligence, Machine Learning",
        "Calculus I and II, Linear Algebra, Material Science I and II, Technical Drawing, 3D Modelling/CAD",
    ];

    const skills = [
        "Cenas de engenharia",
        "Design Systems, Model & Implement Data Layer, Different Programming Paradigms, ",
        "cenas de engenharia mecanica",
    ];
    return (
        <>
            {coursesData[index] !== "" ? (
                <div>
                    <div className="inline-block font-medium mr-1">
                        Relevant Courses :
                    </div>
                    {coursesData[index]}
                </div>
            ) : null}

            {skills[index] !== "" ? (
                <div>
                    <div className="inline-block font-medium mr-1">
                        Skills :
                    </div>
                    {skills[index]}
                </div>
            ) : null}
        </>
    );
}

export default function Education() {
    return (
        <div>
            {eduData.map((card, index) => (
                <EduWorkCard
                    key={index}
                    title={card.institution}
                    subtitle={card.course}
                    description={card.description}
                    badges={card.badges}
                    date={card.date}
                    location={card.location}
                    customFields={<CustomFields index={index} />}
                />
            ))}
        </div>
    );
}
