import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function LoginForm({ user, setUser }) {
    const [formData, setFormData] = useState({
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

        try {
            const response = await axios.post('/api/user/find', formData)

            console.log('found user: ', response.data)

            setUser(response.data)

            navigate('/')
        } catch (error) {

            setUser(null)

            console.log('Error encountered while finding user: ' + error.response.data)
        }
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
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" name="password" className="form-control" id="password" onChange={handleInputChange}></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <p>Don't have an account?  <a href="/register">Register here</a></p>
            </div>
        </div>
    </section>
  )
}
