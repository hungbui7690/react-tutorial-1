import React from 'react'

const SingleColor = ({ color, index }) => {
  const { hex, weight } = color

  return (
    <article
      className={index > 10 ? 'color color-light' : 'color'}
      style={{ background: `#${hex}` }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='percent-value'>#{hex}</p>
    </article>
  )
}

export default SingleColor
