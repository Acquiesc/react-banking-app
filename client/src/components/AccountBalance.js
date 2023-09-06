import React from 'react'

export default function AccountBalance( { balance } ) {
  return (
    <div>
        <h2>Account Balance</h2>
        <p>${balance.toFixed(2)}</p>
    </div>
  )
}