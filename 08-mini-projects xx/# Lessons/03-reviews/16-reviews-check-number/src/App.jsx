/*
  Check Number

*/

import { useState } from 'react'
import {
  FaBeer,
  FaChevronLeft,
  FaChevronRight,
  FaQuoteRight,
} from 'react-icons/fa'

import people from './data'

const App = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  // (1)
  const checkNumber = (num) => {
    if (num > people.length - 1) return 0
    if (num < 0) return people.length - 1
    return num
  }

  const nextPerson = () => {
    setIndex((cur) => {
      return checkNumber(cur + 1) // (2a)
    })
  }

  const prevPerson = () => {
    setIndex((cur) => {
      return checkNumber(cur - 1) // (2b)
    })
  }

  return (
    <main>
      <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='btn-container'>
          <button className='prev-btn' onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className='next-btn' onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
      </article>
    </main>
  )
}

export default App
