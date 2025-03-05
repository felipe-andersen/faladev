'use client'
import { Home, Star } from "lucide-react";
import { useState } from "react";


export default function SideBar() {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <>
            <section className=" h-full  bg-white shadow w-min fixed">
                <div className={`h-full flex-col  flex items-center ${isExpanded ? "w-min px-1" : "w-12"}`}>
                    <button onClick={() => setIsExpanded(!isExpanded)} className={`w-full h-12  min-w-12   flex items-center justify-center gap-2  ${isExpanded ? "px-0" : "px-0"}`}>
                        {/* <Star size={19}/> */}
                        <div>
                            <Home size={19}/>
                        </div>
                        <p className={`${isExpanded ? "flex" : "hidden"}`}>Mentorados</p>
                    </button>
                    
                    
                </div>
            </section>
        </>
    )
}