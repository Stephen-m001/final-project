import axios from 'axios'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  // declare the states here
  const [username, setUsername ] = useState("")
  const [email, setEmail] = useState("")
  const  [password, setPassword] = useState("")
  const [phone, setPhone ] = useState("")

  const [loading , setLoading] = useState("")
  const [success, setSuccess]  = useState("")
  const [error, setError] = useState("")

  // function to handle submit
  const handlesubmit = async (e) =>{
    e.preventDefault()
    setLoading("Please Wait...")  


    // create empty digital envelope to store user inputs 
    const formdata = new FormData()
    // append/add  
    formdata.append("username", username)
    formdata.append("email", email)
    formdata.append("password", password)
    formdata.append("phone", phone)

    try {
      const response = await axios.post("http://murayambuni.alwaysdata.net/api/signup", formdata)
      setSuccess(response.data.message)
      setLoading("")
    } catch (error) {
      setError(error.message)
      setLoading("")
    }






  }
  
  return (
    <div className='row  justify-content-center mt-1' >
      <div className='col-md-6 card shadow' >
        <h1>Signup</h1>
        {/* bind the states */}
        <h2 className='text-warning'>{loading}</h2>  
        <h2 className='text-success'>{success}</h2>
        <h2 className='text-danger'>{error}</h2>

        <form action="" onSubmit={handlesubmit}>
          <input type="text" className="form-control" placeholder='Enter username' onChange={(e) => setUsername(e.target.value)}/><br />
          <input type="email" className="form-control" placeholder='Enter email' onChange={(e) =>setEmail(e.target.value)} /><br />
          <input type="password" className="form-control" placeholder='Enter password' onChange={(e) => setPassword(e.target.value)}/><br />
          <input type="tel" className="form-control" placeholder='Enter phone' onChange={(e) => setPhone(e.target.value)}/><br />
          <button className='btn btn-success w-100 ' type='submit'>Sign Up</button><br /><br />
          <p>Already have an account? <Link to ="/signin" className='text-success'>Signin</Link> </p>
        </form>

      </div>

    </div>
  )
}

export default Signup