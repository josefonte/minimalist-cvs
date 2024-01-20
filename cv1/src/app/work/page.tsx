import { WorkDataType, data } from "@/data/work";
import EduWorkCard from "@/components/me/edu_work-card";
const eduData: WorkDataType[] = data;

function CustomFields(props: { index: number }) {
    const { index } = props;

    const coursesData = ["", "", ""];

    const skills = ["", "", ""];
    return (
        <>
            {coursesData[index] !== "" ? (
                <div>
                    <p className="inline-block font-medium mr-1">
                        Relevant Courses :
                    </p>
                    {coursesData[index]}
                </div>
            ) : null}

            {skills[index] !== "" ? (
                <div>
                    <p className="inline-block font-medium mr-1">Skills :</p>
                    {skills[index]}
                </div>
            ) : null}
        </>
    );
}

export default function Work() {
    return (
        <div>
            {eduData.map((card, index) => (
                <EduWorkCard
                    key={index}
                    title={card.company}
                    subtitle={card.role}
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
