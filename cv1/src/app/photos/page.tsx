import * as React from "react";
import Image from "next/image";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { data } from "@/data/photos";

export default function Photos() {
    return (
        <>
            <ScrollArea className="w-full whitespace-nowrap rounded-md border snap-x snap-mandatory">
                <div className="flex w-max space-x-4 p-4 ">
                    {data.map((artwork, index) => (
                        <figure key={index} className="shrink-0 ">
                            <div className="overflow-hidden rounded-md">
                                <img
                                    src={artwork.img}
                                    alt={`Photo by ${index}`}
                                    className="aspect-[3/4] h-fit w-96 object-cover snap-center snap-always"
                                />
                            </div>
                        </figure>
                    ))}
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </>
    );
}
