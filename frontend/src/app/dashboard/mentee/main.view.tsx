import { SectionMostPopular } from "@/components/session-based-profile/section-most-popular";
import SideBar from "@/components/side-bar.view";


export default function Main () {
    return (
        <main className=" w-full  bg-neutral-300 overflow-y-scroll overflow-x-hidden fixed  h-[calc(100%-64px)] top-16  flex">
            <SideBar/>
            <div className="flex flex-col w-full ml-12">
                <SectionMostPopular/>
                <SectionMostPopular/>
            </div>
         
        </main>
    )
}