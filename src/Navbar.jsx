import React from 'react'

const Navbar = ({theme}) => {
  return (
    <nav className={theme ? "navbar bg-danger" : "navbar bg-dark"}>
    <div className="container-fluid d-flex align-item-center justify-content-center">
      <span className="navbar-brand mb-0 h1 text-light my-2">My Todo App</span>
    </div>
  </nav>
  )
}

export default Navbar

