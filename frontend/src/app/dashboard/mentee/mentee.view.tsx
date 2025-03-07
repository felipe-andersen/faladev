import Header from "@/components/header.view";
import Main from "./main.view";
import MenteeBottomNavigation from "@/components/mentee-bottom-navigation/mentee-bottom-navigation.view";

export default function MenteeView() {
    return (
        <div className="w-screen h-screen flex flex-col ">
            <Header/>
            <Main/>
            <MenteeBottomNavigation/>
        </div>
    )
}