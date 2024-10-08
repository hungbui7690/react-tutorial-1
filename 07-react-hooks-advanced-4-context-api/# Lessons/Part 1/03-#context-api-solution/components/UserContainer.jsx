import { useContext } from 'react'
import { NavbarContext } from './Navbar'

// 2a. we don't need to extract when using Context API
const UserContainer = () => {
  const { user, logout } = useContext(NavbarContext) // 2b.

  return (
    <div className='user-container'>
      {user ? (
        <>
          <p>Hello There, {user.name.toUpperCase()}</p>
          <button type='button' className='btn' onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  )
}
export default UserContainer
