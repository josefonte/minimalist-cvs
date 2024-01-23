export interface ProjectsCardType {
    title: string;
    description: string;
    active: boolean;
    href?: string;
    repo_link?: string;
    icon?: string;
    date: string;
    badges?: string[];
}

const data: ProjectsCardType[] = [
    {
        title: "University ",
        description:
            "All the projects I've done during my BSc and MSc in Software Enginnering at the Universidade do Minho.",
        active: false,
        href: "",
        icon: "github",
        date: "2020-2025",
        badges: ["Python", "Java", "C/C++", "Golang", "Haskell", "MySQL"],
        repo_link: "https://github.com/josefonte/University",
    },
    {
        title: "Minimalist CVs",
        description:
            "Miminimalist CVs is a project that aims to provide a simple and easy to use CV generator.",
        active: false,
        repo_link: "https://github.com/josefonte/minimalist-cvs",
        icon: "github",
        date: "2024",
        badges: ["NextJS", "React", "shadcn/ui", "Typescript", "TailwindCSS"],
    },
];

export { data };
