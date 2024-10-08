/*
  Pass The Entire Object
  - render component
  - pass entire object
  - destructuring (object)


**********************************
  
  - return <Book book={book} key={id} />
    -> props.book.id
    -> props.book.author
    -> props.book.title
    -> props.book.img


*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const books = [
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: './images/book1.jpg',
    id: 1,
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
    id: 2,
  },
]

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        const { id } = book
        return <Book book={book} key={id} /> // 1. pass the entire object
      })}
    </section>
  )
}

const Book = (props) => {
  const { title, author, img } = props.book // 2. props.book

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
