import { Star } from "lucide-react";
import { SectionMostPopular } from "./session-based-profile/section-most-popular";


export default function Main () {
    return (
        <main className="h-full w-full  bg-neutral-300 overflow-scroll ">
            <SectionMostPopular/>
            <SectionMostPopular/>
        </main>
    )
}