import React from 'react'

export default function TransactionHistory({ transactions }) {
  return (
    <div>
      <h2>Transaction History</h2>
      <ul>
        {transactions}
      </ul>
    </div>
  )
}
