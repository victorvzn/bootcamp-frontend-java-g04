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
    // TODO: Avanzar la lógica para editar una cita médica

    if (isNew) {
      setAppointments([...appointments, appointment])
    } else {
      // TODO: Editar la cita con el id

      const { id } = appointment

      const appointmentFoundIndex = appointments.findIndex(
        appointment => appointment.id === id
      )

      // console.log(appointmentFoundIndex, appointment)

      // Hacemos una copia del estado original
      
      // Primer método de copia: superficial (shallow copy)
      // const newAppointments = [...appointments]
      
      // Segundo método de copia: profundo (deep copy) -
      const newAppointments = structuredClone(appointments)

      newAppointments[appointmentFoundIndex] = appointment

      setAppointments(newAppointments)
    }
  }

  const handleRemove = (appointment) => {
    console.log(appointment.id)
    // TODO: terminar la lógica para eliminar una cita médica
    const { id } = appointment

    const newAppointments = appointments.filter(appointment => appointment.id !== id)

    setAppointments(newAppointments)

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