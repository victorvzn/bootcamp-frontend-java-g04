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

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Guardando ...')
  }

  const handleChange = (event) => {
    // console.log({ input: event.target })
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  return (
    <section className="w-96 p-4 border rounded-md">
      <h2 className="text-2xl text-center mb-4">Nuevo paciente</h2>

      <pre>{JSON.stringify(form, null, 2)}</pre>

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
        />
        <input
          type="number"
          name="petAge"
          placeholder="Edad de la mascota"
          className="border p-3 shadow-md rounded-md w-full"
          onChange={handleChange}
        />
        <input
          type="text"
          name="ownerName"
          placeholder="Dueño de la mascota"
          className="border p-3 shadow-md rounded-md w-full"
          onChange={handleChange}
        />
        <input
          type="date"
          name="appointmentDate"
          placeholder="Fecha de la cita"
          className="border p-3 shadow-md rounded-md w-full"
          onChange={handleChange}
        />
        <input
          type="time"
          name="appointmentTime"
          placeholder="Hora de la cita"
          className="border p-3 shadow-md rounded-md w-full"
          onChange={handleChange}
        />
        <textarea
          name="symptoms"
          placeholder="Síntomas"
          rows="5"
          className="border p-3 shadow-md rounded-md w-full"
          onChange={handleChange}
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