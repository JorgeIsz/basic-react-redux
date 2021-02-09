import React from 'react'
import { useSelector } from 'react-redux'

const Card = ({ handleClick, actionName, buttonColor }) => {

  const count = useSelector((state) => state.count)

  const className = `home__button button_${buttonColor}`

  return (
      <div className="home__card">
        <h3 className="home__count">Count: {count}</h3>
        <button className={className} onClick={handleClick}>{actionName}</button>
      </div>
  )
}

export default Card
