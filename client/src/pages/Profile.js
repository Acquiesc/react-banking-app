import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Accounts from '../components/profile/Accounts'
import ProfileNavigation from '../components/profile/Navigation'

import ProfileCSS from '../components/css/Profile.css'

export default function Profile() {
  const [ user, setUser ] = useState({
    first: 'Adam',
    last: 'Lee',
    email: 'test@gmail.com'
  })
  
  const [ currentPage, setCurrentPage] = useState('accounts')
  
  const renderSwitch = (currentPage) => {
      switch(currentPage) {
          case ('accounts'):
              return <Accounts />
          default:
            return <div>Loading...</div>
      }
  }

  return (
    <>
      <div className='profile-content-container' style={{ minHeight: "100vh", width: "100vw" }}>
          <div className='row' style={{ minHeight: "100vh" }}>
            <div className='col-auto'>
              <ProfileNavigation user={user}/>
            </div>
            <div className='col'>
              {renderSwitch(currentPage)}              
            </div>
          </div>
      </div>
    </>
  )
}
