"use client"
import {CalendarCheckIcon, HomeIcon, MedalIcon, Search, User2Icon } from "lucide-react";
import { useState } from "react";
import "./mentee-bottom-navigation.css"
import { useRouter } from 'next/navigation';
import { usePathname } from "next/navigation";
import Link from "next/link";


export default function MenteeBottomNavigation() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();
    const currentRoute = usePathname()
    return (
        <div className=" flex w-full dsmax-w-[380px] h-[48px] text-center border-t fixed bottom-0 bg-white  sm:h-14 text-[10px] fixed left-0 bottom-0">
            <Link 
                className="flex flex-col gap-[1px] items-center justify-center w-[20%] text-neutral-500 bg-red-0 overflow-hidden "
                // onClick={() =>  router.push('/dashboard')}
                href="/dashboard/anything" passHref
            >
                <HomeIcon size={22} strokeWidth={2} stroke="black"/>
                {/* <p className={`${currentRoute === '/dashboard' ? "text-[#15803d]" : "text-[#737373]"}`}>Home</p> */}
            </Link>
            <button 
                className="flex flex-col gap-[1px] items-center justify-center w-[20%] text-neutral-500 bg-red-0"
                onClick={() => router.push('/dashboard/search')}
            >
                <Search size={24} strokeWidth={2} stroke="black"/>
                {/* <p className=" ">Pesquisar</p> */}
            </button>
            <Link 
                className="flex flex-col gap-[1px] items-center justify-center w-[20%] text-neutral-500 bg-red-0"
                // onClick={() => {}}
                href="/dashboard/anything" passHref
            >
                <MedalIcon size={24} strokeWidth={2} stroke="black"/>
                {/* <p className=" ">Mentorias</p> */}
            </Link>
            <Link 
                className="flex flex-col gap-[1px] items-center justify-center w-[20%] text-neutral-500 bg-red-0"
                href="/dashboard/anything" passHref
            >
                <CalendarCheckIcon strokeWidth={2} stroke="black"/>
                {/* <p className=" ">Calendário</p> */}
            </Link>
            <Link 
                className="flex flex-col gap-[1px] items-center justify-center w-[20%] text-neutral-500 bg-red-0"
                // onClick={() => router.push('/dashboard/account')}
                href="/dashboard/anything" passHref
            >
                <User2Icon size={24} strokeWidth={2} stroke="black"/>
                {/* <p className=" ">Conta</p> */}
            </Link>
        </div>
    )
}
