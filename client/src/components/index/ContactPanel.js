import React from 'react'

export default function ContactPanel() {
  return (
    <section className='container-fluid contact-panel-container'>
        <div className="row d-flex justify-content-center">
            <div className="col-11 col-lg-5 text-center py-5 contact-panel">
                <h3 className='fw-bold fs-1'>Contact us</h3>
                <p className="fs-2">1-866-671-5353</p>
                <br></br>
                <p className="w-75 mx-auto">Speak to a sales advisor about our products and services</p>
            </div>
            <div className='col-11 col-lg-5 text-center py-5 contact-panel no-border-top-small'>
                <h3 className='fw-bold fs-1'>Branch & ATM Locator</h3>

                <form>
                    <div className='d-flex gap-3 mb-3 mt-4 justify-content-center'>
                        <label className="fw-bold">
                            <input type="checkbox" className='me-2' name="branch_checkbox"></input>
                            Branch
                        </label>
                        <label className="fw-bold">
                            <input type="checkbox" className='me-2' name="ATM_checkbox"></input>
                            ATMs
                        </label>
                    </div>
                    <div className='row d-flex mb-2'>
                        <div className="col-12 col-md-8 col-lg-12 d-flex flex-column mx-auto">
                            <label className='fw-bold mb-2'>Enter Zip Code or City/State</label>
                            <input type="text" className='form-control' placeholder='Zip Code or City, State'></input>
                        </div>
                    </div>
                    <div className='row d-flex'>
                        <div className='col-12 col-md-8 col-lg-12 mx-auto'>
                            <button className='btn-blue-square w-100 py-2 fw-bold' type='submit'>FIND</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}
