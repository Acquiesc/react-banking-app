import React from 'react'

export default function Navigation({user}) {
  return (
    <div className='container-fluid border-end h-100'>
        <div className='row'>
            <div className='col-12'>
                <p>Welcome {user.email}</p>
            </div>
        </div>
    </div>
  )
}
