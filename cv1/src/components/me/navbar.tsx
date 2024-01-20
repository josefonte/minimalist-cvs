"use client";
import * as React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

import {
    PersonIcon,
    BackpackIcon,
    ArchiveIcon,
    CameraIcon,
    FileTextIcon,
    Pencil1Icon,
} from "@radix-ui/react-icons";
/*
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";
*/
export default function ButtonsNav() {
    const [selected, setSelected] = React.useState("about");

    return (
        <div className="flex flex-row justify-around border-b  ">
            {/*
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                            >
                                About
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/education" legacyBehavior passHref>
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                            >
                                Education
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/work" legacyBehavior passHref>
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                            >
                                Work
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/projects" legacyBehavior passHref>
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                            >
                                Projects
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/photos" legacyBehavior passHref>
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                            >
                                Photos
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/blog" legacyBehavior passHref>
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                            >
                                Blog
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
*/}
            <div className="hover:cursor-pointer hover:font-medium pb-2 hover:border-b ">
                <Link href="/" legacyBehavior passHref>
                    <div className="flex flex-row justify-between gap-1 items-center ">
                        <PersonIcon className=" subpixel-antialiased h-3.5 " />
                        About
                    </div>
                </Link>
            </div>

            <div className="hover:cursor-pointer hover:font-medium hover:border-b ">
                <Link href="/education" legacyBehavior passHref>
                    <div className="flex flex-row justify-between gap-1 items-center ">
                        <FileTextIcon className=" subpixel-antialiased h-3.5 " />
                        Education
                    </div>
                </Link>
            </div>

            <div className="hover:cursor-pointer hover:font-medium hover:border-b">
                <Link href="/work" legacyBehavior passHref>
                    <div className="flex flex-row justify-between gap-1 items-center ">
                        <BackpackIcon className=" subpixel-antialiased h-3.5 " />
                        Work
                    </div>
                </Link>
            </div>

            <div className="hover:cursor-pointer hover:font-medium hover:border-b">
                <Link href="/projects" legacyBehavior passHref>
                    <div className="flex flex-row justify-between gap-1 items-center ">
                        <ArchiveIcon className=" subpixel-antialiased h-3.5 " />
                        Projects
                    </div>
                </Link>
            </div>

            <div className="hover:cursor-pointer hover:font-medium hover:border-b">
                <Link href="/photos" legacyBehavior passHref>
                    <div className="flex flex-row justify-between gap-1 items-center     ">
                        <CameraIcon className=" subpixel-antialiased h-3.5 " />
                        Photos
                    </div>
                </Link>
            </div>

            <div className="hover:cursor-pointer hover:font-medium hover:border-b">
                <Link href="/blog" legacyBehavior passHref>
                    <div className="flex flex-row justify-between gap-1 items-center ">
                        <Pencil1Icon className=" subpixel-antialiased h-3.5 " />
                        Writing
                    </div>
                </Link>
            </div>
        </div>
    );
}
