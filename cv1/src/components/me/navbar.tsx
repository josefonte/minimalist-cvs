"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import {
    PersonIcon,
    BackpackIcon,
    ArchiveIcon,
    CameraIcon,
    FileTextIcon,
    Pencil1Icon,
} from "@radix-ui/react-icons";

let allTabs = [
    {
        id: "about",
        name: "About",
        icon: <PersonIcon className=" subpixel-antialiased h-3.5 " />,
    },

    {
        id: "education",
        name: "Education",
        icon: <FileTextIcon className=" subpixel-antialiased h-3.5 " />,
    },
    {
        id: "work",
        name: "Work",
        icon: <BackpackIcon className=" subpixel-antialiased h-3.5 " />,
    },

    {
        id: "projects",
        name: "Projects",
        icon: <ArchiveIcon className=" subpixel-antialiased h-3.5 " />,
    },
    {
        id: "photos",
        name: "Photos",
        icon: <CameraIcon className=" subpixel-antialiased h-3.5 " />,
    },
    {
        id: "blog",
        name: "Blog",
        icon: <Pencil1Icon className=" subpixel-antialiased h-3.5 " />,
    },
];

export default function Navbar() {
    const tabsRef = useRef<(HTMLElement | null)[]>([]);
    const [activeTabIndex, setActiveTabIndex] = useState<number | null>(0);
    const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
    const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

    useEffect(() => {
        if (activeTabIndex === null) {
            return;
        }

        const setTabPosition = () => {
            const currentTab = tabsRef.current[activeTabIndex] as HTMLElement;
            setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
            setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
        };

        setTabPosition();
    }, [activeTabIndex]);

    return (
        <div className="flew-row relative mx-auto flex h-12 rounded-lg border border-black/40 bg-neutral-800 px-2 backdrop-blur-sm justify-between">
            <span
                className="absolute bottom-0  -z-10 flex overflow-hidden rounded-md py-2 transition-all duration-300"
                style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
            >
                <span className="h-1 w-full rounded-md  bg-gray-200/30" />
            </span>
            {allTabs.map((tab, index) => {
                const isActive = activeTabIndex === index;

                return (
                    <Link
                        key={index}
                        href={tab.id === "about" ? "/" : "/" + tab.id}
                        legacyBehavior
                        passHref
                    >
                        <button
                            ref={(el) => (tabsRef.current[index] = el)}
                            className={`${
                                isActive ? `` : `hover:text-neutral-300`
                            }  flex flex-row justify-between gap-1 items-center  my-auto cursor-pointer select-none rounded-full px-4 text-center font-light text-white`}
                            onClick={() => setActiveTabIndex(index)}
                        >
                            {tab.icon}
                            {tab.name}
                        </button>
                    </Link>
                );
            })}
        </div>
    );
}

/*
export default function ButtonsNav() {
    const [selected, setSelected] = React.useState("about");

    return (
        <div className="flex flex-row justify-around border-b  ">
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
*/
