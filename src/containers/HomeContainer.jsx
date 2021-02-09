import React from 'react'
import { useDispatch } from 'react-redux'

import { actionTypes } from '../actions'
import Card from '../components/Card'

import '../styles/containers/home-container.css'

const Home = () => {

  const dispatch = useDispatch()

  const handleIncrement = () => dispatch({
    type: actionTypes.INCREMENT
  })

  const handleDecrement = () => dispatch({
    type: actionTypes.DECREMENT
  })

  return (
    <div className="home">
      <Card 
        handleClick={handleIncrement}
        actionName="Increment"
        buttonColor="green" />
      <Card 
        handleClick={handleDecrement}
        actionName="Decrement"
        buttonColor="red"/>
    </div>
  )
}

export default Home 
