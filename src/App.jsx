import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Book from './pages/Book'
import About from './pages/About'
import FindUs from './pages/FindUs'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/"        element={<Home />} />
          <Route path="/book"    element={<Book />} />
          <Route path="/about"   element={<About />} />
          <Route path="/find-us" element={<FindUs />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
