import React,{useState,useEffect} from "react";
import axios from "axios"
import "./register.css";
import Loading from '../../components/loading/Loading'
import Error from '../../components/error/Error'
import Success from "../../components/succes/Success";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert"

function Register() {
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [cpassword,setcpassword]=useState("")
    const[loading,setloading]=useState(false)
    const[err,seterr]=useState()
    const [sucess,setsucess]=useState()
   const navigate=useNavigate()
   const handleRegister=async()=>{
        if(password == cpassword){
            const user={
                name,
                email,
                password,
                cpassword

            }
            try{
              setloading(true)
             const response= await axios.post('https://orbiz-rooms-client.onrender.com/orbizRooms/register',user).data
             setloading(false)
             await swal("Good !", "You Registered sucessfully!", "success");


             setname("")
             setemail("")
             setpassword("")
             setcpassword("")
            navigate('/login')

            }catch(err){
              console.log(err)
              setloading(false)
              seterr(true)
            }
    
            
        }
        else{
            alert("password mismatch")
        }

    }
  return (
    <div className="register">
   {loading && <Loading />}
   {err && <Error />}
  
      <div className="container mt-5 ">
      {sucess && <Success message="Registration success."/>}
        <div className="row justify-content-center">
      
          <div className="col-md-5  box-shadow p-3">
      
            <h1 className="text-center mb-3 ">Register</h1>
            <input
              type="text"
              name=""
              id=""
              className="form-control mb-3"
              placeholder="Name"
              value={name}
              onChange={(e)=>{setname(e.target.value)}}
            />
            <input
              type="email"
              name=""
              id=""
              className="form-control mb-3"
              placeholder="Email"
              value={email}
              onChange={(e)=>{setemail(e.target.value)}}
            />
            <input
              type="password"
              name=""
              className="form-control mb-3"
              id=""
              value={password}
              onChange={(e)=>{setpassword(e.target.value)}}
              placeholder="Password"
            />
            <input
              type="password"
              name=""
              className="form-control"
              id=""
              placeholder="Confirm password"
              value={cpassword}
              onChange={(e)=>{setcpassword(e.target.value)}}
            />
            <div className="d-flex justify-content-center align-items-center">
            <button className="btn btn-dark mt-3" onClick={handleRegister}>Register</button>
           
            </div>
            
           
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Register;
