import React from 'react'
import {Link} from "react-router-dom"

function Landingpage() {
  return (
     <div className='landing '>
       <div className='row'>
    <div className="col-md-12 my-auto">
        <h2 style={{color:"white",textAlign:"center",fontSize:"120px"}}>Orbiz Rooms</h2>
        <h1 style={{color:"white",textAlign:"center"}}>Relaxation at a beautiful peak.</h1>
    </div>
    <div className="col-md-12 landing-btn mt-3">
         <Link to="/home">
            <button className='btn btn-danger'>Get Started</button>
        </Link>
    </div>
    </div>

     </div>
   


   
  )
}

export default Landingpage
