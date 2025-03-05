import Image from "next/image";
import { Bell, ChevronDownIcon, MessageCircle, Search } from 'lucide-react';

export default function Header () {
    return (
        <header className="h-16 fixed w-full shadow bg-white flex items-center justify-between px-12 z-30">
            <Image src="/static/imgs/faladev.jpg" 
                alt="FalaDev Logo" 
                height="50" width="200" 
                className="-ml-12 scale-50" 
            />
            <div className="flex gap-6">
                <a className="flex gap-1 items-center whitespace-nowrap">
                    Seus programas de mentoria     
                    <ChevronDownIcon size={18}/>
                </a>
                <a className="flex gap-1 items-center whitespace-nowrap">
                    Marketplace
                    <ChevronDownIcon size={18}/>
                </a>
                <a className="flex gap-1 items-center whitespace-nowrap">
                    Ajuda
                    <ChevronDownIcon size={18}/>
                </a>
            </div>
            <div className="flex gap-5 items-center">
                <div className="flex gap-2  border rounded-full pl-1 py-1 pr-4 h-10 items-center mr-24">
                    <div className="h-full aspect-square rounded-full bg-zinc-100 flex items-center justify-center">
                        <Search 
                            strokeWidth={1} 
                            size={20}/>
                    </div>
                    <input 
                        type="text"
                        className="w-full h-full outline-none bg-transparent"
                        placeholder="Pesquise" >
                    </input>
                </div>
                <div>
                    <Bell strokeWidth={1}/> 
                </div>
                <div>
                    <MessageCircle strokeWidth={1}/>
                </div>
            </div>
        </header>
    )
}