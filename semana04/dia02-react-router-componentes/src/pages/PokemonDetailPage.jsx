import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export const getPokemonById = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`

  const response = await fetch(url)

  return await response.json()
}

const PokemonDetailPage = () => {
  const [pokemon, setPokemon] = useState(null)
  
  const params = useParams()

  useEffect(() => {
    getPokemonById(params.id)
      .then(data => setPokemon(data))
      // .then(setPokemon)
      
  }, [params])

  return (
    <>
      <Link to="/" className="text-green-500 font-bold">Regresar al home</Link>

      <div>PokemonDetailPage {params?.id}</div>

      <h3 className="text-4xl uppercase">{pokemon?.name}</h3>

      <img src={pokemon?.sprites?.other['official-artwork']?.front_default} />

      
      <div className="capitalize">Types: {pokemon?.types.map(type => type.type.name).join(', ')}</div>
      

      {/* <pre>{JSON.stringify(pokemon, null, 2)}</pre> */}
    </>

  )
}

export default PokemonDetailPage