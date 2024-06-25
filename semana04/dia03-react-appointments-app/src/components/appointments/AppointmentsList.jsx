import AppointmentItem from './AppointmentItem'

const AppointmentsList = ({ appointments, onRemove, onEdit }) => {
  return (
    <>
      <section className="w-1/2 p-4 bg-white rounded-lg" >
        <h2 className="text-2xl text-center mb-4">Listado de Citas</h2>
        
        <div className="flex flex-col gap-3 mb-4">
          {appointments.map(appointment => {
            return (
              <AppointmentItem
                key={appointment.id}
                appointment={appointment}
                onRemove={onRemove}
                onEdit={onEdit}
              />
            )
          })}
          
        </div>

        <pre>{JSON.stringify(appointments, null, 2)}</pre>
      </section>
    </>
  )
}

export default AppointmentsList