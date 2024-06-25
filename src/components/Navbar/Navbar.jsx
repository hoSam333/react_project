import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'


function Navbar({cartItems , dark , isDark}) {

  return (
    <div className='Navbar'>

      <nav className="navbar navbar-expand-lg  p-2 px-4 ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Bravo <span>Shop</span></a>
          <button className="navbar-toggler bg-light text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
              </li>

              <li className="nav-item">
                <Link to="/about"  className="nav-link" href="#">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/shop"  className="nav-link" href="#">Shop</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Products
                </a>
                <ul className="dropdown-menu">
                  <li><Link to="/fake"  className="dropdown-item" href="#">Fake API</Link></li>
                  <li><Link to="/dummy"  className="dropdown-item" href="#"> Dummy API </Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link" href="#">Contact</Link>
              </li>
              <li className="nav-item">
                  <i onClick={isDark} className="fa-regular fa-moon fs-3 m-auto"></i>
              </li>
            </ul>

            <div className='d-flex align-items-center justify-content-center gap-3 m-2 icones'>
              <div className='fs-5' >
                  <i className="fa-solid fa-heart"></i>
                  <sub>(0)</sub>
              </div>
              <Link to="/cart" className='fs-5'>
              <i className="fa-solid fa-cart-shopping"></i>
                  <sub>({cartItems.length})</sub>
              </Link>
            </div>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
