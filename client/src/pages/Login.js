import React from 'react'

import LoginForm from '../components/auth/LoginForm.js'

export default function Login({ user, setUser }) {
  return (
    <>
      <LoginForm user={user} setUser={setUser} />
    </>
  )
}
