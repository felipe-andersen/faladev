import { Star } from "lucide-react";
import { SectionMostPopular } from "../mentee/session-based-profile/section-most-popular";
import { MentorData } from "./forms/data-mentor";
import { Profile } from "./profile";


export default function Main () {
    return (
        <main className="h-full w-full flex flex-col  px-20 bg-neutral-300 overflow-scroll ">
           <Profile/>
        </main>
    )
}