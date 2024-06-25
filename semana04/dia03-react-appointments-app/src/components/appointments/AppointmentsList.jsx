const AppointmentsList = ({ appointments }) => {
  return (
    <>
      <section className="w-1/2 p-4 bg-white rounded-lg" >
        <h2 className="text-2xl text-center mb-4">Listado de Citas</h2>
        
        <div className="flex flex-col gap-3 mb-4">
          <article className="border-2 border-sky-500 p-3 rounded-lg bg-sky-300">
            <div>
              <h4 className="font-semibold text-xl">Mascota</h4>
              <div>
                <strong>Nombre:</strong> -
              </div>
              <div>
                <strong>Edad:</strong> -
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-xl">Dueño</h4>
              <div>
                <strong>Nombre:</strong> -
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-xl">Cita</h4>
              <div>
                <strong>Fecha:</strong> -
              </div>
              <div>
                <strong>Hora:</strong> -
              </div>
              <div>
                <strong>Síntomas:</strong> -
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
              >
                Editar
              </button>
              <button
                className="p-2 bg-red-600 text-white rounded-lg cursor-pointer"
              >
                Eliminar
              </button>
            </div>
          </article>
        </div>

        <pre>{JSON.stringify(appointments, null, 2)}</pre>
      </section>
    </>
  )
}

export default AppointmentsList