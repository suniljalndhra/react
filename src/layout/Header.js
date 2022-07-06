import React, { Component } from 'react';
import {  Link } from "react-router-dom";


export default class Header extends Component {
  render() {
    return (
        <header className='sticky-top bg-white py-2'>
            <div className='container'>
            <nav className="navbar navbar-expand-sm navbar-light">
                <Link className="navbar-brand" to="/">
                    <img alt="" src='image\hone-logo-symbol.svg' className='img-fluid' width={35}></img>
                    <span className='text-orange'>HONE</span>
                    <span className='text-black'>CARBON</span>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item dropdown" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <Link className="nav-link dropdown-toggle" to="/">
                        Our products
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link to="/" className="nav-link">Action</Link>    
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            About Us
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="nav-link" to="/about">About</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Research and Design</Link>
                    </li>
                </ul>
                <div className="navbar-nav ml-auto align-items-center">
                    <Link to="/" className="nav-link">Sign Up</Link>
                    <Link to="/" className="btn btn-outline-primary">Log In</Link>
                </div>
                </div>
            </nav>
            </div>
        </header>        
    )
  }
}
