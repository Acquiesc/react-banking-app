import React from 'react'

import SustainabilityIcon from '../../assets/imgs/2022-ESG-report-final.png'

export default function Sustainability() {
  return (
    <section className='container my-5'>
      <div className='row d-flex'>
          <div className='col-12 mx-auto d-flex flex-column sustainability-report-container px-3 py-4'>
            <div className="row">
              <div className='col-7 col-lg-5 d-flex flex-column'>
                <img src={SustainabilityIcon} className='my-3 mx-auto img-fluid'></img>
              </div>
              <div className='col-12 col-lg-6 d-flex flex-column text-center text-md-start justify-content-evenly my-2'>
                <h3 className='fw-bold'>2022 Sustainability Report</h3>
                <p className='mb-5'>Fith Third's 2022 Sustainability Report delivers progress on the Bank's sustainability
                      priorities.
                </p>
                <a href="#" className='btn-blue-square p-4 fw-bold text-center fs-5'> READ THE 2022 SUSTAINABILITY REPORT</a>                </div>
              </div>
            </div>
          </div>
    </section>
  )
}
