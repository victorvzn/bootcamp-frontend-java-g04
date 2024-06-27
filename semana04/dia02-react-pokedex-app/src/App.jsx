import { useEffect, useState } from "react"

const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon'

// TODO: Imprimir la imagen de cada pokemon en la etiqueta <img />

const App = () => {
  const [pokemons, setPokemons] = useState([])

  const fetchPokemons = async () => {
    const response = await fetch(POKEAPI_URL)
  
    const data = await response.json()
  
    setPokemons(data.results)
  }

  useEffect(() => {
    console.log('Solo me imprimo la primera vez')

    fetchPokemons()

    // fetch(POKEAPI_URL)
    //   .then(response => response.json())
    //   .then(pokemons => setPokemons(pokemons.results))
  }, [])

  return (
    <main className="container m-auto border border-red-700">
      <h1 className="text-3xl font-bold underline text-center">
        Poké Catalog
      </h1>

      {/* <pre>{JSON.stringify(pokemons, null, 2)}</pre> */}

      {pokemons.map(pokemon => {
        return (
          <article
            className="border rounded-lg bg-slate-100 m-2"
            key={pokemon.url}
          >
            <h3 className="font-bold text-center uppercase p-3">{pokemon.name}</h3>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
          </article>
        )
      })}
    </main>
  )
}

export default App