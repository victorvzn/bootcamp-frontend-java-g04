import Link from "next/link";

const AdminNavbar = () => {
  return (
    <nav  className="flex gap-4 border border-b-orange-400 mb-4 p-4">
      <Link href='/'>Home</Link>
      <Link href='/products'>Products</Link>
      <Link href='/categories'>Categories</Link>
    </nav>
  )
}

export default AdminNavbar