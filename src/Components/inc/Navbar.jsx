import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg  bg-info shadow">
        <div className="container-fluid">
    
    <Link to="/" className="navbar-brand">Limat Technology Solution</Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link active">About Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link active">Contact Us</Link>
        </li>
      </ul>
      
    </div>
  </div>
        </nav>
        </>
    )
}

export default Navbar;