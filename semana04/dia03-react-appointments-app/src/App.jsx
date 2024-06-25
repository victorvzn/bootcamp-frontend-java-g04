import { useState } from "react"

import AppointmentsHeader from "./components/appointments/AppointmentsHeader"
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

  const handleSaveAppointment = (appointment) => {
    setAppointments([...appointments, appointment])
  }

  const handleRemove = (appointment) => {
    console.log(appointment.id)
    // TODO: terminar la lógica para eliminar una cita médica
    const { id } = appointment

    const newAppointments = appointments.filter(appointment => appointment.id !== id)

    setAppointments(newAppointments)

    // TODO: Avanzar la lógica para editar una cita médica
  }

  return (
    <>
      <AppointmentsHeader title="Citas médicas para mascotas" />

      <main className="container m-auto flex gap-12 py-5">
        <AppointmentsForm
          onSaveAppointment={handleSaveAppointment}
        />

        <AppointmentsList
          appointments={appointments}
          onRemove={handleRemove}
        />
      </main>
    </>
  )
}

export default App