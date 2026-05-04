import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Signin = () => {
  // define your states here 
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

// states for posting data 
const [loading, setLoading] = useState ("")
const [success, setSuccess] = useState ("")
const [error, setError] = useState ("")

// function to sign un user
const handlesubmit = async (e) =>{
    e.preventDefault()
    setLoading("Please Wait...")
    

    // create digital envelope to input data
    const formdata= new FormData()
    formdata.append("email", email)
    formdata.append("password", password)

    try {
      const response= await axios.post("http://murayambuni.alwaysdata.net/api/signin", formdata)
      
      setSuccess(response.data.message)
      setLoading("")
    } catch (error) {
      setError(error.message)
      setLoading("")
    }

}
  return (
    <div className='row justify-content-center mt-1 ' >
      <div className='card shadow p-4 col-md-6  '>
        <h1>Sign In</h1>
        {/* bind the states */}
        <h2 className="text-warning">{loading}</h2>
        <h2 className="text-success">{success}</h2>
        <h2 className="text-danger">{error}</h2>

        <form action="" onSubmit={handlesubmit}>
          <input type="email" className="form-control"    placeholder='Enter email'    onChange={(e) => setEmail(e.target.value)}/><br />
          <input type="password" className="form-control" placeholder='Enter password' onChange={(e) => setPassword(e.target.value)}/><br />
          <button className='btn btn-success w-100' type="submit">Sign In</button><br /><br />
          <p>Don't have an account?<Link to ="/signup" className='text-success'>Sign Up</Link> </p>
        </form>
      </div>


    </div>
  )
}

export default Signin

