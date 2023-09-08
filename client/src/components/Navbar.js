import React from 'react'
import { useNavigate } from 'react-router-dom'

import fifthThirdLogo from '../assets/imgs/fifth-third-logo-shield.svg'

export default function Navbar({ user, setUser }) {

    const navigator = useNavigate()

    function logoutUser(e) {
        e.preventDefault()

        setUser(null)

        localStorage.removeItem('users.reactbankapp')

        navigator('/')
    }

  return (
       <nav className="nav container-fluid d-flex flex-column border-bottom">
            <div className="row d-flex my-auto justify-content-between">
                <div className="col d-flex d-lg-none flex-column justify-content-center text-center">
                    <button type="button" className="btn" style={{width: "fit-content"}}>
                        <i className="bi bi-list fs-1 border rounded px-1 nav-icon"></i>
                    </button>
                </div>
                <div className="col d-flex justify-content-end justify-content-lg-start">
                    <a href="/" className="nav-link" style={{ width: "fit-content"}}><img src={fifthThirdLogo}></img></a>
                </div>
                <div className='col d-none d-lg-flex flex-column'>
                    <ul className='d-flex justify-content-evenly gap-3 mt-auto'>
                        <a href="#" className='fs-4'><li>Bank</li></a>
                        <a href="#" className='fs-4'><li>Borrow</li></a>
                        <a href="#" className='fs-4'><li>Insure</li></a>
                        <a href="#" className='fs-4'><li>Invest</li></a>
                        <a href="#" className='fs-4'><li>Plan</li></a>
                    </ul>
                </div>
                <div className="col d-none d-lg-flex flex-column text-end justify-content-center">
                    {user ? (
                        <div className="d-flex justify-content-end gap-3 w-auto">
                            <a href="/profile" className="fs-4 nav-link">Profile</a> 
                            <a href="/" onClick={logoutUser} className="fs-4 nav-link">Logout</a> 
                        </div>
                        ) : (
                            <a href="/login" className="fs-4 nav-link">Login</a> 
                    )}
                </div>
            </div>
       </nav>
  )
}
