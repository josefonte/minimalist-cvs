import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { ThemeProvider } from "@/components/theme-provider";
import ButtonsNav from "@/components/me/buttons-nav";
import Navbar from "@/components/me/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "CV1",
    description: "Create a CV with Next.js and Tailwind CSS",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="flex-col ">
                        <div className=" flex justify-end ">
                            <ButtonsNav />
                        </div>
                        <div className="mx-[25%]	flex-collumn gap-2 items-center place-content-center ">
                            <div className=" border-solid flex justify-around">
                                <Avatar className="min-w-44	 min-h-44 	">
                                    <AvatarImage
                                        src="https://github.com/shadcn.png"
                                        alt="@shadcn"
                                    />
                                    <AvatarFallback>JF</AvatarFallback>
                                </Avatar>
                            </div>

                            <div className="flex flex-col gap-1 mt-2">
                                <h1 className="text-3xl font-bold border-solid text-center">
                                    Chen Nian
                                </h1>
                                <div className="flex flex-row justify-center  gap-2  text-center">
                                    <p className=""> Software Engineer </p>
                                    <p className="italic">
                                        @ University of Minho
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" mx-64	mt-10 border-b">
                        <Navbar />
                    </div>

                    <div className="mx-64 mt-5	">{children}</div>
                </ThemeProvider>
            </body>
        </html>
    );
}
