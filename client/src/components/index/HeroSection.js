import React from 'react'
import { useSelector } from 'react-redux'

import ATM from '../../assets/imgs/fifth-third-atm.png'

export default function HeroSection() {
  const users = useSelector((state) => state.users)

  console.log(users)

  return (
    <section className="hero container-fluid px-3">
        <div className="row h-100 justify-content-center">
            <div className="col-12 col-lg-4 d-flex flex-column justify-content-center">
                <h1 className="fw-bold display-1 my-3 hero-header">Banking at your<br></br>Convenience</h1>
                <p className="text-white fs-5 my-4">GR Banking makes your everyday better with 40,000 Fee-Free ATMs, contactless pay and money when you need it</p>
                <div className="d-flex flex-column flex-lg-row gap-5 my-3">
                  <a href="#" className="btn border border-light fs-4 fw-bold py-2 text-dark" style={{borderRadius: "50px", backgroundColor: "white"}}>Open Your Account</a>
                  <a href="#" className="btn border border-light fs-4 fw-bold py-2" style={{borderRadius: "50px"}}>See How</a>
                </div>
            </div>
            <div className="col-12 col-lg-4 d-flex flex-column justify-content-end">
              <img src={ATM} className="img-fluid mx-auto mt-auto" style={{width: "90%", maxWidth: 500 + "px", height: "auto"}}></img>
            </div>
        </div>
    </section>
  )
}
