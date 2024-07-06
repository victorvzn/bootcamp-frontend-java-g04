import DashboardHeader from "../components/DashboardHeader"

const AdminLayout = ({ children }) => {
  return (
    <>
      <DashboardHeader />

      <main className="bg-slate-100 max-w-screen-2xl mx-auto p-4">
        {children}
      </main>
    </>
  )
}

export default AdminLayout