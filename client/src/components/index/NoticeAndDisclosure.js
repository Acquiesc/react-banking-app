import React, { useState } from 'react'

import subtractIcon from '../../assets/imgs/subtract-icon.png'
import addIcon from '../../assets/imgs/add-icon.png'

export default function NoticeAndDisclosure() {
    const [isOpen, setIsOpen] = useState(true);
    const toggleDropdown = () => {
        console.log(isOpen)
        setIsOpen(!isOpen)
    }
  return (
    <div className='container-fluid notices-dropdown-container py-3'>
        <div className="row d-flex">
            <div className='col-10 mx-auto'>
                
                <header role='button' className='col-12 d-flex gap-3 ms-2' onClick={toggleDropdown}>
                    {isOpen ? (
                        <img src={subtractIcon} className='my-auto' style={{width: "15px", height: "15px"}}></img>
                    ) : (
                        <img src={addIcon} className='my-auto' style={{width: "15px", height: "15px"}}></img>
                    )}
                    <h5 className='fs-3 my-auto'>Notices & Disclosures</h5>
                </header>
                <div className={`notices-dropdown-content ${isOpen ? 'open' : ''}`}>
                    <ol className='m-5'>
                        <li className=' mb-3'>1. Fifth Third employs a number of fraud protection measures and offers you fee-free tools, such as alerts, to help protect your account. You may also enroll in Fifth Third Identity Alert®, an optional, non-FDIC insured product, subject to additional fees, provided by Fifth Third's vendor, Trilegiant.</li>
                        <li className=''>2. Access to funds for Early Pay can be up to two days prior to date of scheduled payment and are dependent on submission of direct deposit by payer and standard fraud prevention restrictions.</li> 
                    </ol>
                    <div className='ms-4'>
                        <p className=''>Account must be funded within 90 days of account opening.  Service fees may apply.</p>
                        <br></br>
                        <p className=''>All lending is subject to credit review and approval.</p>
                        <br></br>
                        <p className=''>Subject to Digital Services User Agreement terms and conditions.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
