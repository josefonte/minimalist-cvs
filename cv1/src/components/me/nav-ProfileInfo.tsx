import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { SewingPinFilledIcon } from "@radix-ui/react-icons";

export default function ProfileInfo() {
    return (
        <div className=" flex-collumn gap-2 items-center place-content-center ">
            <div className=" border-solid flex justify-around">
                <Avatar className="min-w-48	 min-h-48 border-solid 	">
                    <AvatarImage
                        src="https://avatars.githubusercontent.com/u/73178551?s=400&u=f731b4eb21666e95ace44de763b615ea33660abd&v=4"
                        alt="@josefonte"
                    />
                    <AvatarFallback>José Fonte</AvatarFallback>
                </Avatar>
            </div>

            <div className="flex flex-col gap-2 mt-2">
                <h1 className="text-3xl font-bold border-solid text-center">
                    José Fonte
                </h1>
                <div className="flex flex-row justify-center  gap-2  text-center">
                    <p className=""> MSc in Software Engineering Student</p>
                    <a
                        className="italic hover:text-red-800"
                        href="https://www.uminho.pt/PT"
                    >
                        @ Universidade do Minho
                    </a>
                </div>
                <div className="flex flex-row justify-center  gap-1 items-center text-center">
                    <SewingPinFilledIcon /> Portugal
                </div>
            </div>
        </div>
    );
}
