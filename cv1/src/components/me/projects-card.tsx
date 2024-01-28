"use client";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { GitHubLogoIcon, ArrowTopRightIcon } from "@radix-ui/react-icons";

import { GitlabIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Url } from "url";

interface ProjectsCardProps {
    title: string;
    description: string;
    active: boolean;
    href?: string;
    repo_link?: string;
    icon?: string;
    date: string;
    badges?: string[];
    customFields?: JSX.Element;
}

export default function ProjectsCard({
    title,
    description,
    active,
    href,
    repo_link,
    icon,
    date,
    badges,
    customFields,
}: ProjectsCardProps) {
    const link_repo = repo_link ? new URL(repo_link) : new URL("");

    return (
        <Card className="flex flex-col">
            <CardHeader className=" pb-3">
                <CardTitle>
                    <div className="text-xl flex flex-row justify-between items-center">
                        {active ? (
                            <a
                                href=""
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl font-semibold hover:underline hover:cursor-pointer relative inline-flex items-center transition-transform duration-300 ease-in-out"
                            >
                                {title}
                                <ArrowTopRightIcon className="inline-block ml-1 h-5 w-5" />
                            </a>
                        ) : (
                            <div className="">{title}</div>
                        )}

                        {repo_link && icon === "github" ? (
                            <Link href={link_repo} target="_blank" passHref>
                                <GitHubLogoIcon className="h-5 w-5 hover:scale-110 " />
                            </Link>
                        ) : null}
                        {repo_link && icon === "gitlab" ? (
                            <Link href={link_repo} target="_blank" passHref>
                                <GitlabIcon className="h-5 w-5 hover:scale-110" />
                            </Link>
                        ) : null}
                    </div>
                </CardTitle>
                <CardDescription>
                    <div className="text-sm font-normal	text-muted-foreground subpixel-antialiased ">
                        {date}
                    </div>
                </CardDescription>
            </CardHeader>

            <CardContent className=" font-light text-sm	pb-5 text-justify mb-auto">
                {description}
                {customFields}
            </CardContent>

            <CardFooter className="pb-4 mt-auto">
                <div className=" flex flex-wrap gap-1">
                    {badges?.map((badge, index) => (
                        <Badge key={index} className="mr-2 mb-2">
                            {badge}
                        </Badge>
                    ))}
                </div>
            </CardFooter>
        </Card>
    );
}
