import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login({ setIsLoggedIn }) {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const [formErrors, setFormErrors] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(formData.email.length < 1) {
            setFormErrors({ email: 'You must input a valid email address'})
            return
        } else if (formData.email.indexOf('@') == -1) {
            setFormErrors({ email: 'The syntax of this email is not valid'})
            return
        }
        if(formData.password.length < 1) {
            setFormErrors({ password: 'You must submit a password'})
            return
        }

        //TODO: udpate to API request
        //setUser(formData)

        setIsLoggedIn(true)

        navigate('/profile')
    }

    return (
    <section className='container'>
        <div className='row justify-content-center'>
            <div className='col-auto'>
                <h1 className='text-center'>Login</h1>
                <form className='border p-3 rounded mt-3 mb-5' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" name='email' id="email" aria-describedby="emailHelp" onChange={handleInputChange}></input>
                        <p className='text-danger'>{formErrors.email}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" name="password" className="form-control" id="password" onChange={handleInputChange}></input>
                        <p className='text-danger'>{formErrors.password}</p>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <p>Don't have an account? (temporarily disabled)  <a href="#">Register here</a></p>
                <p className='fw-bold'>Currently, any login will succeed for testing</p>
            </div>
        </div>
    </section>
  )
}
