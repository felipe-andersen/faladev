'use client'
import { Bold, Bolt, Check, FireExtinguisher, Flame, Settings, Star, Timer } from "lucide-react";
import { useState } from "react";


export function SectionMostPopular() {
    return (
        <>
            <section className="w-full h-hul bg-white flex flex-col p-10 gap-5">
                <h2 className="text-2xl font-bold">
                    Baseado em seu perfil
                </h2>
                <div className="flex gap-5">
                    <div className="w-72 flex flex-col gap-2">
                        <figure className="w-full aspect-video bg-red-100 rounded-lg overflow-hidden object-cover flex items-center justify-center">
                            <img src="https://loja.marketingcomdigital.com.br/wp-content/uploads/2022/08/vk9gogr0.png"/>
                        </figure>
                        <span className="h-8 w-full flex gap-2 items-center justify-between ">
                            <div className="flex items-center gap-1">
                                <img 
                                    src="https://brasil.angloamerican.com/~/media/Images/A/Anglo-American-Group-v5/Brazil/landing-signposts/carreiras/consciencia-negra-anglo-american-image.jpg?h=306&iar=0&w=303"
                                    className="w-7 h-7 rounded-full "
                                />
                                <p className=" font-semibold text-xs underline">Ricardo Albuquerque</p>
                            </div>
                            <div className="flex gap-4 items-center text-xs">
                                
                                <p className=" font-semibold">Level 1</p>
                                <span className="flex gap-1 items-center">
                                    <Star 
                                        fill="black"
                                        size={13}
                                        className="-mt-[2px]"
                                    />
                                    4,9 (7)
                                </span>
                            </div>
                        </span>
                        <h3 className="font-bold  hover:underline text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum dolor officiis tempore.</p>
                        <div className=" flex flex-col gap-2 justify-center text-xs font-semibold">
                            {/* <Bolt size={18}/> */}
                            <div className="flex justify-between  text-xs">
                                <span className="flex gap-1 items-center">
                                    <Timer size={14} className="-mt-[2px]"/> 
                                    3-6 meses
                                </span>
                                <span>
                                    Em grupo
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span>
                                    Presencial - Online
                                </span>
                                <span className="flex gap-1">
                                    <Check size={15}/>Oferece certificado
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <strong className="flex gap-1">
                                    <Flame size={15}/>Top 10
                                </strong>
                                <span className="text-xs">
                                    A partir de <strong className="">R$ 450,50</strong>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="w-72 flex flex-col gap-2">
                        <figure className="w-full aspect-video bg-red-100 rounded-lg overflow-hidden object-cover flex items-center justify-center">
                            <img src="https://loja.marketingcomdigital.com.br/wp-content/uploads/2022/08/vk9gogr0.png"/>
                        </figure>
                        <span className="h-8 w-full flex gap-2 items-center justify-between ">
                            <div className="flex items-center gap-1">
                                <img 
                                    src="https://brasil.angloamerican.com/~/media/Images/A/Anglo-American-Group-v5/Brazil/landing-signposts/carreiras/consciencia-negra-anglo-american-image.jpg?h=306&iar=0&w=303"
                                    className="w-7 h-7 rounded-full "
                                />
                                <p className=" font-semibold text-xs underline">Ricardo Albuquerque</p>
                            </div>
                            <div className="flex gap-4 items-center text-xs">
                                
                                <p className=" font-semibold">Level 1</p>
                                <span className="flex gap-1 items-center">
                                    <Star 
                                        fill="black"
                                        size={13}
                                        className="-mt-[2px]"
                                    />
                                    4,9 (7)
                                </span>
                            </div>
                        </span>
                        <h3 className="font-bold  hover:underline text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum dolor officiis tempore.</p>
                        <div className=" flex flex-col gap-2 justify-center text-xs font-semibold">
                            {/* <Bolt size={18}/> */}
                            <div className="flex justify-between  text-xs">
                                <span className="flex gap-1 items-center">
                                    <Timer size={14} className="-mt-[2px]"/> 
                                    3-6 meses
                                </span>
                                <span>
                                    Em grupo
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span>
                                    Presencial - Online
                                </span>
                                <span className="flex gap-1">
                                    <Check size={15}/>Oferece certificado
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <strong className="flex gap-1">
                                    <Flame size={15}/>Top 10
                                </strong>
                                <span className="text-xs">
                                    A partir de <strong className="">R$ 450,50</strong>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}