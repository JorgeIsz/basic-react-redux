import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { actionTypes } from '../actions'

const Home = () => {

  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()

  const handleIncrement = () => dispatch({
    type: actionTypes.INCREMENT
  })

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default Home 
