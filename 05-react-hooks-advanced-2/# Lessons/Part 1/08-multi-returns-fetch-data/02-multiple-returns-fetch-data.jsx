/*
  Conditional Rendering - Multiple Returns - Fetch Data
  - Data Fetching :
    -> usually three options:
      + loading   : waiting for data to arrive (display loading state)
      + error     : there was an error (display error message)
      + success   : received data (display data)


*/

import { useEffect, useState } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true) // 1. convention to setup booleans with isSomething
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState(null)

  const fetchUser = async () => {
    try {
      const resp = await fetch(url)
      const user = await resp.json()
      setUser(user)
    } catch (error) {
      setIsError(true)
      console.log(error)
    }

    setIsLoading(false)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  // order matters -> react will from top to bot -> don't place user JSX before loading or error
  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    return <h2>There was an error...</h2>
  }
  return (
    <div>
      <img
        style={{ width: '150px', borderRadius: '25px' }}
        src={user.avatar_url}
        alt={user.name}
      />
      <h2>{user.name}</h2>
      <h4>works at {user.company}</h4>
      <p>{user.bio}</p>
    </div>
  )
}

export default MultipleReturnsFetchData
