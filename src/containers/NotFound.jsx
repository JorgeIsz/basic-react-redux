import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {


  return (
    <div className="not-found">
      <p>404</p>
      <h3>Recurso no encontrado</h3>
      <Link to="home">Ir a home</Link>
    </div>
  )
}

export default NotFound 
