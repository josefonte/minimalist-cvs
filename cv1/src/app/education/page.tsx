import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { EducationData, data } from "@/data/education";

const eduData: EducationData[] = data;

interface EducationCardProps {
    institution: string;
    course: string;
    description: string[];
    badges?: string[];
    date: string;
    location?: string;
    customFields?: JSX.Element;
}

function EducationCard({
    institution,
    course,
    description,
    badges,
    date,
    location,
    customFields,
}: EducationCardProps) {
    return (
        <Card className="my-4">
            <CardHeader className="pb-3">
                <CardTitle className="flex flex-row justify-between items-center">
                    <div className="text-xl">{institution}</div>
                    <div className="text-sm font-normal	text-muted-foreground subpixel-antialiased ">
                        {location}
                    </div>
                </CardTitle>
                <CardDescription className="text-1xl flex flex-row justify-between items-start">
                    <div className="text-sm">{course}</div>
                    <div className="text-xs font-normal	text-muted-foreground subpixel-antialiased">
                        {date}
                    </div>
                </CardDescription>
            </CardHeader>
            <CardContent className=" font-light text-sm	pb-5">
                <ul className="list-disc ml-3.5">
                    {description.map((point, index) => (
                        <li key={index} className="mb-1.5">
                            {point}
                        </li>
                    ))}
                </ul>
                {customFields}
            </CardContent>
            <CardFooter>
                {badges?.map((badge, index) => (
                    <Badge key={index} className="mr-2">
                        {badge}
                    </Badge>
                ))}
            </CardFooter>
        </Card>
    );
}

function CustomFields(props: { index: number }) {
    const { index } = props;
    if (index === 0) {
        return (
            <>
                <div className="flex flex-row justify-start gap-2">
                    <p className=" font-medium">Relevant Courses : </p>{" "}
                    <p> asndjasn</p>
                </div>
                <div className="flex flex-row justify-start gap-2">
                    <p className=" font-medium">Technical Skill : </p>{" "}
                    <p> asndjasn</p>
                </div>
            </>
        );
    } else if (index === 1) {
        return (
            <>
                <div>
                    <p className="inline-block font-medium mr-1">
                        Relevant Courses :
                    </p>
                    Functional, Imperative and Object Oriented Programming,
                    Algorithms, Operating Systems, Distributed Systems, Data
                    Bases, Computer Networks & Communications, Compilers &
                    Language Processing, Artificial Intelligence, Machine
                    Learning
                </div>
                <div>
                    <p>
                        <p className="inline-block font-medium mr-1">
                            Technical Skills :
                        </p>
                        Java, Python, SQL, C/C++, C#, Haskell, MatLab, Knime
                    </p>
                </div>
            </>
        );
    }
}

export default function Education() {
    return (
        <div>
            {eduData.map((card, index) => (
                <EducationCard
                    key={index}
                    institution={card.institution}
                    course={card.course}
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
