import Navbar from "../components/Navbar"
import Background from "../components/Background"
import Footer from "../components/Footer"
import { Outlet } from "react-router"

const RootLayout = () => {
  return (
    <div>
      <Background />
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default RootLayout
