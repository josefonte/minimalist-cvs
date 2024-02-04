"use client";

import { set, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

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
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

import { sendEmail } from "@/app/actions/sendEmail";

const formSchema = z.object({
    name: z
        .string()
        .min(2, {
            message: "Min characters of 2.",
        })
        .max(20, {
            message: "Min characters of 20.",
        }),
    email: z.string().email(),
    subject: z
        .string()
        .min(2, {
            message: "Min characters of 2.",
        })
        .max(100, {
            message: "Max characters of 100.",
        }),
    message: z
        .string()
        .min(2, {
            message: "Min characters of 2.",
        })
        .max(500, {
            message: "Max characters of 500.",
        }),
});

export default function ButtonsNav() {
    const { theme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = React.useState(false);
    const { toast } = useToast();

    const onCloseDialog = () => {
        setIsOpen(false);
    };

    const onOpenDialog = () => {
        setIsOpen(true);
    };

    const handleThemeClicked = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsOpen(false);
        const response = await sendEmail(
            values.name,
            values.email,
            values.subject,
            values.message
        );

        console.log(response);

        if (response instanceof Error || !response) {
            toast({
                variant: "failed",
                title: "Email Not Sent ❌ Try Later",
            });
        }

        if (response && "sent" in response && response.sent) {
            toast({
                title: "Email Sent Successfully ✅",
            });
        }
    }

    return (
        <div className="flex flex-row gap-3 pr-4 pt-4">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="link">Contacts</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuGroup>
                        {/*<DropdownMenuItem className="hover:cursor-pointer">
                            <Link
                                href="https://www.instagram.com/"
                                target="_blank"
                                className="group w-full flex flex-row justify-between items-center"
                            >
                                <div className="flex flex-row gap-3 items-center ">
                                    <InstagramLogoIcon />
                                    <a>Instagram</a>
                                </div>
                                <div className=" transition duration-300 group-hover:rotate-45 group-hover:cursor-pointer">
                                    <ArrowTopRightIcon />
                                </div>
                            </Link>
                        </DropdownMenuItem> 
                         <DropdownMenuItem className="hover:cursor-pointer">
                            <Link
                                href="https://www.youtube.com/"
                                target="_blank"
                                className="group w-full flex flex-row justify-between items-center"
                            >
                                <div className="flex flex-row gap-3 items-center ">
                                    <VideoIcon /> Youtube
                                </div>
                                <div className=" transition duration-300 group-hover:rotate-45 group-hover:cursor-pointer">
                                    <ArrowTopRightIcon />
                                </div>
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuItem className="group flex flex-row gap-2 min-w-40 justify-between hover:cursor-pointer">
                            <div className="flex flex-row gap-3 items-center ">
                                <Gitlab className="w-4" /> GitLab
                            </div>
                            <div className=" transition duration-300 group-hover:rotate-45 group-hover:cursor-pointer">
                                <ArrowTopRightIcon />
                            </div>
                        </DropdownMenuItem>
                        */}

                        <DropdownMenuItem className="hover:cursor-pointer">
                            <Link
                                href="https://www.linkedin.com/in/jose-pedro-fonte/"
                                target="_blank"
                                className="group w-full flex flex-row justify-between items-center"
                            >
                                <div className="flex flex-row gap-3 items-center ">
                                    <LinkedInLogoIcon /> LinkedIn
                                </div>
                                <div className=" transition duration-300 group-hover:rotate-45 group-hover:cursor-pointer">
                                    <ArrowTopRightIcon />
                                </div>
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuItem className=" hover:cursor-pointer">
                            <Link
                                href="https://twitter.com/zepfonte"
                                target="_blank"
                                className="group w-full flex flex-row justify-between items-center"
                            >
                                <div className="flex flex-row gap-3 items-center ">
                                    <TwitterLogoIcon /> Twitter
                                </div>
                                <div className=" transition duration-300 group-hover:rotate-45 group-hover:cursor-pointer">
                                    <ArrowTopRightIcon />
                                </div>
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuItem className=" hover:cursor-pointer">
                            <Link
                                href=" https://github.com/josefonte"
                                target="_blank"
                                className="group w-full flex flex-row justify-between items-center"
                            >
                                <div className="flex flex-row gap-3 items-center ">
                                    <GitHubLogoIcon /> Github
                                </div>
                                <div className=" transition duration-300 group-hover:rotate-45 group-hover:cursor-pointer">
                                    <ArrowTopRightIcon />
                                </div>
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuItem className=" hover:cursor-pointer">
                            <Link
                                href=" https://medium.com/@josefonte"
                                target="_blank"
                                className="group w-full flex flex-row justify-between items-center"
                            >
                                <div className="flex flex-row gap-3 items-center ">
                                    <AtSignIcon className="w-4" /> Medium
                                </div>
                                <div className=" transition duration-300 group-hover:rotate-45 group-hover:cursor-pointer">
                                    <ArrowTopRightIcon />
                                </div>
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex flex-row gap-2 ">
                        <div
                            className="flex flex-row gap-4 items-center hover:cursor-pointer "
                            onClick={onOpenDialog}
                        >
                            <EnvelopeClosedIcon /> Email Me
                        </div>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="outline" size="icon" onClick={handleThemeClicked}>
                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
            </Button>

            <Dialog
                onOpenChange={onCloseDialog}
                open={isOpen}
                defaultOpen={isOpen}
            >
                <DialogContent className="mx-4 rounded-lg md:max-w-[725px] px-10 pt-8 ">
                    <DialogHeader className="flex flex-col gap-1 items-start">
                        <DialogTitle className="text-2xl">
                            Send Email
                        </DialogTitle>
                        <DialogDescription>
                            Write me a message and I&apos;ll get back to you
                            asap
                        </DialogDescription>
                    </DialogHeader>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-1"
                        >
                            <FormField
                                defaultValue=""
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem className="grid grid-cols-12 items-center  ">
                                        <FormLabel className="col-span-2">
                                            Name
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Alan Turing"
                                                {...field}
                                                className="col-span-10 sm:col-span-6"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                defaultValue=""
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="grid grid-cols-12 items-center ">
                                        <FormLabel className="col-span-2">
                                            Email
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="alanturing@gmail.com"
                                                {...field}
                                                className="col-span-10 sm:col-span-6"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                defaultValue=""
                                control={form.control}
                                name="subject"
                                render={({ field }) => (
                                    <FormItem className="grid grid-cols-12 items-center">
                                        <FormLabel className="col-span-2">
                                            Subject
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Subject"
                                                {...field}
                                                className="col-span-10"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                defaultValue=""
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem className="grid grid-cols-12 items-center ">
                                        <FormLabel className="col-span-2 self-start pt-2">
                                            Message
                                        </FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Type your message here..."
                                                {...field}
                                                className="col-span-10 min-h-[200px] "
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <DialogFooter>
                                <Button
                                    type="submit"
                                    className="group mt-2 relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md  hover:cursor-pointer px-6 font-medium  duration-500 hover:bg-primary"
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
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
