import React from 'react'
import './Nav.css'
import {MenuSquare} from 'lucide-react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
        <nav className="navbar fixed-top">
        <a className="logo text-light">LOGO</a>
        <input type="checkbox" id="toggler"/>
        <label htmlFor="toggler" className='text-primary'><MenuSquare /></label>
        <div className="menu">
            <ul className="list">
                <Link to='/'><li className='link'>Home</li></Link>
                <Link to='/service'><li className='link'>Service</li></Link>
                <Link to='/contact'><li className='link'>Contact</li></Link>
                <li className='link'>About</li>
                <li className='link'>Ourwork</li>
            </ul>
        </div>
    </nav>
    </div>
  )
}

export default Nav