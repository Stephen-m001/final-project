import axios from 'axios'
import React, { use, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Mpesapayment = () => {
  
  const {singleproduct} = useLocation().state || {}

  const imagepath = "http://murayambuni.alwaysdata.net/static/images/"

  // declare the states here 
  const [phone, setPhone] = useState("")
  
  // 3 states of posting data 
  const [loading, setLoading] = useState("")
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  // function to handle submit
  const handlesubmit= async(e)=>{
    e.preventDefault()
    // digital form for inputs
    const formdata= new FormData()
    setLoading("please Wait...")

    // append 
    formdata.append("amount", singleproduct.product_cost )
    formdata.append("phone", phone)
    try {
      const response=await axios.post("http://murayambuni.alwaysdata.net/api/mpesa_payment", formdata) 
      setSuccess(response.data.message)
      setLoading("")


    } catch (error) {
      setError(error.message)
      setLoading("")
    }
  }

  return (
    <div className="row justify-content-center">
      <h1>Make payment-Lipa na mpesa</h1>
      <div className="card shadow col-md-8 p-4">
        
        {/* image goes here  */}
        <img src={ imagepath + singleproduct.product_photo} alt="" style={{height:"250px",objectFit:"contain"}}/>

        <h5 className='text-start text-success'>{singleproduct.product_name}</h5>
        <p className="text-start ">{singleproduct.product_description}</p>        
        <b className="text-success text-start">Ksh.{singleproduct.product_cost}</b> <br />

        {/* bind the states  */}
        <h2 className="text-warning">{loading}</h2>
        <h2 className="text-success">{success}</h2>
        <h2 className="text-danger">{error}</h2>

        <form action="" onSubmit={handlesubmit} >
          <input type="tel" className="form-control" placeholder='Enter phone 254xxxxxxxx' onChange={(e) => setPhone(e.target.value)} /><br />
          <button className="btn btn-success w-100" type='submit' >Make Payment</button>
        </form>



      </div>
    </div>
  )
}

export default Mpesapayment