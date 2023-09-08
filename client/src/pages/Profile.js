import React from 'react'

import Accounts from '../components/profile/Accounts'
import ProfileNavigation from '../components/profile/Navigation'

import ProfileCSS from '../components/css/Profile.css'

export default function Profile({ user }) {
  return (
    <>
      <div className='profile-content-container' style={{ minHeight: "100vh", width: "100vw" }}>
          <div className='row' style={{ minHeight: "100vh"}}>
            <div className='col-auto'>
              <ProfileNavigation user={user}/>
            </div>
            <div className='col'>
              <Accounts user={user} />
            </div>
          </div>
      </div>
    </>
  )
}
