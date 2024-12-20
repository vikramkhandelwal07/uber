import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { user, setUser } = useContext(UserDataContext)
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()

    const userData = {
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

    if (response.status === 200) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }

    setEmail('')
    setPassword('')
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-[400px] h-[600px] bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between'>
        <div>
          <img
            className='w-16 mb-10 mx-auto'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s"
            alt=""
          />
          <form onSubmit={submitHandler}>
            <h3 className='text-lg font-medium mb-2'>What&apos;s your email</h3>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
              type="email"
              placeholder='email@example.com'
            />
            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
              type="password"
              placeholder='password'
            />
            <button
              className='bg-black text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg'
            >
              Login
            </button>
          </form>
          <p className='text-center'>
            New here?{' '}
            <Link to='/signup' className='text-[#5e17eb]'>
              Create new Account
            </Link>
          </p>
        </div>
        <div>
          <Link
            to='/captain-login'
            className='bg-[#5e17eb] flex items-center justify-center text-white font-semibold rounded-lg px-4 py-2 w-full text-lg'
          >
            Sign in as Captain
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UserLogin
