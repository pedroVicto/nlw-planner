import { CircleCheck, CircleDashed, UserCog } from "lucide-react";

export function Invites() {
    return (
        <div className="space-y-6">
                        <h2 className="text-xl font-semibold ">Convidados</h2>
                        <div className="space-y-5">
                            <div className="flex items-center justify-between gap-4">
                                <div className="space-y-1.5">
                                    <span className="block font-medium text-zinc-100 ">Jessica White</span>
                                    <span className="block  text-xs text-zinc-400 truncate hover:text-zinc-200">
                                        <a href="#"> jessica.white44@yahoo.com  </a>



                                    </span>

                                </div>
                                <CircleDashed className="text-zinc-400 size-5 shrink-0" />
                            </div>

                            <div className="flex items-center justify-between gap-4">
                                <div className="space-y-1.5">
                                    <span className="block font-medium text-zinc-100 ">Dr. Rita Pacocha</span>
                                    <span className="block  text-xs text-zinc-400 truncate hover:text-zinc-200">
                                        <a href="#"> lacy.stiedemann@gmail.com</a>
                                    </span>

                                </div>
                                <CircleCheck className="text-lime-300 size-5 shrink-0" />
                            </div>
                        </div>
                        <button className='w-full bg-zinc-800 text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center justify-center gap-2 hover:bg-zinc-700'><UserCog className='size-5' />Gerenciar Contatos</button>
        </div>
    )
}