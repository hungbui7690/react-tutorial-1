import { createContext, useContext, useState } from 'react'
import NavLinks from './NavLinks'

export const NavbarContext = createContext()

export const useAppContext = () => useContext(NavbarContext) // 1. create custom hook -> go to UserContainer.jsx

const Navbar = () => {
  const [user, setUser] = useState({ name: 'bob' })

  const logout = () => {
    setUser(null)
  }

  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className='navbar'>
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  )
}
export default Navbar
