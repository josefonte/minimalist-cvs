"use client";
import { useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import Link from "next/link";

import {
    PersonIcon,
    BackpackIcon,
    ArchiveIcon,
    CameraIcon,
    FileTextIcon,
    Pencil1Icon,
} from "@radix-ui/react-icons";

import {
    PencilLine,
    FileText,
    UserRound,
    Briefcase,
    Archive,
    Camera,
} from "lucide-react";

let allTabs = [
    {
        id: "about",
        name: "About",
        icon_light: (
            <UserRound
                className=" subpixel-antialiased h-3.5 "
                strokeWidth={2}
            />
        ),
        icon_bold: (
            <UserRound
                className=" subpixel-antialiased h-3.5 "
                strokeWidth={2.75}
            />
        ),
    },

    {
        id: "education",
        name: "Education",
        icon_light: (
            <FileText
                className=" subpixel-antialiased h-3.5 "
                strokeWidth={2}
            />
        ),
        icon_bold: (
            <FileText
                className=" subpixel-antialiased h-3.5 "
                strokeWidth={2.75}
            />
        ),
    },
    {
        id: "work",
        name: "Work",
        icon_light: (
            <Briefcase
                className=" subpixel-antialiased h-3.5 "
                strokeWidth={2}
            />
        ),
        icon_bold: (
            <Briefcase
                className=" subpixel-antialiased h-3.5 "
                strokeWidth={2.5}
            />
        ),
    },

    {
        id: "projects",
        name: "Projects",
        icon_light: (
            <Archive className=" subpixel-antialiased h-3.5 " strokeWidth={2} />
        ),
        icon_bold: (
            <Archive
                className=" subpixel-antialiased h-3.5 "
                strokeWidth={2.5}
            />
        ),
    },
    {
        id: "photos",
        name: "Photos",
        icon_light: (
            <Camera className=" subpixel-antialiased h-3.5 " strokeWidth={2} />
        ),
        icon_bold: (
            <Camera
                className=" subpixel-antialiased h-3.5 "
                strokeWidth={2.5}
            />
        ),
    },
    {
        id: "blog",
        name: "Blog",
        icon_light: (
            <PencilLine
                className=" subpixel-antialiased h-3.5 "
                strokeWidth={2}
            />
        ),
        icon_bold: (
            <PencilLine
                className=" subpixel-antialiased h-3.5 "
                strokeWidth={2.5}
            />
        ),
    },
];

function getTabIndex() {
    const starting_tab = usePathname().slice(1);
    let tab_index = 0;

    allTabs.map((tab, index) =>
        tab.id === starting_tab ? (tab_index = index) : 0
    );
    return tab_index;
}

function Navbar() {
    const tabsRef = useRef<(HTMLElement | null)[]>([]);
    const [activeTabIndex, setActiveTabIndex] = useState<number | null>(
        getTabIndex()
    );
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
        <div className="flew-row relative mx-auto flex h-12  px-2 backdrop-blur-sm justify-between border-b ">
            <span
                className="absolute bottom-0 -z-10 flex overflow-hidden rounded-md py-2 transition-all duration-300"
                style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
            >
                <span className="h-1 w-full rounded-md bg-primary" />
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
                                isActive
                                    ? ` font-medium`
                                    : `hover:text-gray-600`
                            }  flex flex-row justify-between gap-0.5 items-center  my-auto cursor-pointer select-none rounded-md px-4  font-base `}
                            onClick={() => setActiveTabIndex(index)}
                        >
                            {isActive ? tab.icon_bold : tab.icon_light}
                            {tab.name}
                        </button>
                    </Link>
                );
            })}
        </div>
    );
}

export default Navbar;
