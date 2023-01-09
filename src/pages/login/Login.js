import React,{useState,useEffect} from "react";
import axios from "axios";
import "./login.css";
import { useNavigate } from "react-router-dom";
import Loading from '../../components/loading/Loading'
import Error from '../../components/error/Error'


function Login() {
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const[loading,setloading]=useState(false)
    const[err,seterr]=useState()
   
    const handleLogin=async()=>{
      
            const user={
               
                email,
                password,
            }
          try{
            setloading(true)
            const response=(await axios.post('https://hotel-booking-app-orbiz-server.onrender.com/orbizRooms/login',user)).data
            setloading(false)
            localStorage.setItem('currentUser',JSON.stringify(response))
            window.location.href="/home"

          }
          catch(err){
            console.log(err)
            setloading(false)
            seterr(true)
          }
      

    }
  return (
    <div className="Login">
       {loading && (<Loading />)}
    <div className=" mt-5 ">
    {err && (<Error  message="Invalid credentials"/>)}
        <div className="row justify-content-center">
      
          <div className="col-md-5  box-shadow p-3">
            <h1 className="text-center mb-3 ">Login</h1>
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
            <div className="d-flex justify-content-center align-items-center">
            <button className="btn btn-dark mt-3" onClick={handleLogin}>Login</button>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;