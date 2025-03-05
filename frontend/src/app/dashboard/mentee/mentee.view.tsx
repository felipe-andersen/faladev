import Header from "@/components/header.view";
import Main from "./main.view";
import SideBar from "@/components/side-bar.view";

// www.exemple.com.br/dashboard/?acount=mentored

export default function MenteeView() {
    return (
        <div className="w-screen h-screen flex flex-col ">
            <Header/>
            <Main/>
        </div>
    )
}