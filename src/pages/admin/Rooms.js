import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Loading from '../../components/loading/Loading';
import Error from '../../components/error/Error';

function Rooms() {
    const[rooms,setrooms]=useState([]);
    const[loading,setloading]=useState(false)
    const[err,seterr]=useState()

    const fetchData=async()=>{
        try{
            setloading(true)
          const data=(await axios.get('https://hotel-booking-app-orbiz-server.onrender.com/orbizRooms/getdata')).data.data
          setrooms(data)
          console.log("rooms",rooms)
          setloading(false)
          
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
      <h1>Rooms</h1>
      {loading && <Loading />}
      <table className='table table-bordered table-dark'>
        <thead className=' box-shadow'>
            <tr>
                <th>Room Id</th>
                <th>Name</th>
                <th>Type</th>
                <th>Rent per day</th>
                <th>Phone Number</th>
               
            </tr>
        </thead>
        <tbody>
            {rooms.length && (rooms.map(room=>{
                return <tr>
                    <td>{room._id}</td>
                    <td>{room.name}</td>
                    <td>{room.type}</td>
                    <td>{room.rentperday}</td>
                    <td>{room.phoneNumber}</td>
                </tr>
            }))}
        </tbody>
      </table>
    </div>
  )
}

export default Rooms