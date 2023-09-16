import React from 'react'

import fifthThirdLogo from '../assets/imgs/fifth-third-logo-shield.svg'

export default function ProfileNavTop() {
  return (
    <header className='container-fluid' style={{ background: "linear-gradient(90deg, rgba(27,69,148,1) 0%, rgba(25,73,151,1) 41%, rgba(25,116,186,1) 100%)"}}>
        <div className='row d-flex justify-content-between p-3 pe-5'>
            <div className='col-auto d-flex align-items-center gap-3'>
                <img src={fifthThirdLogo} className='img-fluid' style={{ maxWidth: "40px" }}></img>
                <h1 className='text-white fw-bold mb-0 fs-4'>Fifth Third Bank</h1>
            </div>
            <div className='col-auto d-flex align-items-center gap-2'>
                <button className='btn text-white'>
                    <i className="bi bi-power text-white me-2"></i>
                    Logout
                </button>
            </div>
        </div>
    </header>
  )
}
