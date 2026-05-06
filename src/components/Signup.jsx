import axios from 'axios'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  // states
  const [username, setUsername ] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone ] = useState("")

  const [loading , setLoading] = useState("")
  const [success, setSuccess]  = useState("")
  const [error, setError] = useState("")

  // 🔐 Password strength logic
  const getStrength = (password) => {
    let score = 0

    if (password.length >= 8) score++
    if (/[A-Z]/.test(password)) score++
    if (/[a-z]/.test(password)) score++
    if (/[0-9]/.test(password)) score++
    if (/[^A-Za-z0-9]/.test(password)) score++

    return score
  }

  const strength = getStrength(password)

  const getStrengthText = () => {
    if (!password) return ""
    if (strength <= 2) return "Weak"
    if (strength <= 4) return "Medium"
    return "Strong"
  }

  const getBarStyle = () => {
    if (strength <= 2) {
      return { width: "33%", backgroundColor: "red" }
    }
    if (strength <= 4) {
      return { width: "66%", backgroundColor: "orange" }
    }
    return { width: "100%", backgroundColor: "green" }
  }

  // submit
  const handlesubmit = async (e) =>{
    e.preventDefault()

    // optional: block weak passwords
    if (strength <= 2) {
      setError("Password is too weak")
      return
    }

    setLoading("Please Wait...")  

    const formdata = new FormData()
    formdata.append("username", username)
    formdata.append("email", email)
    formdata.append("password", password)
    formdata.append("phone", phone)

    try {
      const response = await axios.post("http://murayambuni.alwaysdata.net/api/signup", formdata)
      setSuccess(response.data.message)
      setLoading("")
      setError("")
    } catch (error) {
      setError(error.message)
      setLoading("")
    }
  }
  
  return (
    <div className='row justify-content-center mt-1'>
      <div className='col-md-6 card shadow'>
        <h1>Signup</h1>

        <h2 className='text-warning'>{loading}</h2>  
        <h2 className='text-success'>{success}</h2>
        <h2 className='text-danger'>{error}</h2>

        <form onSubmit={handlesubmit}>
          <input type="text" className="form-control" placeholder='Enter username'
            onChange={(e) => setUsername(e.target.value)} /><br />

          <input type="email" className="form-control" placeholder='Enter email'
            onChange={(e) =>setEmail(e.target.value)} /><br />

          {/* 🔐 Password input */}
          <input type="password" className="form-control" placeholder='Enter password'
            onChange={(e) => setPassword(e.target.value)} /><br />

          {/* 🔥 Strength bar */}
          {password && (
            <>
              <div style={{
                height: "8px",
                width: "100%",
                backgroundColor: "#ddd",
                borderRadius: "5px",
                marginTop: "-10px",
                marginBottom: "5px"
              }}>
                <div style={{
                  height: "100%",
                  borderRadius: "5px",
                  transition: "0.3s",
                  ...getBarStyle()
                }}></div>
              </div>

              {/* Strength text */}
              <p style={{ fontSize: "14px" }}>
                Strength: <strong>{getStrengthText()}</strong>
              </p>
            </>
          )}

          <input type="tel" className="form-control" placeholder='Enter phone'
            onChange={(e) => setPhone(e.target.value)} /><br />

          <button className='btn btn-success w-100' type='submit'
            disabled={strength <= 2}>
            Sign Up
          </button><br /><br />

          <p>
            Already have an account? 
            <Link to="/signin" className='text-success'> Signin</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Signup
