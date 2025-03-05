import { Check } from "lucide-react";


export function Profile() {
    return(
        <div className="profile rounded-lg border bg-white w-full h-full flex flex-col ">
            <div className=" rounded-lg  p-8 w-full h-full flex flex-col ">
                <div className="flex gap-3 ">
                    <div className=" w-32 aspect-square overflow-hidden rounded-lg">
                        <img src="https://picsum.photos/200/300" alt="profile picture"/>
                    </div>
                    <span className="z-10 h-5 w-5 border-4 border-white rounded-full bg-green-300 mt-20 -ml-5"></span>
                    <div className="flex flex-col">
                        <div className="flex flex-col gap-3">
                            <span className="flex gap-1">Ricardo ALbuquerque <Check/></span>
                            <div className="flex gap-6">
                                <a>Mentor</a>
                                <a>São Paulo, SP</a>
                                <a>ricardoalbuquerque@faladev.com</a>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className="flex flex-col p-3 border rounded-lg w-36">
                                <span>R$6,840</span>
                                <span>Lucros totais</span>
                            </div>
                            <div className="flex flex-col p-3 border rounded-lg w-36">
                                <span>179</span>
                                <span>Mentorias</span>
                            </div>
                            <div className="flex flex-col p-3 border rounded-lg w-36">
                                <span>38</span>
                                <span>Indicações</span>
                            </div>
                            

                        </div>
                    </div>
                    <div></div>
                </div>
                <line></line>
                <div className="flex h-16 w-full items-center border-y mt-16">
                    <a className="h-full px-5 flex items-center">Visão geral</a>
                    <a className="h-full px-5 flex items-center">Segurança</a>
                    <a className="h-full px-5 flex items-center">Faturamento</a>
                    <a className="h-full px-5 flex items-center">Extrato</a>
                    <a className="h-full px-5 flex items-center">Histórico</a>
                    <a className="h-full px-5 flex items-center">Projetos</a>

                </div>
            </div>
            <div>
                <div>mentores parceiros</div>
            </div>
        </div>
    )
}
   