'use client'
import { Bold, Bolt, Check, Settings, Star, Timer } from "lucide-react";
import { useState } from "react";


export function SectionMostPopular() {
    return (
        <>
            <section className="w-full h-hul bg-white flex flex-col p-10 gap-8">
                <h2 className="text-2xl font-bold">
                    Baseado em seu perfil
                </h2>
                <div className="flex gap-4">
                    <div className="w-72 flex flex-col gap-2">
                        <div className="w-full aspect-video bg-red-100 rounded-lg overflow-hidden object-cover flex items-center justify-center">
                            <img src="https://loja.marketingcomdigital.com.br/wp-content/uploads/2022/08/vk9gogr0.png"/>
                        </div>
                        <div className="h-8 w-full flex gap-2 items-center justify-between px-2">
                            <div className="flex items-center gap-2">
                                <img 
                                    src="https://brasil.angloamerican.com/~/media/Images/A/Anglo-American-Group-v5/Brazil/landing-signposts/carreiras/consciencia-negra-anglo-american-image.jpg?h=306&iar=0&w=303"
                                    className="w-7 h-7 rounded-full "
                                />
                                <p className="text-sm font-semibold whitespace-nowrap">Ricardo Albuquerque</p>
                            </div>
                            <p className="text-xs font-semibold">Level 1</p>
                        </div>
                        <h3 className="font-semibold px-2 hover:underline">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum dolor officiis tempore.</p> */}
                        <div className="flex justify-between px-2 text-sm">
                            <span className="flex gap-1 items-center">
                                <Timer size={18}/> 
                                3-6 meses
                            </span>
                            <div className="flex gap-2 items-center">
                                <Star 
                                    fill="black"
                                    size={18}
                                />
                                4,9 (7)
                            </div>
                        </div>
                        <span className="px-2 flex flex-col gap-1 justify-center text-sm">
                            {/* <Bolt size={18}/> */}
                            <span className="flex gap-1">
                                <Check size={18}/>Oferece certificado
                            </span>
                            <span>
                                Individual
                            </span>
                            <span>
                                presencial e online
                            </span>
                            <span>
                                A partir de R$ 450,50
                            </span>
                        </span>
                    </div>
                    <div className="w-72 flex flex-col gap-2">
                        <div className="w-full aspect-video bg-red-100 rounded-lg overflow-hidden object-cover flex items-center justify-center">
                            <img src="https://loja.marketingcomdigital.com.br/wp-content/uploads/2022/08/vk9gogr0.png"/>
                        </div>
                        <div className="h-8 w-full flex gap-2 items-center justify-between pr-2">
                            <div className="flex items-center gap-2">
                                <img 
                                    src="https://brasil.angloamerican.com/~/media/Images/A/Anglo-American-Group-v5/Brazil/landing-signposts/carreiras/consciencia-negra-anglo-american-image.jpg?h=306&iar=0&w=303"
                                    className="w-7 h-7 rounded-full "
                                />
                                <p className="text-sm font-semibold whitespace-nowrap">Ricardo Albuquerque</p>
                            </div>
                            <p className="text-xs font-semibold">Level 1</p>
                        </div>
                        <h3 className="font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum dolor officiis tempore.</p>
                        <div>
                            <div className="flex gap-2 items-center">
                                <Star 
                                    fill="black"
                                    size={18}
                                />
                                4,9 (7)
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}