const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" className="flex items-center space-x-3">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">React Router</span>
    </a>
    <div className="w-full" id="navbar-default">
      <ul className="font-medium flex p-4">
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100">Login</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100">Register</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100">Pokedex</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100">Profile</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar