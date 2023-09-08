import React from 'react'

export default function Accounts({user}) {
  return (
    <div>
        <p>Accounts</p>
        {user ? <p>{user.email}</p> : <p>No user found</p>}
    </div>
  )
}
