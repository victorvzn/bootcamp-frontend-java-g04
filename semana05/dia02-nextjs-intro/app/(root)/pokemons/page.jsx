import Link from "next/link"

const fetchPokemons = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon'

  const response = await fetch(url)

  return await response.json()
}

const PokemonsPage = async () => {
  const pokemons = await fetchPokemons()

  return (
    <>
      <h1>Pokemons Page</h1>

      <ol>
        {pokemons.results.map(pokemon => {
          return (
            <li key={pokemon.url}>
              <Link href={`/pokemons/${pokemon.name}`}  className="text-blue-400">
                {pokemon.name}
              </Link>
            </li>
          )
        })}
      </ol>
    </>
  )
}

export default PokemonsPage