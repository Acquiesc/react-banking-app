import React from 'react'

import fifthThirdLogo from '../assets/imgs/fifth-third-logo-shield.svg'

export default function Navbar() {
  return (
       <nav className="nav container-fluid d-flex flex-column">
            <div className="row d-flex my-auto justify-content-between">
                <div className="col d-flex flex-column justify-content-center text-center">
                    <button type="button" className="btn" style={{width: "fit-content"}}>
                        <i className="bi bi-list fs-1 border rounded px-1 nav-icon"></i>
                    </button>
                </div>
                <div className="col d-flex flex-column justify-content-center">
                    <a href="/" className="mx-auto nav-link"><img src={fifthThirdLogo}></img></a>
                </div>
                <div className="col d-flex flex-column text-end justify-content-center">
                    <a href="/login" className="fs-4 nav-link text-white">Login</a>
                </div>
            </div>
       </nav>
  )
}
