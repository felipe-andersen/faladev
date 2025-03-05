'use client'
import { Settings, Star } from "lucide-react";
import { useState } from "react";


export function VerticalBar() {

    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <>
            <section className=" h-full  bg-white border-t  border-r border-neutral-300 shadow">
                <div className={`h-full flex-col  flex items-center ${isExpanded ? "w-full px-1" : "w-16"}`}>
                    <div className={`w-full h-16  min-w-12 flex items-center justify-center gap-2 hover:bg-zinc-300 ${isExpanded ? "px-0" : "px-0"}`}>
                        {/* <Star size={19}/> */}
                        <button onClick={() => setIsExpanded(!isExpanded)}><Star size={19}/></button>
                        <p className={`${isExpanded ? "flex" : "hidden"}`}>Mentorados</p>
                    </div>
                    <div className="w-full h-12  min-w-12 flex items-center justify-center gap-2">
                        {/* <Star size={19}/> */}
                        <button onClick={() => setIsExpanded(!isExpanded)}><Star size={19}/></button>
                        <p className={`${isExpanded ? "flex" : "hidden"}`}>Mentorados</p>
                    </div>
                    <div className="w-full h-12  min-w-12 flex items-center justify-center gap-2">
                        {/* <Star size={19}/> */}
                        <button onClick={() => setIsExpanded(!isExpanded)}><Star size={19}/></button>
                        <p className={`${isExpanded ? "flex" : "hidden"}`}>Mentorados</p>
                    </div>
                </div>
            </section>
        </>
    )
}