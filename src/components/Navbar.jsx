import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import Logo from './Logo'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <NavLink to="/" className="navbar__brand">
          <Logo size={36} />
          <span className="navbar__name">Ethlathini<span className="navbar__sub">Rest Camp</span></span>
        </NavLink>

        <nav className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
          <NavLink to="/"        onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/book"    onClick={() => setOpen(false)}>Book & rates</NavLink>
          <NavLink to="/about"   onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/find-us" onClick={() => setOpen(false)}>Find us</NavLink>
          <NavLink to="/book" className="navbar__cta" onClick={() => setOpen(false)}>Book now</NavLink>
        </nav>

        <button className="navbar__burger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
