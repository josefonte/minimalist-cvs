"use client";

import * as React from "react";
import {
    MoonIcon,
    SunIcon,
    ArrowTopRightIcon,
    GitHubLogoIcon,
    TwitterLogoIcon,
    LinkedInLogoIcon,
    VideoIcon,
    InstagramLogoIcon,
    EnvelopeClosedIcon,
} from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";

export default function ButtonsNav() {
    const { theme, setTheme } = useTheme();

    const handleClicked = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    return (
        <div className="flex flex-row gap-4 pr-4 pt-4">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button variant="link">Contacts</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuGroup>
                        <DropdownMenuItem className="flex  flex-row  justify-between">
                            <div className="flex flex-row gap-4 items-center ">
                                <InstagramLogoIcon />
                                <span> Instagram</span>
                            </div>
                            <ArrowTopRightIcon />
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex flex-row gap-2 min-w-40 justify-between">
                            <div className="flex flex-row gap-4 items-center ">
                                <VideoIcon /> Youtube
                            </div>
                            <ArrowTopRightIcon />
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex flex-row gap-2  justify-between">
                            <div className="flex flex-row gap-4 items-center ">
                                <LinkedInLogoIcon /> LinkedIn
                            </div>
                            <ArrowTopRightIcon />
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex flex-row gap-2  justify-between">
                            <div className="flex flex-row gap-4 items-center ">
                                <TwitterLogoIcon /> Twitter
                            </div>
                            <ArrowTopRightIcon />
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex flex-row gap-2  justify-between">
                            <div className="flex flex-row gap-4 items-center ">
                                <GitHubLogoIcon /> Github
                            </div>
                            <ArrowTopRightIcon />
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex flex-row gap-2 ">
                        <div className="flex flex-row gap-4 items-center ">
                            <EnvelopeClosedIcon /> Email Me
                        </div>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="outline" size="icon" onClick={handleClicked}>
                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
            </Button>
        </div>
    );
}
