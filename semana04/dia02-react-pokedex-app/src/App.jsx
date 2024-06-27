import { useEffect, useState } from "react"

const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon'

// TODO: Imprimir la imagen de cada pokemon en la etiqueta <img />

const App = () => {
  const [pokemons, setPokemons] = useState([])
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [limit] = useState(10)

  const fetchPokemons = async (page = 1, limit=10) => {

    // https://pokeapi.co/api/v2/pokemon?offset=10&limit=10
    const offset = (page - 1) * limit

    const response = await fetch(`${POKEAPI_URL}?offset=${offset}&limit=${limit}`)
  
    const data = await response.json()
  
    setPokemons(data.results)

    setTotal(data.count)
  }

  useEffect(() => {
    console.log('Solo me imprimo la primera vez')

    fetchPokemons(page)

    console.log(page)

    // fetch(POKEAPI_URL)
    //   .then(response => response.json())
    //   .then(pokemons => setPokemons(pokemons.results))
  }, [page])

  const handlePrev = () => {
    // TODO: Validar que la página sea mayor de cero
    if (page <= 1) {
      return
    }

    setPage(page - 1)
  }

  const lastPage = Math.ceil(total / limit)
  
  const handleNext = () => {
    // TODO: Validar que la página sea menor que la última página (131)
    if (page >= lastPage) {
      return
    }

    setPage(page + 1)
  }

  return (
    <main className="container m-auto border p-4">
      <h1 className="text-3xl font-bold underline text-center">
        Poké Catalog 1
      </h1>

      {/* <pre>{JSON.stringify(pokemons, null, 2)}</pre> */}

      <div className="grid grid-cols-2 md:grid-cols-5 gap-1">
        {pokemons.map(pokemon => {
          const id = pokemon.url.split('/').at(-2)
          const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

          return (
            <article
              className="border rounded-lg bg-slate-100 m-2 flex flex-col items-center"
              key={pokemon.url}
            >
              <h3 className="font-bold text-center uppercase p-3"> #{id} - {pokemon.name}</h3>
              <img src={pokemonImage} width="160px" height="160px" />
            </article>
          )
        })}
      </div>

      <div className="flex justify-center">
        <button className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
        onClick={() => handlePrev()}>
          Previous
        </button>
        <span className="flex justify-center items-center p-2">{page} of {lastPage}</span>
        <button className="flex items-center justify-center px-4 h-10 ms-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
        onClick={() => handleNext()}>
          Next
        </button>
      </div>
    </main>
  )
}

export default App