import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproduct from './components/Addproduct';
import Getproduct from './components/Getproduct';
import Mpesapayment from './components/Mpesapayment';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Addfooter from './components/footer';
function App() {
  return (
    <BrowserRouter>   
        <div className="App">
          {/* navbar goes here  */}
           <Navbar /> 
      <header className="App-header">
       <h1  style={{color:"#39FF14"}}>Welcome To Zuri Gaming</h1>       
      </header>
      {/* carousel */}
      
      {/* <nav>
        <Link to="/" className='btn  text-dark m-1' style={{backgroundColor: "#00FF7F"}}>Get products</Link>
        <Link to="/signup" className='btn  text-dark m-1' style={{backgroundColor: "#00FF7F"}}>Signup</Link>
        <Link to="/signin" className='btn  text-dark m-1' style={{backgroundColor: "#00FF7F"}}>Signin</Link>
        <Link to="/addproduct" className='btn  text-dark m-1' style={{backgroundColor: "#00FF7F"}}>Addproduct</Link>
      </nav> */}
      <Routes>
        <Route path='/' element={<Getproduct />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/addproduct' element={<Addproduct />} />
        <Route path='/makepayment' element={<Mpesapayment />} />
        
      </Routes>
    </div>
    
    </BrowserRouter>
  );
   
}

export default App;
