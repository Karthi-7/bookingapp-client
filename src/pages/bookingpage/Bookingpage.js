import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loading from '../../components/loading/Loading'
import Error from '../../components/error/Error'
import swal from "sweetalert"
import { useNavigate } from 'react-router-dom'

import "./bookingpage.css"
import moment from 'moment'


function Bookingpage() {  
    const[loading,setloading]=useState(true)
    const[err,seterr]=useState()
    const[room,setroom]=useState([])
    const {roomId,checkin,checkout}=useParams()
    const fromDate=moment(checkin,'DD-MM-YYYY')
    const toDate=moment(checkout,'DD-MM-YYYY')
    const totalDays=moment.duration(toDate.diff(fromDate)).asDays()+1;
    const totalRent=totalDays * room.rentperday
   const navigate=useNavigate()

    const fetchData=async()=>{
      if(!localStorage.getItem('currentUser')){
       navigate('/login')
      }
        try{
            setloading(true)
          
            const response=(await axios.post('https://orbiz-rooms-client.onrender.com/orbizRooms/getroomById',{roomId:roomId,checkin:checkin,checkout:checkout})).data.data
            console.log("res",response)
            setroom(response)
            setloading(false)
            
        }
        catch(err){
            setloading(false)
            seterr(true)
            console.log(err)
        }

    }

    useEffect(()=>{
        fetchData()


     },[])

  



 

     const bookNow=async()=>{
     
      const bookingDetails={
        room,
        userId:JSON.parse(localStorage.getItem('currentUser'))._id,
        fromDate:fromDate.format('DD-MM-YYYY'),
        toDate:toDate.format('DD-MM-YYYY'),
        totalDays,
        totalRent
       }
      console.log(bookingDetails)
       try{
        
          const response=await axios.post('https://orbiz-roomz-derver.onrender.com/orbizRoom/bookroom',bookingDetails)
            await swal("Good !", "Your Room Booked sucessfully!", "success");
            navigate("/profile")
         
         
       }
       catch(err){
          console.log(err)
       }
     }
  return (
    <div className='m-5'>
     {loading ? (<Loading />):err  ? (<Error />) : (
      <div>
        <div className="row justify-content-center mt-5 box-shadow">
          <div className="col-md-5">
              <h1>{room.name}</h1>
              <img src={room.imgUrl[0]} className="bigImg" alt="" />
          </div>
          <div className="col-md-5">
          <div style={{textAlign:"right"}}>
          
          <h1 >Booking Details</h1>
          <hr />
         
          <p><span>Name :{JSON.parse(localStorage.getItem('currentUser')).name} </span> </p>
          <p><span>From Date :{checkin}</span> </p>
          <p><span>To Date :{checkout}</span> </p>
          </div>
          <div style={{textAlign:"right"}}>
            <h1>Amount</h1>
            <hr />
           
            <p><span>Total days :{totalDays} </span> </p>
          <p><span>Rent per day :</span>{room.rentperday} </p>
          <p><span>Total Amount :</span>{totalRent} </p>

          </div>
          <div className="button " style={{float:"right"}}>
            <button className='btn btn-dark' onClick={bookNow}>Pay Now</button>
          </div>
       
          </div>
        </div>
      </div>
     )}
    </div>
  )
}

export default Bookingpage
