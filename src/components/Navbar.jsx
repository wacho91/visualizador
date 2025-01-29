import { Menu, X } from "lucide-react"
import { useState } from "react"
import Logo from "../assets/logo.png"
import { navItems } from "../constants"

const Navbar = () => {

    const [ mobileDrawerOpen, setMobileDrawerOpen ] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }

  return (
    <nav>
        
    </nav>
  )
}

export default Navbar
