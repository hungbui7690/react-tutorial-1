import { createContext, useState } from 'react'
import NavLinks from './NavLinks'

export const NavbarContext = createContext() // 1a. create context -> contains "Consumer" + "Provider"

const Navbar = () => {
  const [user, setUser] = useState({ name: 'bob' })

  const logout = () => {
    setUser(null)
  }

  return (
    // 1b. wrap -> passing object -> go to UserContainer.jsx
    // <NavbarContext.Provider value='hello'>
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className='navbar'>
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  )
}
export default Navbar
