import React from 'react'

import GooglePlayBtn from '../../assets/imgs/google-play-app-store.png'
import AppleStoreBtn from '../../assets/imgs/apple-store-app.png'

export default function MobileAppSection() {
  return (
    <section className="container">
        <div className='row d-flex my-5'>
            <div className='col-11 col-md-8 col-lg-6 mx-auto p-4 app-store-container text-center'>
                <h3 className="fs-1 fw-bold">Bank anytime, anywhere</h3>
                <p className="mb-4">It's easy with Fifth Third online and mobile banking.  With our mobile app,
                    you can check balances, transfer money, deposit checks and more.  It's like
                    having your own personal branch right inside your pocket!
                </p>
                <div className='d-flex gap-3 justify-content-center'>
                    <a href="#" style={{width: "40%", maxWidth: "150px"}}><img src={GooglePlayBtn} className='img-fluid'></img></a>
                    <a href="#" style={{width: "40%", maxWidth: "150px"}}><img src={AppleStoreBtn} className='img-fluid'></img></a>
                </div>
            </div>
        </div>
    </section>
  )
}
