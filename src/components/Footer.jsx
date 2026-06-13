import { Link } from 'react-router-dom'
import Logo from './Logo'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Logo size={40} />
          <div>
            <div className="footer__name">Ethlathini Rest Camp</div>
            <div className="footer__loc">Memorial Gate Road · Hluhluwe · KwaZulu-Natal</div>
          </div>
        </div>

        <nav className="footer__nav">
          <Link to="/">Home</Link>
          <Link to="/book">Book & rates</Link>
          <Link to="/about">About</Link>
          <Link to="/find-us">Find us</Link>
        </nav>

        <div className="footer__contact">
          <a href="tel:+27000000000">+27 (0)00 000 0000</a>
          <a href="mailto:info@ethlathini.co.za">info@ethlathini.co.za</a>
          <a href="https://wa.me/27000000000" target="_blank" rel="noopener">WhatsApp us</a>
        </div>
      </div>

      <div className="footer__base">
        <div className="container">
          <span>© {new Date().getFullYear()} Ethlathini Rest Camp</span>
          <span>2km from Hluhluwe-iMfolozi Memorial Gate · Africa's oldest game reserve</span>
        </div>
      </div>
    </footer>
  )
}
