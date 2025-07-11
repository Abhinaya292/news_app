import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to={'/'}>AI_AGENT</NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to={'/'}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={'/about'}>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={'/contact'}>Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={'/services'}>Services</NavLink>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>

        </div>
      </div>
    </nav>

    


  )
}

export default Navbar
