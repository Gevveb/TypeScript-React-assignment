import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import { NavLink } from 'react-router-dom'

const NotFound: React.FC = () => {
  return (
    <>
      <MainMenuSection />
      <div className="not-found">
        <h2 className="container">404- Page not found! </h2>
        <NavLink className="menu-link" to="/" end>The page you were looking for couldn't be found, please return to the homepage</NavLink>
      </div>
      
    </>
  )
}

export default NotFound