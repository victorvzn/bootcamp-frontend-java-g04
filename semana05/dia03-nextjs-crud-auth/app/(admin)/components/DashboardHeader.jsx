import Link from "next/link"

const DashboardHeader = () => {
  return (
    <header className="bg-gray-100 border-gray-200">
      <div className="max-w-screen-2xl flex flex-col items-center justify-between mx-auto p-4 md:flex-row">
        <Link href="/">
          <span className="self-center text-2xl font-semibold whitespace-nowrap">Dashboard</span>
        </Link>
      </div>

      <nav className="font-medium flex p-4 md:p-0 border border-gray-100 rounded-lg md:space-x-8 md:mt-0 md:border-0">
        <Link
          href="/"
          className="py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
        >
          Home
        </Link>
        <Link
          href="/products"
          className="py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
        >
          Products
        </Link>

        <Link
          href="/sign-in"
          className="py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
        >
          Sign in
        </Link>
      </nav>
    </header>
  )
}

export default DashboardHeader