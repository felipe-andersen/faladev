import Header from "@/components/mentee/header";
import Main from "@/components/mentee/main";
import { VerticalBar } from "@/components/mentee/vertical-bar";

// www.exemple.com.br/dashboard/?acount=mentored

export default function MenteeView() {
    return (
        <div className="w-screem h-screem flex flex-col ">
            <Header/>
            <div className="fixed flex h-[calc(100%-64px)] top-16  w-full ">
                <VerticalBar/>
                <Main/>
            </div>
        </div>
    )
}