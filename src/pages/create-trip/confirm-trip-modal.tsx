import { Mail, User, X } from "lucide-react";
import { FormEvent } from "react";

interface ConfirmTripModalProps {
  closeConfirmTrip: () => void
  createTrip: (event: FormEvent <HTMLFormElement>) => void
  setOwnerName: (name: string) => void
  setOwnerEmail: (email: string) => void

}

export function ConfirmTripModal({
  closeConfirmTrip,
  createTrip,
  setOwnerName,
  setOwnerEmail,
}: ConfirmTripModalProps) {
    return (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
          <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
            <div className='space-y-2'>
            <div className='flex items-center justify-between'>
              <h2 className='text-lg font-semibold'>Confirmar criação de viagem</h2>
              <button type='button' onClick={closeConfirmTrip}>
                <X className='size-5 text-zinc-400'/>
              </button>
            </div>
            <p className='text-sm text-zinc-400'>Para concluir a criação da viagem para <span className='font-semibold text-zinc-100'>Florianópolis, Brasil </span> 
             nas datas de <span className='font-semibold text-zinc-100'>16 a 27 de Agosto de 2024</span> preencha seus dados abaixo:</p>
            </div>

            <form onSubmit={createTrip} className='space-y-3'>
                <div className='p-2.5 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2' >
                      <User className='text-zinc-400 size-5'/>
                      <input onChange={event => setOwnerName(event.target.value)} type="text" name='name' placeholder="Seu nome completo" className="bg-transparent text-lg placeholder:zinc-400  outline-none flex-1"/>
                </div>

                <div className='p-2.5 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2' >
                      <Mail className='text-zinc-400 size-5'/>
                      <input onChange={event => setOwnerEmail(event.target.value)} type="email" name='email' placeholder="Seu melhor e-mail" className="bg-transparent text-lg placeholder:zinc-400  outline-none flex-1"/>
                </div>
                <button   type='submit' className=' w-full bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center justify-center gap-2 hover:bg-lime-400'>Confirmar criação de viagem</button>

            </form>

          </div>    
        </div>
    )
}