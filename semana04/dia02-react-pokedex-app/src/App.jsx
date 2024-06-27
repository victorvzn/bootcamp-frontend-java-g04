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
    <main className="container m-auto border p-4">
      <h1 className="text-3xl font-bold underline text-center">
        Poké Catalog
      </h1>

      {/* <pre>{JSON.stringify(pokemons, null, 2)}</pre> */}

      <div className="grid grid-cols-2 md:grid-cols-5 gap-1">
        {pokemons.map(pokemon => {
          const id = pokemon.url.split('/').at(-2)
          const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

          return (
            <article
              className="border rounded-lg bg-slate-100 m-2"
              key={pokemon.url}
            >
              <h3 className="font-bold text-center uppercase p-3">{pokemon.name}</h3>
              <img src={pokemonImage} className="w-40" />
            </article>
          )
        })}
      </div>

      <div className="flex justify-center">
        <a href="#" className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          Previous
        </a>

        <a href="#" className="flex items-center justify-center px-4 h-10 ms-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          Next
        </a>
      </div>
    </main>
  )
}

export default App