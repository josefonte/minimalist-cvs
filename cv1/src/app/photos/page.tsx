import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

import { data } from "@/data/photos";

export default function Photos() {
    return (
        <>
            <ScrollArea className="w-full whitespace-nowrap rounded-md  snap-x snap-mandatory">
                <div className="flex w-max space-x-4 py-4  ">
                    <div className="flex flex-col gap-1">
                        <p className="pl-3 text-lg">BJJ 2023</p>
                        <div className="w-[440px] h-fit grid auto-rows-[200px] grid-cols-1 gap-4 overflow-hidden shrink-0 mr-8">
                            <div
                                key={1}
                                className="row-span-2 col-span-2 rounded-xl border-2 border-slate-400/10 bg-neutral-100  dark:bg-neutral-900 "
                            >
                                <img
                                    src={data[17].img}
                                    alt={data[17].alt}
                                    className="h-full w-full object-cover rounded-xl"
                                />
                            </div>
                            <div
                                key={2}
                                className="row-span-1 col-span-2 rounded-xl border-2 border-slate-400/10 bg-neutral-100  dark:bg-neutral-900 "
                            >
                                <img
                                    src={data[18].img}
                                    alt={data[18].alt}
                                    className="h-full w-full object-cover rounded-xl"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="pl-3 text-lg">Summer 2023</p>
                        <div className="w-[900px] h-fit grid auto-rows-[200px] grid-cols-4 gap-4 overflow-hidden shrink-0 mr-8">
                            <div
                                key={3}
                                className="row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100  dark:bg-neutral-900 "
                            >
                                <img
                                    src={data[0].img}
                                    alt={data[0].alt}
                                    className="h-full w-full object-cover rounded-xl"
                                />
                            </div>
                            <div
                                key={4}
                                className="row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100  dark:bg-neutral-900 "
                            >
                                <img
                                    src={data[1].img}
                                    alt={data[1].alt}
                                    className="h-full w-full object-cover rounded-xl"
                                />
                            </div>

                            <div
                                key={5}
                                className="row-span-2 rounded-xl border-2 border-slate-400/10 bg-neutral-100  dark:bg-neutral-900 "
                            >
                                <img
                                    src={data[2].img}
                                    alt={data[2].alt}
                                    className="h-full w-full object-cover rounded-xl"
                                />
                            </div>
                            <div
                                key={6}
                                className="row-span-1  rounded-xl border-2 border-slate-400/10 bg-neutral-100  dark:bg-neutral-900 "
                            >
                                <img
                                    src={data[3].img}
                                    alt={data[3].alt}
                                    className="h-full w-full object-cover rounded-xl"
                                />
                            </div>
                            <div
                                key={7}
                                className="row-span-1 col-span-2 rounded-xl border-2 border-slate-400/10 bg-neutral-100  dark:bg-neutral-900 "
                            >
                                <img
                                    src={data[4].img}
                                    alt={data[4].alt}
                                    className="h-full w-full object-cover rounded-xl"
                                />
                            </div>
                            <div
                                key={8}
                                className="row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100  dark:bg-neutral-900 "
                            >
                                <img
                                    src={data[5].img}
                                    alt={data[5].alt}
                                    className="h-full w-full object-cover rounded-xl"
                                />
                            </div>
                            <div
                                key={9}
                                className="row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100  dark:bg-neutral-900 "
                            >
                                <img
                                    src={data[6].img}
                                    alt={data[6].alt}
                                    className="h-full w-full object-cover rounded-xl"
                                />
                            </div>
                            <div
                                key={10}
                                className="row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100  dark:bg-neutral-900 "
                            >
                                <img
                                    src={data[7].img}
                                    alt={data[7].alt}
                                    className="h-full w-full object-cover rounded-xl"
                                />
                            </div>
                            <div
                                key={11}
                                className="row-span-1 col-span-2 rounded-xl border-2 border-slate-400/10 bg-neutral-100  dark:bg-neutral-900 "
                            >
                                <img
                                    src={data[8].img}
                                    alt={data[8].alt}
                                    className="h-full w-full object-cover rounded-xl"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <p className="pl-3 text-lg">London 2023</p>
                        <div className="w-[650px] h-fit grid auto-rows-[200px] grid-cols-3 gap-4 overflow-hidden shrink-0">
                            <div
                                key={12}
                                className="row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100  dark:bg-neutral-900 "
                            >
                                <img
                                    src={data[9].img}
                                    alt={data[9].alt}
                                    className="h-full w-full object-cover rounded-xl"
                                />
                            </div>
                            <div
                                key={13}
                                className="row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100  dark:bg-neutral-900 "
                            >
                                <img
                                    src={data[10].img}
                                    alt={data[10].alt}
                                    className="h-full w-full object-cover rounded-xl"
                                />
                            </div>
                            <div
                                key={14}
                                className="row-span-2 rounded-xl border-2 border-slate-400/10 bg-neutral-100  dark:bg-neutral-900 "
                            >
                                <img
                                    src={data[11].img}
                                    alt={data[11].alt}
                                    className="h-full w-full object-cover rounded-xl"
                                />
                            </div>

                            <div
                                key={15}
                                className="row-span-1  rounded-xl border-2 border-slate-400/10 bg-neutral-100  dark:bg-neutral-900 "
                            >
                                <img
                                    src={data[12].img}
                                    alt={data[12].alt}
                                    className="h-full w-full object-cover rounded-xl"
                                />
                            </div>
                            <div
                                key={16}
                                className="row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100  dark:bg-neutral-900 "
                            >
                                <img
                                    src={data[13].img}
                                    alt={data[13].alt}
                                    className="h-full w-full object-cover rounded-xl"
                                />
                            </div>
                            <div
                                key={17}
                                className="row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100  dark:bg-neutral-900 "
                            >
                                <img
                                    src={data[14].img}
                                    alt={data[14].alt}
                                    className="h-full w-full object-cover rounded-xl"
                                />
                            </div>
                            <div
                                key={18}
                                className="row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100  dark:bg-neutral-900 "
                            >
                                <img
                                    src={data[15].img}
                                    alt={data[15].alt}
                                    className="h-full w-full object-cover rounded-xl"
                                />
                            </div>
                            <div
                                key={19}
                                className="row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100  dark:bg-neutral-900 "
                            >
                                <img
                                    src={data[16].img}
                                    alt={data[16].alt}
                                    className="h-full w-full object-cover rounded-xl"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-[1px] "></div>
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </>
    );
}
