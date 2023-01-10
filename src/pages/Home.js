import React,{useEffect,useContext, useState} from 'react'
import axios from "axios"
import Room from '../pages/rooms/Room'
import Loading from '../components/loading/Loading'
import Error from '../components/error/Error'
import { DatePicker, Space } from 'antd';
import moment from "moment";
const { RangePicker } = DatePicker;
function Home() {

    //useState to update the states
    const [data,setdata]=useState([])
    const [duplicateRoom,setduplicateRoom]=useState([])
    const[loading,setloading]=useState()
    const[err,seterr]=useState()
    const [checkin,setcheckin]=useState("")
    const [checkout,setcheckout]=useState("")
    const[searchKey,setsearchKey]=useState('')
    const [type,settype]=useState('All')
    

    //fetch data
     useEffect(()=>{
        fetchData()

     },[])

    //axios func to fetch datas
    const fetchData=async()=>{
        try{
            setloading(true)
            const response=(await axios.get('https://orbiz-roomz-derver.onrender.com/orbizRooms/getdata')).data.data
            console.log("res",response)
            setdata(response)
            setduplicateRoom(response)
            setloading(false)
        }
       catch(err){
        seterr(true)
        console.log(err)
        setloading(false)
       }

    }

    //date functionality
    const filterbyDate=(dates)=>{
      setcheckin(dates[0].format('DD-MM-YYYY'))
      setcheckout(dates[1].format('DD-MM-YYYY'))

      var temproom=[]
      var availability=false
      for(const room of duplicateRoom){
        if(room.currentBookings.length > 0){
          for(const booking of room.currentBookings){
            if(!moment(dates[0].format('DD-MM-YYYY')).isBetween(booking.fromDate,booking.toDate) &&
            (!moment(dates[1].format('DD-MM-YYYY')).isBetween (booking.fromDate,booking.toDate)))
            {
              if(
                dates[0].format('DD-MM-YYYY') !== booking.fromDate &&
                dates[0].format('DD-MM-YYYY') !== booking.toDate &&
                dates[1].format('DD-MM-YYYY') !== booking.fromDate &&
                dates[1].format('DD-MM-YYYY') !== booking.toDate 


              ){

                availability=true
              }
            }

          }
        }
         if(availability == true || room.currentBookings.length == 0){
              temproom.push(room)
              setdata(temproom)
         }
       
      }
    

    }
   
 const filterbySearch=()=>{
    const temprooms=duplicateRoom.filter(room=>room.name.toLowerCase().includes(searchKey.toLowerCase()))
    setdata(temprooms)
 }

 const filterbyType=(e)=>{
  settype(e)
  if(e!=="all"){
    const temprooms=duplicateRoom.filter(room=>room.type.toLowerCase() == e.toLowerCase())
  
    setdata(temprooms)

  }
  else {
    setdata(duplicateRoom)
  }  
 }

  return (
    <div className='container'>
    <div className="row mt-5">
    <div className="col-md-3">
    <RangePicker format='DD-MM-YYYY' onChange={filterbyDate} className="date"/>
    </div>
    <div className="col-md-3">
      <input type="text" name="" 
      className='form-control' 
      id=""
       placeholder='search rooms' 
        value={searchKey}
        onChange={(e)=>{setsearchKey(e.target.value)}}
        onKeyUp={filterbySearch}
       />
    </div>
    <div className="col-md-3">
    <select name="" id=""  className='form-control ' value={type} onChange={(e)=>{filterbyType(e.target.value)}}>
     {/* <option value="">select</option> */}
      <option value="all">All</option>
      <option value="deluxe">Delux</option>
      <option value="non-deluxe">Non Delux</option>
    </select>

    </div>
  
    
    </div>
     <div className="row justify-content-center">
     {loading ? (<Loading />) : (data.map((item)=>(
        <div className="col-md-10 mt-2 ">
            <Room room={item} checkin={checkin} checkout={checkout} />
        </div>

        
      )))}

     </div>
    
    </div>
  )
}

export default Home
