import React from 'react'

export default function SiteSearch() {
  return (
    <section className='container-fluid'>
        <div className='row'>
            <div className='col-12 site-search-container py-5 text-center justify-content-center'>
                <h3 className='text-white mb-3 fs-1'>What can we help you find?</h3>
                <form>
                  <div className='row'>
                    <div className='col-12 col-md-6 col-lg-4 mx-auto'>
                      <input type="text" placeholder='Search...' className='form-control'></input>
                    </div>
                  </div>
                </form>
            </div>
        </div>
    </section>
  )
}
