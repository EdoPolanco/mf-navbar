import React from 'react'
import { NavLink} from 'react-router-dom'

const activeClass = (isActive) => `nav-link ${ isActive ? "active": ""}`

const Navbar = () => {
  return (
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink to='/' className="navbar-brand">Color Picker</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to='/' className={({ isActive}) => activeClass(isActive)}> Inicio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/features' className={({ isActive}) => activeClass(isActive)}> Próximamente</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/vue' className={({ isActive}) => activeClass(isActive)}> vue</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar