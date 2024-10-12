import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../library_books/LOGO1.png'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" >
      <div className="container ">
        <a className="navbar-brand" href="#"><img src={logo} style={{ width: '80px' }}></img></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item ">
              <Link to='/' className="nav-link active " aria-current="page"> HOME </Link>
            </li>
            <li className="nav-item">
              <Link to='/books' className="nav-link " aria-current="page" >BOOKS</Link>
            </li>
            <li className="nav-item">
              <Link to='/addbooks' className="nav-link " aria-current="page" >ADD BOOKS</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
