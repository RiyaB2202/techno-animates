import React from 'react'

function Header() {
  return (
    <div className="header">
    <nav className="navbar">
      <ul className="nav-links">
        <li class="logo"><img src="/logo-techno.png" alt="Techbo Logo" /></li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Services</a>
        </li>
        <li>
          <a href="/contact">Samples</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  </div>
  )
}

export default Header