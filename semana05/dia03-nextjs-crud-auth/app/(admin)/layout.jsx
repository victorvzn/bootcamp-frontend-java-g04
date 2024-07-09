import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

const AdminLayout = ({ children }) => {
  const { userId } = auth()

  if (!userId) {
    redirect('/sign-in')
  }

  return (
    <div className="bg-slate-100 h-screen">
      {children}
    </div>
  )
}

export default AdminLayout