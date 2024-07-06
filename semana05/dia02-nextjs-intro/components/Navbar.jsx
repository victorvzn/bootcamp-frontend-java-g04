import Link from "next/link";

const Navbar = () => {
  return (
    <nav  className="flex gap-4 border border-b-orange-400 mb-4 p-4">
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/profile'>Profile</Link>

      <Link href='/products'>Products</Link>
      <Link href='/categories'>Categories</Link>
      <Link href='/pokemons'>Pokemons</Link>
    </nav>
  )
}

export default Navbar