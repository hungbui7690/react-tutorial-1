/*
  Import and Export Statements
  - setup:
    -> remove all getBook code
    -> setup 2 files in src:
      + books.js (data file) 
      + Book.js (component)
    -> cut books array from main.js into books.js
    


***********************************

  - two flavors:
    -> named exports
      + with named exports names MUST match
    -> default exports
      + with default exports,can rename but only one default export per file


***********************************

  🥽 imports & exports are belongs to ES6 module >> not belongs to react


*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { books } from './books' // 2. import "named export" -> name must match

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book {...book} key={book.id} />
      })}
    </section>
  )
}

const Book = (props) => {
  const { img, title, author } = props

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>

      <h4>{author} </h4>
    </article>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookList />
  </StrictMode>
)
