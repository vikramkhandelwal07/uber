import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CaptainDataContext } from '../context/CapatainContext'

const Captainlogin = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { captain, setCaptain } = React.useContext(CaptainDataContext)
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      email: email,
      password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captainData)

    if (response.status === 200) {
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')
    }

    setEmail('')
    setPassword('')
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[400px] h-[650px] bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 flex flex-col justify-between">
        <div>
          <img className="w-20 mb-3 mx-auto" src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
          
          <form onSubmit={submitHandler}>
            <h3 className="text-lg font-medium mb-2">What&apos;s your email</h3>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
              type="email"
              placeholder="email@example.com"
            />

            <h3 className="text-lg font-medium mb-2">Enter Password</h3>
            <input
              className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              placeholder="password"
            />

            <button className="bg-[#5e17eb] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base">
              Login
            </button>
          </form>

          <p className="text-center">
            Join a fleet?{' '}
            <Link to="/captain-signup" className="text-[#5e17eb]">
              Register as a Captain
            </Link>
          </p>
        </div>

        <div>
          <Link
            to="/login"
            className="bg-black flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base"
          >
            Sign in as User
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Captainlogin
