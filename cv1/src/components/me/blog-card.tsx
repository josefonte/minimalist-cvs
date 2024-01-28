import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { AtSignIcon, ArrowRight } from "lucide-react";
import { IoLogoMedium } from "react-icons/io5";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "../ui/separator";

interface CardProps {
    title: string;
    description: string;
    pubDate: string;
    link: string;
    img: string;
}

function convertDate(date: string) {
    const dateObject = new Date(date);

    const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
        dateObject
    );
    const year = dateObject.getFullYear();

    return `${month}, ${year}`;
}

export default function BlogCard({
    title,
    description,
    pubDate,
    link,
    img,
}: CardProps) {
    const date = convertDate(pubDate.split(/\s+/)[0]);

    return (
        <Card className="my-4 group hover:cursor-pointer hover:border-primary/70 hover:shadow-md ">
            <CardHeader className="pb-1">
                <CardTitle className="flex flex-row justify-between items-center">
                    <div className="text-xl">{title}</div>
                </CardTitle>
            </CardHeader>
            <CardContent className=" font-light text-sm	pb-4">
                <div className="flex flex-row gap-6 justify-between text-justify h-[100px] ">
                    <div className="w-full text-ellipsis overflow-hidden">
                        {description}
                    </div>
                    <img
                        src={img}
                        alt={"thumbnail"}
                        className="h-full w-[20%] object-cover rounded-md"
                    />
                </div>
            </CardContent>
            <CardFooter className="flex flex-row justify-between pb-3">
                <div className="flex flex-row gap-2 items-center h-6">
                    <div className="text-sm font-normal	text-muted-foreground">
                        {date}
                    </div>
                    <Separator orientation="vertical" className="" />
                    <div className="text-sm font-normal	text-muted-foreground">
                        Likes
                    </div>
                    <Separator orientation="vertical" className="" />
                    <div className="text-sm font-normal	text-muted-foreground">
                        Views
                    </div>
                </div>

                <div className="group relative inline-flex h-8 w-10 items-center justify-center overflow-hidden font-medium text-primary transition-all duration-800 group-hover:w-32">
                    <div className="inline-flex whitespace-nowrap opacity-0 transition-all duration-800 group-hover:opacity-100">
                        <span className="flex flex-row gap-1 items-center text-sm group-hover:underline">
                            <IoLogoMedium /> Read More
                        </span>
                    </div>
                    <div className="absolute right-0 bg-background">
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}
