import React from 'react'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import "../styles/Navbar.css"


const Navbar = () => {
  return (
     <nav className='nav'>
        <div className='logo'>
             <HashLink to="/#home">CODING MASTER</HashLink>
        </div>
        <div className='nav-links'>
            <li><HashLink to="/">Home</HashLink></li>
            <li><HashLink smooth to="/#about">About</HashLink></li>
            <li><HashLink smooth to="/#brands">Brands</HashLink></li>
            <li><NavLink to="/contact">contact</NavLink></li>
            <li><NavLink to="/Services">Services</NavLink></li>
            
        </div>
     </nav>
  )
}

export default Navbar
