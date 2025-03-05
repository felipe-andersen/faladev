import Header from "@/components/header.view";
import SideBar from "@/components/side-bar.view";
import Main from "./main.view";

// www.exemple.com.br/dashboard/?acount=mentored

export default function MentorView() {
    return (
        <div className="w-screen h-screen flex flex-col  ">
            <Header/>
            <div className="fixed flex  h-[calc(100%-64px)] top-16  w-full overflow-x-hidden">
                <SideBar/>
                <Main/>
            </div>
        </div>
    )
}