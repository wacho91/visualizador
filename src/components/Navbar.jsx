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
        <div>
            <div>
                <div>
                    <img src={Logo} alt="logo" />
                    <span>VirtualR</span>
                </div>
                <ul>
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div>
                    <a href="#">
                        Sign In
                    </a>

                    <a href="#">
                        Create an account
                    </a>
                </div>
                <div>
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                <div>
                    <ul>
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <a href="#">
                            Sign In
                        </a>
                        <a href="#">
                            Create an account
                        </a>
                    </div>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar
