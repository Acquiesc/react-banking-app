import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function LoginForm() {
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
            const response = await axios.post('/api/user/create', formData);
        
            console.log('Registration successful:', response.data);

            navigate('/login')
        } catch (error) {
            console.error('Registration failed:', error.response.data);
        }
    }

  return (
    <section className='container'>
        <div className='row justify-content-center'>
            <div className='col-auto'>
                <h1 className='text-center'>Register</h1>
                <form className='border p-3 rounded mt-3 mb-5' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="form-control" id="email" aria-describedby="emailHelp"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className='form-label'>Password:</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} className='form-control' />                    
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </section>
  )
}
