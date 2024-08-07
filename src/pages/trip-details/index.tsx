import { Calendar, CircleCheck, MapPin, Plus, Settings2, } from "lucide-react";
import { useState } from "react";
import { CreateActivityModal } from "./create-activity-modal";
import { ImportantLinks } from "./important-links";
import { Invites } from "./invites";
import { Button } from "../../components/button";

export function TripDetailsPage() {
    const [isCreateActivityModalopen, setIsCreateActivityModalopen] = useState(false)

    function OpenCreateActivityModal() {
        setIsCreateActivityModalopen(true)
    }

    function CloseCreateActivityModal() {
        setIsCreateActivityModalopen(false)
    }

    return (
        <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
            <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between ">
                <div className="flex items-center gap-2">
                    <MapPin className="size-5 text-zinc-400" />
                    <span className="text-lg text-zinc-100"> Florianópolis, Brasil </span>
                </div>
                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2">
                        <Calendar className="size-5 text-zinc-400" />
                        <span className="text-lg text-zinc-100">17 a 23 de Agosto</span>
                    </div>

                    <div className='w-px h-6 bg-zinc-800' />

                    <Button variant="secondary">
                        Alterar local/data
                        <Settings2 className='size-5' />
                    </Button>
                </div>
            </div>

            <main className="flex gap-16 px-4">
                <div className="flex-1 space-y-6">
                    <div className="flex  items-center justify-between">
                        <h1 className="text-3xl font-semibold ">Atividades</h1>
                        <button onClick={OpenCreateActivityModal} className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'><Plus className='size-5' />Cadastrar Atividade</button>
                    </div>


                    <div className="space-y-8">
                        <div className="space-y-2.5">
                            <div>
                                <span className="text-xl text-zinc-300 font-semibold">Dia 17</span>
                                <span className="text-xs text-zinc-500 px-2">Sábado</span>
                            </div>
                            <p className="text-zinc-500">Nenhuma atividade cadastrada nessa data.</p>
                        </div>

                        <div className="space-y-2.5">
                            <div className="flex gap-2 items-baseline">
                                <span className="text-xl text-zinc-300 font-semibold">Dia 18</span>
                                <span className="text-xs text-zinc-500 px-2">Domingo</span>
                            </div>
                            <div className="space-y-2.5">
                                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                                    <CircleCheck className="size-5 text-lime-300" />
                                    <span className="text-zinc-100">Academia em grupo</span>
                                    <span className="text-zinc-400 text-sm ml-auto">08:00h</span>
                                </div>
                            </div>

                            <div className="space-y-2.5">
                                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                                    <CircleCheck className="size-5 text-lime-300" />
                                    <span className="text-zinc-100">Corrida de kart</span>
                                    <span className="text-zinc-400 text-sm ml-auto">14:00h</span>
                                </div>
                            </div>



                        </div>
                    </div>

                </div>

                <div className="w-80 space-y-6">
                    <ImportantLinks />

                <div className='w-full h-px bg-zinc-800' />
                    <Invites />


                    
                </div>
            </main>

            {isCreateActivityModalopen && (
                <CreateActivityModal 
                    CloseCreateActivityModal={CloseCreateActivityModal}
                />
            )}

        </div>



    )
}