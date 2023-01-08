import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert"



function AddRooms() {
  const [name, setname] = useState("");
  const [phoneNumber, setphone] = useState("");
  const [noofhouse, sethouseNo] = useState();
  const [no_of_rooms, setnoRooms] = useState();
  const [minimumStay, setminStay] = useState();
  const [maximumStay, maxminStay] = useState();
  const [size_of_room, setroomsize] = useState("");
  const [img1, setimg1] = useState();
  const [img2, setimg2] = useState();
  const [img3, setimg3] = useState();
  const [number_of_beds, setBeds] = useState();
  const [type, settype] = useState();
  const [rentperday, setrent] = useState();
  const [description, setdesc] = useState();
  const [amenties, setamenties] = useState();
  const[loading,setloading]=useState(false)
  const[err,seterr]=useState()
const addRoom=async()=>{
  const newroom={
    name,
    phoneNumber,
    noofhouse,
    no_of_rooms,
    minimumStay,
    maximumStay,
    size_of_room,
    imgUrl:[img1,img2,img3],
    number_of_beds,
    type,
    rentperday,
    description,
    amenties
  }

  try{
    setloading(true)
     const data=await (await axios.post('https://hotel-booking-app-orbiz-server.onrender.com/orbizrooms/addroomdata',newroom)).data
     console.log(data)
     setloading(false)
     await swal("Good !", "Your Room added sucessfully!", "success");
     window.location.href='/home'
  
  }
  catch(err){
    console.log(err)
    setloading(false)
    seterr(true)
    swal("oops!", "something went wrong!", "error");
  }
}
  return (
    <>
      <h5 className="mb-3">Fill the Room Details</h5>
      <div className="row ">
        <div className="col-md-5">
          <input
            type="text"
            name=""
            id=""
            placeholder="Room Name"
            className="form-control mb-3 "
            value={name}
            onChange={(e)=>{setname(e.target.value)}}
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Phone Number"
            className="form-control  mb-3"
            value={phoneNumber}
            onChange={(e)=>{setphone(e.target.value)}}
          />
          <input
            type="number"
            name=""
            id=""
            placeholder="number of house"
            className="form-control  mb-3"
            value={noofhouse}
            onChange={(e)=>{sethouseNo(e.target.value)}}
          />
          <input
            type="number"
            name=""
            id=""
            placeholder="Number of rooms"
            className="form-control  mb-3"
            min={1}
            value={no_of_rooms}
            onChange={(e)=>{setnoRooms(e.target.value)}}
          />
          <input
            type="number"
            name=""
            id=""
            placeholder="Minimum stay"
            className="form-control  mb-3"
            min={1}
            value={minimumStay}
            onChange={(e)=>{setminStay(e.target.value)}}
          />
          <input
            type="number"
            name=""
            id=""
            placeholder="Maximum stay"
            className="form-control  mb-3"
            min={1}
            value={maximumStay}
            onChange={(e)=>{maxminStay(e.target.value)}}
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Size of room"
            className="form-control  mb-3"
            value={size_of_room}
            onChange={(e)=>{setroomsize(e.target.value)}}
          />
        </div>
        <div className="col-md-5">
          <input
            type="text"
            name=""
            id=""
            placeholder="Img-url-1"
            className="form-control  mb-3"
            value={img1}
            onChange={(e)=>{setimg1(e.target.value)}}
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Img-url-2"
            className="form-control  mb-3"
            value={img2}
            onChange={(e)=>{setimg2(e.target.value)}}
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Img-url-3"
            className="form-control  mb-3"
            value={img3}
            onChange={(e)=>{setimg3(e.target.value)}}
          />
          <input
            type="text"
            name=""
            id=""
            className="form-control  mb-3"
            placeholder="No of beds"
            value={number_of_beds}
            onChange={(e)=>{setBeds(e.target.value)}}
          />
          <input
            type="text"
            name=""
            id=""
            className="form-control  mb-3"
            placeholder="type"
            value={type}
            onChange={(e)=>{settype(e.target.value)}}
          />
          <input
            type="number"
            name=""
            id=""
            className="form-control  mb-3"
            placeholder="Rent per day"
            min={100}
            value={rentperday}
            onChange={(e)=>{setrent(e.target.value)}}
          />
          <input
            type="text"
            name=""
            id=""
            className="form-control  mb-3"
            placeholder="Description"
            value={description}
            onChange={(e)=>{setdesc(e.target.value)}}
          />
          <input
            type="text"
            name=""
            id=""
            className="form-control  mb-3"
            placeholder="Amenties"
            value={amenties}
            onChange={(e)=>{setamenties(e.target.value)}}
          />
        </div>
      </div>
      <div className="float-right">
        <button className="btn btn-dark" onClick={addRoom}>Add Room</button>
      </div>
    </>
  );
}

export default AddRooms;
