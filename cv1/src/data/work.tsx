export interface WorkDataType {
    company: string;
    role: string;
    description: string[];
    badges?: string[];
    date: string;
    location?: string;
}

const data: WorkDataType[] = [
    {
        company: "Colégio João Paulo II",
        role: "Assistant Teacher of Robotics",
        description: [
            "In a weekly robotics class, I teach programming and robotics in a fun and engaging way to kids from the 1st to 8th grade.",
            "Participated in National/European Robotics Competition with my students.",
            "Helped organize robotics events in the country.",
        ],
        badges: [
            "MicroBit",
            "Arduino",
            "Lego Mindstorms",
            "Scratch",
            "Bot'n Roll",
        ],
        date: "2020 - Present",
        location: "Braga, Portugal",
    },
    {
        company: "Sngular Portugal",
        role: "Software Enginner - Summer Intern ",
        description: [
            "Collaborated with a team of summer interns to develop a Jira App integrated in the Atlassian Ecosystem.",
            " The goal of the app was to manage tasks and sub‑tasks inside tickets, with a backbone for admins to manage everything.",
            "At the end of the Summer Internship, my team was able to achieve all goals a week in advance.",
        ],
        badges: [
            "MongoDB",
            "Express",
            "NodeJS",
            "React",
            "Atlassian Design System",
            "Jira",
            "Confluence",
            "Git/Gitlab",
        ],
        date: "Jun - Sept 2023 ",
        location: "Braga, Portugal",
    },
    {
        company: "CodeVision",
        role: "Software Enginner - Summer Intern ",
        description: [
            "Collaborated with a team to develop an internal tool that would connect international partners with the company.",
            "Worked with Entity ORM to manage multiple databases.",
            "At the end of the Summer Internship, I was able to deploy multiple features into production which made the experience really fulfilling.",
        ],
        badges: [
            ".Net Framework",
            "C#",
            "SQL Server",
            "Azure",
            "Git",
            "Entity ORM",
        ],
        date: "Jun - Sept 2022 ",
        location: "Braga, Portugal",
    },
];

export { data };
