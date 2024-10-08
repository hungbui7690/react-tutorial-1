/*
  Setup Headers
  - last argument is option
    -> axios.get(url, {})
    -> axios.post(url, {data}, {})


*/

import { useState } from 'react'
import axios from 'axios'

const url = 'https://icanhazdadjoke.com/' // docs -> to get the data, it requires:: "Accept: application/json"

const Headers = () => {
  const [joke, setJoke] = useState('random dad joke')

  const fetchDadJoke = async () => {
    try {
      const { data } = await axios(url, {
        headers: {
          Accept: 'application/json', // add header
        },
      })

      console.log(data)
      setJoke(data.joke)
    } catch (error) {
      console.log(error.response)
    }
  }
  return (
    <section className='section text-center'>
      <button className='btn' onClick={fetchDadJoke}>
        random joke
      </button>
      <p className='dad-joke'>{joke}</p>
    </section>
  )
}
export default Headers
