import React,{useState,useEffect} from "react";
import { Tabs } from "antd";
import axios from "axios";
import Loading from '../../components/loading/Loading'
import Error from '../../components/error/Error'
import { Divider, Tag } from 'antd';
import { useNavigate } from "react-router-dom";

function Profile() {
    const user=JSON.parse(localStorage.getItem('currentUser'));
    const navigate=useNavigate()

    useEffect(()=>{
       if(!user){
        navigate("/login")
       }
    },[])
  return (
    <div className="ml-4 mt-3">
       <Tabs
    defaultActiveKey="1"
    items={[
      {
        label: `Profile`,
        key: '1',
        children: <MyProfile user={user}/>,
      },
      {
        label: `Bookings`,
        key: '2',
        children: <MyBookings user={user}/>,
      },
   
    ]}
  />
    </div>
  );
}

export function MyBookings({user}){
    const[bookings,setbookings]=useState([])
    const[loading,setloading]=useState(false)
    const[err,seterr]=useState()

    const fetchData=async()=>{
        try{
            setloading(true)
            const response=(await axios.post('https://orbiz-roomz-derver.onrender.com/orbizRooms/getbookingbyuserid',{userid:user._id})).data;
            setbookings(response)
            setloading(false)
          
          
        }
        catch(err){

            
            setloading(false)
            seterr(true)
        }
 
    }
    useEffect(()=>{
      fetchData()
    },[])

    const cancelBooking=async(bookingid,roomid)=>{
      try{
        setloading(true)
        const response=(await axios.post('https://orbiz-roomz-derver.onrender.com/orbizRooms/cancelBooking',{bookingid,roomid})).data
        setloading(false)
       
      }
      catch(err){
        console.log(err)
        setloading(false)
        seterr(true)
      }
    }
    return(
        <>
           <div className="row ">
            <div className="col-md-6 box-shadow">
            {loading && <Loading />}
            {bookings && bookings.map(booking=>{
                return <div>                  
                    <p>{booking.room}</p>
                    <p><span>BookingId :</span> {booking._id}</p>
                    <p><span>checkIn :</span> {booking.fromDate}</p>
                    <p><span>checkOut :</span> {booking.toDate}</p>
                    <p><span>Amount : </span>{booking.totalAmount}</p>
                    <p><span>Status : </span>{booking.status =="booked" ?( <Tag color="green">Confirmed</Tag>) :( <Tag color="red">Cancelled</Tag>)  }</p>

                    {booking.status !=="cancelled" && (<div className="float-right">
                      <button className="btn btn-dark" onClick={()=>{cancelBooking(booking._id,booking.roomId)}}>Cancel Booking</button>
                    </div>)}
                </div>
            })}

            </div>
           </div>
        </>
    )
}

export function MyProfile({user}){
    return(
        <>  
        <div className="row">
        <div className="col-md-6 box-shadow">
          <p>my profile</p>           
          <p ><span className="text-dark"> Name :</span>{user.name}</p>
          <p><span> Email :</span>{user.email}</p>
          <p><span>isAmin :</span> {user.isAdmin ? "Yes" : "No"}</p>
        </div>

        </div>
        </>
    )
}
export default Profile;
