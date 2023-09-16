import React from 'react'

import EqualHousingIcon from '../assets/imgs/equal_housing_logo.png'
import fifthThirdLogoName from '../assets/imgs/fifth-third-logo-name.svg'

export default function Footer() {
  return (
    <footer className='container-fluid py-3'>
        <div className='row d-flex'>
            <div className='col-12 col-md-8 col-lg-4 mx-auto'>
                <ul className='ps-2'>
                    <a href="#"><li className='mb-3 text-dark'><u>About</u></li></a>
                    <a href="#"><li className='mb-3 text-dark'><u>Customer Service</u></li></a>
                    <a href="#"><li className='mb-3 text-dark'><u>Careers</u></li></a>
                    <a href="#"><li className='mb-3 text-dark'><u>Investor Relations</u></li></a>
                    <a href="#"><li className='mb-3 text-dark'><u>Media Center</u></li></a>
                    <a href="#"><li className='mb-3 text-dark'><u>Privacy & Security</u></li></a>
                    <a href="#"><li className='mb-3 text-dark'><u>Site Map</u></li></a>
                </ul>
            </div>
        </div>
        <div className='row d-flex mt-2'>
            <div className='col-12 col-md-8 col-lg-4 mx-auto text-center'>
                <p className='fw-bold fs-4 text-dark'>Connect With Us: <i className="bi bi-facebook"></i> <i className="bi bi-twitter"></i> <i className="bi bi-instagram"></i> <i className="bi bi-linkedin"></i></p>
            </div>
        </div>
        <div className='row d-flex mt-3'>
            <div className='col-12 col-md-8 col-lg-4 mx-auto text-center'>
                <p className='copyright-text'>Copyright © 2023 Fifth Third Bank, National Association. All Rights Reserved. Member FDIC. <img src={EqualHousingIcon} style={{height: "15px", width: "15px"}}></img> Equal Housing Lender.</p>
            </div>
        </div>
        <div className='row d-flex text-center justify-content-center gap-3 mt-3'>
            <div className='col-12 d-flex gap-3 justify-content-center'>
                <img src={fifthThirdLogoName} className='w-50' style={{maxWidth: "500px"}}></img>
            </div>
        </div>
    </footer>
  )
}
