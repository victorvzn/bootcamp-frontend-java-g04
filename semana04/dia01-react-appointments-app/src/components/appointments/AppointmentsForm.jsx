import { useEffect, useState } from "react"

const AppointmentsForm = ({ onSaveAppointment, appointment }) => {
  const INITIAL_FORM_STATE  = {
    id: '',
    petName: '',
    petAge: '',
    ownerName: '',
    appointmentDate: '',
    appointmentTime: '',
    symptoms: ''
  }
  
  const [form, setForm] = useState(INITIAL_FORM_STATE)

  useEffect(() => {
    if (appointment?.id) {
      setForm(appointment)
    }
  }, [appointment])
  
  const handleSubmit = (event) => {
    event.preventDefault();

    if (appointment?.id) {
      // Aplico la lógica para la edición de la cita

      onSaveAppointment(form, false)
    } else {
      // Aplico la lógica para una nueva cita
      const newAppointment = {
        ...form,
        id: crypto.randomUUID()
      }
  
      console.log('Guardando ...', newAppointment)
  
      onSaveAppointment(newAppointment, true)
    }

    setForm(INITIAL_FORM_STATE)
  }

  const handleChange = (event) => {
    // console.log({ input: event.target })
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  return (
    <section className="w-96 p-4 border rounded-md">
      <h2 className="text-2xl text-center mb-4">Nuevo paciente</h2>

      {/* <pre>{JSON.stringify(form, null, 2)}</pre> */}

      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="petName"
          placeholder="Nombre de la mascota"
          className="border p-3 shadow-md rounded-md w-full"
          onChange={handleChange}
          value={form.petName}
        />
        <input
          type="number"
          name="petAge"
          placeholder="Edad de la mascota"
          className="border p-3 shadow-md rounded-md w-full"
          onChange={handleChange}
          value={form.petAge}
        />
        <input
          type="text"
          name="ownerName"
          placeholder="Dueño de la mascota"
          className="border p-3 shadow-md rounded-md w-full"
          onChange={handleChange}
          value={form.ownerName}
        />
        <input
          type="date"
          name="appointmentDate"
          placeholder="Fecha de la cita"
          className="border p-3 shadow-md rounded-md w-full"
          onChange={handleChange}
          value={form.appointmentDate}
        />
        <input
          type="time"
          name="appointmentTime"
          placeholder="Hora de la cita"
          className="border p-3 shadow-md rounded-md w-full"
          onChange={handleChange}
          value={form.appointmentTime}
        />
        <textarea
          name="symptoms"
          placeholder="Síntomas"
          rows="5"
          className="border p-3 shadow-md rounded-md w-full"
          onChange={handleChange}
          value={form.symptoms}
        >
        </textarea>
        <input
          type="submit"
          className="p-3 bg-green-600 text-white rounded-md cursor-pointer hover:bg-green-800 duration-300"
          value="Guardar cita"
        />
      </form>
    </section>
  )
}

export default AppointmentsForm