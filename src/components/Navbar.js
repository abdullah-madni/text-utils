import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function Navbar(props) {

  return (
    <nav className={`navbar navbar-dark navbar-expand-md bg-${props.colorMode==='dark'?'black':'primary'}`}>
        <div className="container">
            <Link className="navbar-brand fw-bold" to="/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarContent">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <Link className={`nav-link ${props.pagePath==='/'?'active':''}`} to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${props.pagePath==='/about'?'active':''}`} to="/about">About</Link>
                    </li>
                </ul>
                <div className="text-light text-center mb-2 mb-md-0">
                    <h3 className='mb-0'>
                        <i onClick={props.toggleColorMode} className={`fa-solid fa-${props.colorMode==='dark'?'sun':'moon'}`}></i>
                    </h3>
                </div>
            </div>
        </div>
    </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Navbar'
}

export default Navbar
