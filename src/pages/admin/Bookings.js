import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Loading from '../../components/loading/Loading';
import Error from '../../components/error/Error';

function Bookings() {
    const[bookings,setbookings]=useState([]);
    const[loading,setloading]=useState(false)
    const[err,seterr]=useState()

    const fetchData=async()=>{
        try{
            setloading(true)
          const data=(await axios.get(`${process.env.REACT_APP_BASE_URL}/orbizRooms/getAllBookings`)).data
          setloading(false)
          setbookings(data)
          
        }
        catch(err){
          console.log(err)
          setloading(false)
          seterr(true)
        }
    }
    useEffect(()=>{
         fetchData()
    },[])
  return (
    <div className='col-md-12'>
      <h1>Bookings</h1>
      {loading && <Loading />}
      <table className='table table-bordered table-dark'>
        <thead className=' box-shadow'>
            <tr>
                <th>Booking Id</th>
                <th>User Id</th>
                <th>Room</th>
                <th>From</th>
                <th>To</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            {bookings.length && (bookings.map(booking=>{
                return <tr>
                    <td>{booking._id}</td>
                    <td>{booking.userId}</td>
                    <td>{booking.room}</td>
                    <td>{booking.fromDate}</td>
                    <td>{booking.toDate}</td>
                    <td>{booking.status}</td>
                </tr>
            }))}
        </tbody>
      </table>
    </div>
  )
}

export default Bookings
