/*
  useReducer


*************************

  Challenge:
  -> add reset button
    # reset will add all data back to UI
  -> if everything is clear:
    # hide "clear" button
    # show "reset" button


*/

import { useState } from 'react'
import { data } from './data'

const ReducerBasics = () => {
  const [people, setPeople] = useState(data)

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }

  const clearList = () => {
    setPeople([])
  }

  // 1.
  const resetList = () => {
    setPeople(data)
  }

  return (
    <div className='container'>
      {people.map((person) => {
        const { id, name } = person

        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}

      {/* 2. */}
      {people.length === 0 ? (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={resetList}
        >
          Reset
        </button>
      ) : (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={clearList}
        >
          Clear
        </button>
      )}
    </div>
  )
}

export default ReducerBasics
