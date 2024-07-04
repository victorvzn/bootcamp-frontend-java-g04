import AdminNavbar from "./components/AdminNavbar"

const AdminLayout = ({ children }) => {
  return (
    <div>
      <AdminNavbar />
      <nav>SOY EL MENU DEL ADMIN</nav>

      {children}
    </div>
  )
}

export default AdminLayout