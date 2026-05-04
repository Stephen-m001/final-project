import axios from 'axios'
import React,{use, useState} from 'react'


const Addproduct = () => {
  // declare states here 
  const[product_name, setProductName] = useState("")
  const [product_description, setProductDescription] = useState("")
  const [cost, setCost] = useState("")
  const [product_photo , setProductPhoto] = useState("")

  // define three states for posting data 
  const [loading, setLoading] = useState("")
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")
  
  // function to handle submit
  const handlesubmit = async (e) => {
    e.preventDefault()
    setLoading("Please Wait...")

    // digital envelope for inputs
    const formdata = new FormData ()
    formdata.append("product_name", product_name)
    formdata.append("product_description", product_description)
    formdata.append("product_cost", cost)
    formdata.append("product_photo", product_photo)
    try {
      const response = await axios.post ("http://murayambuni.alwaysdata.net/api/addproduct", formdata)
      setSuccess(response.data.message)
      setLoading("")
    } catch (error) {
      setError(error.message)
      setLoading("")
      
    }
  }



  return (
    <div className="row  mt-2 justify-content-center" >
      <div className="card sahdow col-md-6 p-4 ">
        <h1>Add Product</h1>
        {/* bind the states here */}
        <h2 className="text-warning">{loading}</h2>
        <h2 className="text-success">{success}</h2>
        <h2 className="text-danger">{error}</h2>

        <form action="" className='text-start' onSubmit={handlesubmit}>        
          <label  for="pn" >Product Name</label>
          <input id='pn' type="text" className="form-control" onChange={(e) => setProductName(e.target.value)}/><br />
          <label for="dp">Description</label>
          <input id='dp' type="text" className="form-control" onChange={(e) => setProductDescription(e.target.value)}/><br />
          <label for="ct">cost (Ksh)</label>
          <input id='ct' type="number" className="form-control" onChange={(e) => setCost(e.target.value)} /><br />
          <label for="ph">Product Photo</label>
          <input  id='ph' type="file" accept='image/*' className="form-control" onChange={(e) => setProductPhoto(e.target.files[0])}/><br />
          <button className='btn btn-success w-100' type='submit'>Add Product</button>

        </form>
      </div>
    </div>
  )
}

export default Addproduct