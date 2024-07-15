
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InviteGuestsModal } from './invite-guests-modal'
import { ConfirmTripModal } from './confirm-trip-modal'
import { DestinationDateInput } from './steps/destination-and-date'
import { InviteGuests } from './steps/invite-guests'
import { DateRange } from 'react-day-picker'


export function CreateTripPage() {
  const navigate = useNavigate()
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
  const [isConfirmTripOpen, setIsConfirmTripOpen] = useState(false)


  const [destination, setDestination] = useState('')
  const [ownerName, setOwnerName] = useState('')
  const [ownerEmail, setOwnerEmail] = useState('')
  const [eventStartEndDates, setEventStartEndDates] = useState<DateRange | undefined>()

  
  const [emailsToInvite, setEmailsToInvite] = useState([
    'exemplo@gmail.com'
  ])

  function openGuestsInput() {
    setIsGuestsInputOpen(true)
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false)
  }

  function openGuestsModal() {
    setIsGuestsModalOpen(true)
  }

  function colseGuestsModal() {
    setIsGuestsModalOpen(false)
  }

  function openConfirmTrip() {
    setIsConfirmTripOpen(true)
  }

  function closeConfirmTrip() {
    setIsConfirmTripOpen(false)
  }

  function addEmailToInvite(event: FormEvent <HTMLFormElement>) {
      event.preventDefault()

      const data = new FormData(event.currentTarget)
      const email = data.get('email')?.toString()
      
      if(!email) {
        return
      }
      if(emailsToInvite.includes(email)) {
        return
      }

      setEmailsToInvite([
        ...emailsToInvite,
        email
      ])
      event.currentTarget.reset()
  }

  function removeEmailInvite(emailToRemove: string) {
    const newEmailList = emailsToInvite.filter(email => email !== emailToRemove)
    setEmailsToInvite(newEmailList)
  }

  function createTrip(event: FormEvent <HTMLFormElement>) {
    event.preventDefault()


    navigate(`/trips/123`)


  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        
        <div className='flex flex-col items-center gap-3'>
          <img src="/logo.svg" alt="" className='flex justify-center'/>
          <p className="text-zinc-300 text-lg"> Convide seus amigos e planeje sua próxima viagem! </p>
        </div>

        <div className='space-y-4'>
              <DestinationDateInput 
                isGuestsInputOpen={isGuestsInputOpen}
                closeGuestsInput={closeGuestsInput}
                openGuestsInput={openGuestsInput}
                setDestination={setDestination}
                setEventStartEndDates={setEventStartEndDates}
                eventStartEndDates={eventStartEndDates}
              />

          {isGuestsInputOpen && (
            <InviteGuests 
              emailsToInvite={emailsToInvite}
              openGuestsModal={openGuestsModal}
              openConfirmTrip={openConfirmTrip}
            
            />
          ) }
        </div>

        <p className="text-sm text-zinc-500 ">Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
          com nossos <a href="#" className="text-zinc-300 underline"> termos de uso </a> e <a href="" className="text-zinc-300 underline"> políticas de privacidade </a>. </p>
      </div>

      {isGuestsModalOpen && (
        <InviteGuestsModal 
            emailsToInvite={emailsToInvite}
            addEmailToInvite={addEmailToInvite}
            colseGuestsModal={colseGuestsModal}
            removeEmailInvite={removeEmailInvite}

        />
      )}

        {isConfirmTripOpen && (
          <ConfirmTripModal 
            closeConfirmTrip={closeConfirmTrip}
            createTrip={createTrip}
            setOwnerName={setOwnerName}
            setOwnerEmail={setOwnerEmail}
          />
        )}

    </div>
  )
}


