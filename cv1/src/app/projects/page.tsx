import { ProjectsCardType, data } from "@/data/projects";
import ProjectsCard from "@/components/me/projects-card";
const projectsData: ProjectsCardType[] = data;

export default function Projects() {
    return (
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-3 md:grid-cols-1">
            {projectsData.map((project, index) => (
                <ProjectsCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    active={project.active}
                    href={project.href}
                    repo_link={project.repo_link}
                    icon={project.icon}
                    date={project.date}
                    badges={project.badges}
                />
            ))}
        </div>
    );
}
