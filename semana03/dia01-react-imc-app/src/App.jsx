import { useState } from "react"

const formatNumber = (number) => {
  const localeDefault = 'en-US'

  const options = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }

  return new Intl.NumberFormat(localeDefault, options).format(number)
}

export default function App() {
  // const weight = 12
  // useState nos ayuda a generar un estado para manipular dentro de nuestro componente

  const [weight, setWeight] = useState(0) // useState Devuelve una arreglo con una variable de lectura y una función de escritura (setter)
  const [height, setHeight] = useState(0)

  const handleWeight = (event) => {
    console.log(event.target.value)
    const value = event.target.value

    setWeight(value)
  }

  const handleHeight = (event) => {
    const value = event.target.value

    setHeight(value)
  }

  const imc = formatNumber(weight / ((height / 100) ** 2))

  // * Baja: < 18.5
  // * Normal: < 18.5 - 24.9
  // * Sobrepeso: < 25 - 29.9 
  // * Obeso: > 30

  const bodyMassIndexResult = () => {
    let result = ''

    if (imc < 18.5) {
      result = 'Baja'
    } else if (imc >= 18.5 && imc <= 24.9) {
      result = 'Normal'
    } else if (imc >= 25 && imc <= 29.9) {
      result = 'Sobrepeso'
    } else if (imc > 30) {
      result = 'Obeso'
    } else {
      result = 'Datos incorrectos'
    }

    return result
  }

  return (
    <section className="w-[400px] mx-auto bg-slate-200 p-4">
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
        <p>Height: {height} cm</p>
        <input
          type="range"
          min="50"
          max="200"
          onChange={handleHeight}
        />
      </div>

      <p className="font-bold ">Tu IMC es {imc}</p>

      <p className="font-bold text-2xl">Estado de IMC: {bodyMassIndexResult()}</p>
    </section>
  )
}
