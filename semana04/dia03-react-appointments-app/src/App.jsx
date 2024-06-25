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
  const [currentAppointment, setCurrentAppointment] = useState()

  const handleSaveAppointment = (appointment, isNew) => {
    if (isNew) {
      setAppointments([...appointments, appointment])
    } else {
      // TODO: Editar la cita con el id

      const { id } = appointment

      const appointmentFoundIndex = appointments.findIndex(
        appointment => appointment.id === id
      )

      console.log(appointmentFoundIndex, appointment)

      const newAppointments = [...appointments].splice(appointmentFoundIndex, 1, appointment)

      console.log(newAppointments)

      setAppointments(newAppointments)
    }
  }

  const handleRemove = (appointment) => {
    console.log(appointment.id)
    // TODO: terminar la lógica para eliminar una cita médica
    const { id } = appointment

    const newAppointments = appointments.filter(appointment => appointment.id !== id)

    setAppointments(newAppointments)

    // TODO: Avanzar la lógica para editar una cita médica
  }

  const handleEdit = (appointment) => {
    console.log(appointment)
    setCurrentAppointment(appointment)
  }

  return (
    <>
      <AppointmentsHeader title="Citas médicas para mascotas" />

      <main className="container m-auto flex gap-12 py-5">
        <AppointmentsForm
          onSaveAppointment={handleSaveAppointment}
          appointment={currentAppointment}
        />

        <AppointmentsList
          appointments={appointments}
          onRemove={handleRemove}
          onEdit={handleEdit}
        />
      </main>
    </>
  )
}

export default App