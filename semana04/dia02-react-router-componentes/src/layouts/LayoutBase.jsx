import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const LayoutBase = () => {
  return (
    <>
      <Navbar />

      <div className="container mx-auto px-4 mt-5"><Outlet /></div>
    </>
  )
}

export default LayoutBase