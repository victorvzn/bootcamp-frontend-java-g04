import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const LayoutBase = () => {
  return (
    <>
      <Navbar />

      <div className="container mx-auto p-4"><Outlet /></div>
    </>
  )
}

export default LayoutBase