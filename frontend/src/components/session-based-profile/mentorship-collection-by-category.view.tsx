'use client'
import { Bold, Bolt, Check, ChevronLeft, ChevronRight, FireExtinguisher, Flame, Settings, Star, Timer } from "lucide-react";
import { useState } from "react";
import Link from 'next/link'
import { MentorshipProgramType } from "@/app/dashboard/mentee/mentee.type";

interface ISectionMostPopular {
    category: string
    mentorshipProgramList?: string
}

export function MentorshipCollectionByCategory({category}: ISectionMostPopular) {
    return (
        <>
            <section className="w-full  h-min bg-white flex flex-col py-4 mb-0 gap-2 ">
               
                <h2 className="text-lg font-bold">
                    {category}
                </h2>
                <div className="flex gap-5 overflow-x-scroll overflow-y-hidden h-min w-full">
                    <MentorshipProgramCard/>
                    <MentorshipProgramCard/>
                    <Link href="dashboard/anything" className=" flex flex-col gap-2 pb-3  rounded-2xl h-full  justify-center items-center underline whitespace-nowrap text-sm">
                        Ver mais
                    </Link>
                </div>
                {/* <div className="flex justify-between items-center">
                    <div className="w-8 h-8 rounded-full border bg-white flex items-center justify-center  ">
                        <ChevronLeft size={20}/>
                    </div>
                    <div className="w-8 h-8 rounded-full border bg-white flex items-center justify-center  ">
                        <ChevronRight size={20}/>
                    </div>
                </div> */}
                
            </section>
            {/* <MyCarousel/> */}
        </>
    )
}

function MentorshipProgramCard(props:MentorshipProgramType) {
    return (
        <Link href={"dashboard/anything"} role="button" onClick={() => {}} className="w-72 flex flex-col gap-2 pb-3 border rounded-2xl h-min min-w-72">
            <figure className="w-full aspect-video bg-red-100 rounded-lg overflow-hidden object-cover flex items-center justify-center">
                <img src="https://loja.marketingcomdigital.com.br/wp-content/uploads/2022/08/vk9gogr0.png"/>
            </figure>
            <span className="h-8 w-full flex gap-2 items-center justify-between px-2">
                <div 
                    className="flex items-center gap-1 w-3/6 overflow-hidden"
                >
                    <img 
                        src="https://brasil.angloamerican.com/~/media/Images/A/Anglo-American-Group-v5/Brazil/landing-signposts/carreiras/consciencia-negra-anglo-american-image.jpg?h=306&iar=0&w=303"
                        className="w-7 h-7 rounded-full "
                    />
                    <Link 
                        href={"dashboard/anything"}
                        className="font-semibold text-xs underline whitespace-nowrap truncate"
                    >Ricardo Albuquerque</Link>
                </div>
                <div className="flex gap-4 items-center text-xs">
                    <Link  href={"dashboard/anything"} className=" font-semibold whitespace-nowrap text-yellow-500">Level 1</Link>
                </div>
            </span>
            <div className="px-2">
                <div className="bg-red-0 mb-1">
                    <h3 className="font-bold  hover:underline text-sm truncate">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
                </div>
                <div className="bg-red-0 mb-3">
                    <p className="text-sm font-light truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum dolor officiis tempore.</p>
                </div>
                <div className=" flex flex-col gap-2 justify-center text-xs font-semibold bg-red-0">
                    {/* <Bolt size={18}/> */}
                    <div className="flex justify-between  text-xs">
                        <span className="flex gap-1 items-center">
                            <Timer size={14} className="-mt-[2px]"/> 
                            3-6 meses
                        </span>
                        <Link href={"dashboard/anything"} className="flex gap-1 items-center whitespace-nowrap">
                            <Star 
                                fill="black"
                                size={13}
                                className="-mt-[2px]"
                            />
                        4,9 (7)
                    </Link>
                    </div>
                    <div className="flex justify-between">
                        <span>
                            Português-BRA
                        </span>
                        <span className="flex gap-1">
                            <Check size={15}/>Oferece certificado
                        </span>
                    </div>
                    <div className="flex justify-between">
                        {
                            true ? 
                            <Link href={"dashboard/anything"} className="bg-red-700 flex text-xs gap-[2px] text-red-300 text-bold rounded px-[3px] flex items-center">
                                <Flame size={12}/>Hot
                            </Link>
                            :
                            <span className="text-xs text-violet-600 ">
                                Popular
                            </span>
                        }
                        <span className="text-xs text-green-700 underline">
                            A partir de <strong className="text-neutral-0">R$ 450,50</strong>
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

