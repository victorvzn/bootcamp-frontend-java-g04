const AppointmentItem = ({ appointment, onRemove, onEdit }) => {
  return (
    <article
      className="border-2 border-sky-500 p-3 rounded-lg bg-sky-300"
    >
      <div>
        <h4 className="font-semibold text-xl">Mascota</h4>
        <div>
          <strong>Nombre:</strong> {appointment.petName}
        </div>
        <div>
          <strong>Edad:</strong> {appointment.petAge}
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-xl">Dueño</h4>
        <div>
          <strong>Nombre:</strong> {appointment.ownerName}
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-xl">Cita</h4>
        <div>
          <strong>Fecha:</strong> {appointment.appointmentDate}
        </div>
        <div>
          <strong>Hora:</strong> {appointment.appointmentTime}
        </div>
        <div>
          <strong>Síntomas:</strong> {appointment.symptoms}
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-3">
        <button
          className="p-2 bg-green-600 text-white rounded-lg cursor-pointer"
        >
          Confirmar Cita
        </button>
        <button
          className="p-2 bg-sky-600 text-white rounded-lg cursor-pointer"
          onClick={() => onEdit(appointment)}
        >
          Editar
        </button>
        <button
          className="p-2 bg-red-600 text-white rounded-lg cursor-pointer"
          onClick={() => onRemove(appointment)}
        >
          Eliminar
        </button>
      </div>
    </article>
  )
}

export default AppointmentItem