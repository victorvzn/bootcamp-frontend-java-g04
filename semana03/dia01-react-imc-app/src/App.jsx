import { useState } from "react"

export default function App() {
  // const weight = 12
  // useState nos ayuda a generar un estado para manipular dentro de nuestro componente

  const [weight, setWeight] = useState(0) // useState Devuelve una arreglo con una variable de lectura y una función de escritura (setter)

  const handleWeight = (event) => {
    console.log(event.target.value)
    const value = event.target.value

    setWeight(value)
  }

  return (
    <section className="w-[300px] mx-auto bg-slate-200 p-4">
      <h1 className="text-3xl text-red-600 font-bold text-center">IMC Calculator</h1>

      <div className="pt-4">
        <p>Weight: {weight} kg</p>
        <input
          type="range"
          min="50"
          max="200"
          onChange={handleWeight}
        />
      </div>

      <div>
        <p>Height: 0 cm</p>
        <input
          type="range"
          min="50"
          max="200"
        />
      </div>

      <p className="font-bold ">Tu IMC es 0.0</p>

      <p className="font-bold text-2xl">Estado de IMC: ???</p>
    </section>
  )
}
