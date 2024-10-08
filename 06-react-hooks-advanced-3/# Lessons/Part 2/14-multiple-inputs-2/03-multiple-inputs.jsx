/*
  Multiple Inputs
  - rely heavily on Dynamic Object Keys
  - not require to use -> but we'll see it often
  - inputs must have name attribute


*****************************

  - [e.target.name]: e.target.value
    -> setUser({ ...user, [e.target.name]: e.target.value })


*/

import { useState } from 'react'

const MultipleInputs = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  }) // 1. use object instead

  // 2. only 1 function that can handles for multiple input -> then apply below
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value }) // spread, then add/update new pair
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Multiple Inputs</h4>
        {/* name */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            name='name'
            value={user.name}
            onChange={handleChange}
          />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            type='email'
            className='form-input'
            id='email'
            name='email'
            value={user.email}
            onChange={handleChange}
          />
        </div>
        {/* password */}
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-input'
            id='password'
            name='password'
            value={user.password}
            onChange={handleChange}
          />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  )
}
export default MultipleInputs
