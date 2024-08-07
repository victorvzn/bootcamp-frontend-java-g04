import Image from "next/image"
import Link from "next/link"

const getPokemon = async (name) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`

  const response = await fetch(url)

  return await response.json()
}

const PokemonDetailPage = async ({ params }) => {
  const { name } = params

  const pokemon = await getPokemon(name)

  return (
    <>
      <Link href='/pokemons' className="text-blue-400">Regresar a pokemons</Link>

      <div>PokemonDetailPage: {name}</div>

      <Image
        src={pokemon.sprites.other['official-artwork']['front_default']}
        width={200}
        height={200}
      />

      {/* <pre>{JSON.stringify(pokemon)}</pre> */}
    </>
  )
}

export default PokemonDetailPage