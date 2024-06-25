import { useState } from "react"

import AppointmentsForm from "./components/appointments/AppointmentsForm"
import AppointmentsList from "./components/appointments/AppointmentsList"

const App = () => {
  const INITIAL_APPOINTMENTS = [
    {
      id: '1',
      petName: 'Hermosa',
      petAge: '2',
      ownerName: 'Victor',
      appointmentDate: '',
      appointmentTime: '',
      symptoms: 'Duerme mucho 😒'
    }
  ]

  const [appointments, setAppointments] = useState(INITIAL_APPOINTMENTS)

  return (
    <>
      <AppointmentsForm />

      <AppointmentsList />
    </>
  )
}

export default App