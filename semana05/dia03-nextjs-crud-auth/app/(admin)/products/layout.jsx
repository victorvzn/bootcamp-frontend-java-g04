import DashboardHeader from "../components/DashboardHeader"

const AdminLayout = ({ children }) => {
  return (
    <>
      <DashboardHeader />

      <main className="bg-slate-100">
        {children}
      </main>
    </>
  )
}

export default AdminLayout