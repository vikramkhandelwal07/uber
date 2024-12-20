import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div 
        className='w-[400px] h-[650px] bg-cover bg-center rounded-lg shadow-md flex flex-col justify-between' 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1619059558110-c45be64b73ae?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
        }}
      >
        <img 
          className='w-16 ml-4 mt-4' 
          src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoid2VhcmVcL2ZpbGVcLzhGbTh4cU5SZGZUVjUxYVh3bnEyLnN2ZyJ9:weare:F1cOF9Bps96cMy7r9Y2d7affBYsDeiDoIHfqZrbcxAw?width=1200&height=417" 
          alt="" 
        />
        <div className='bg-white pb-8 py-4 px-4 rounded-b-lg'>
          <h2 className='text-[30px] font-semibold text-center'>Get Started with Uber</h2>
          <Link 
            to='/login' 
            className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>
            Continue
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Start
