import { useState } from "react"

const AppointmentsForm = () => {
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

  return (
    <section className="w-96 p-4 border border-red-300 ">
      <h2 className="text-2xl text-center mb-4">Nuevo paciente</h2>

      <form
        className="flex flex-col gap-4"
      >
        <input
          type="text"
          name="petName"
          placeholder="Nombre de la mascota"
          className="border p-3 shadow-md rounded-md w-full"
        />
        <input
          type="number"
          name="petAge"
          placeholder="Edad de la mascota"
          className="border p-3 shadow-md rounded-md w-full"
        />
        <input
          type="text"
          name="ownerName"
          placeholder="Dueño de la mascota"
          className="border p-3 shadow-md rounded-md w-full"
        />
        <input
          type="date"
          name="appointmentDate"
          placeholder="Fecha de la cita"
          className="border p-3 shadow-md rounded-md w-full"
        />
        <input
          type="time"
          name="appointmentTime"
          placeholder="Hora de la cita"
          className="border p-3 shadow-md rounded-md w-full"
        />
        <textarea
          name="symptoms"
          placeholder="Síntomas"
          rows="5"
          className="border p-3 shadow-md rounded-md w-full"
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