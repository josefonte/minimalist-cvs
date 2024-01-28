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
import { AtSignIcon, Gitlab, SendHorizontal, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { Textarea } from "@/components/ui/textarea";

export default function ButtonsNav() {
    const { theme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = React.useState(false);

    const onClose = () => {
        setIsOpen(false);
    };

    const onOpen = () => {
        setIsOpen(true);
    };

    const handleClicked = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const refInstagram: React.RefObject<HTMLDivElement> = React.useRef(null);

    return (
        <div className="flex flex-row gap-3 pr-4 pt-4">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button variant="link">Contacts</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuGroup>
                        <DropdownMenuItem
                            ref={refInstagram}
                            className="flex flex-row justify-between hover:cursor-pointer"
                        >
                            <div className="flex flex-row gap-3 items-center ">
                                <InstagramLogoIcon />
                                <a>Instagram</a>
                            </div>
                            <ArrowTopRightIcon />
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex flex-row gap-2 min-w-40 justify-between">
                            <div className="flex flex-row gap-3 items-center ">
                                <VideoIcon /> Youtube
                            </div>
                            <ArrowTopRightIcon />
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex flex-row gap-2  justify-between">
                            <div className="flex flex-row gap-3 items-center ">
                                <LinkedInLogoIcon /> LinkedIn
                            </div>
                            <ArrowTopRightIcon />
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex flex-row gap-2  justify-between">
                            <div className="flex flex-row gap-3 items-center ">
                                <TwitterLogoIcon /> Twitter
                            </div>
                            <ArrowTopRightIcon />
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex flex-row gap-2  justify-between">
                            <div className="flex flex-row gap-3 items-center ">
                                <GitHubLogoIcon /> Github
                            </div>
                            <ArrowTopRightIcon />
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex flex-row gap-2 min-w-40 justify-between">
                            <div className="flex flex-row gap-3 items-center ">
                                <Gitlab className="w-4" /> GitLab
                            </div>
                            <ArrowTopRightIcon />
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex flex-row gap-2 min-w-40 justify-between">
                            <div className="flex flex-row gap-3 items-center ">
                                <AtSignIcon className="w-4" /> Medium
                            </div>
                            <ArrowTopRightIcon />
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex flex-row gap-2 ">
                        <div
                            className="flex flex-row gap-4 items-center hover:cursor-pointer "
                            onClick={onOpen}
                        >
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
            <Dialog onOpenChange={onClose} open={isOpen} defaultOpen={isOpen}>
                <DialogContent className="md:max-w-[725px] px-10 pt-8 ">
                    <DialogHeader>
                        <DialogTitle className="flex flex-row gap-2 items-center text-2xl">
                            Send Email
                        </DialogTitle>
                        <DialogDescription>
                            Write me a message and I'll get back to you asap
                        </DialogDescription>
                    </DialogHeader>

                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-12 items-center gap-4 ">
                            <Label htmlFor="name" className="col-span-2 ">
                                Nome
                            </Label>
                            <Input
                                id="name"
                                placeholder="John Cena"
                                className="col-span-6"
                            />
                        </div>
                        <div className="grid grid-cols-12 items-center gap-4 ">
                            <Label htmlFor="name" className="col-span-2 ">
                                Email
                            </Label>
                            <Input
                                id="email"
                                placeholder="your-email@gmail.com"
                                className="col-span-6"
                            />
                        </div>
                        <div className="grid grid-cols-12 items-center gap-4 ">
                            <Label htmlFor="name" className="col-span-2  ">
                                Subject
                            </Label>
                            <Input
                                id="subject"
                                placeholder="Subject"
                                className="col-span-10"
                            />
                        </div>
                        <div className="grid grid-cols-12 min-h-[200px] items-center gap-4">
                            <Label
                                htmlFor="username"
                                className="col-span-2 self-start pt-2"
                            >
                                Content
                            </Label>
                            <Textarea
                                placeholder="Type your message here..."
                                className="col-span-10 min-h-[200px]"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button
                            type="submit"
                            variant="outline"
                            className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md  hover:cursor-pointer px-6 font-medium  duration-500"
                            onClick={onClose}
                        >
                            <span className="translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] group-hover:opacity-0">
                                Cancel
                            </span>

                            <X
                                className="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100"
                                strokeWidth={1.75}
                            />
                        </Button>

                        <Button
                            type="submit"
                            className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md  hover:cursor-pointer px-6 font-medium  duration-500"
                        >
                            <span className="translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] group-hover:opacity-0">
                                Send Email
                            </span>
                            <SendHorizontal
                                className="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100"
                                strokeWidth={1.75}
                            />
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
