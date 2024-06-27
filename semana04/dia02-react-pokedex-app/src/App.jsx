import { useEffect, useState } from "react"

const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon'

const App = () => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log('Solo me imprimo la primera vez')

    fetch(POKEAPI_URL)
      .then(response => response.json())
      .then(pokemons => console.log(pokemons))
  }, [])

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
    </>
  )
}

export default App