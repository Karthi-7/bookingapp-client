import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Tabs } from 'antd';
import Bookings from "./Bookings";
import Rooms from "./Rooms";
import User from "./User";
import AddRooms from "./AddRooms";

function AdminPage() {
  const navigate=useNavigate()
    useEffect(()=>{
     if(!JSON.parse(localStorage.getItem('currentUser')).isAdmin){
       navigate("/home")

     }
    },[])
  return (
    <div className="mt-3 ml-3 box-shadow mr-3">
      <h1 className="text-center fw-bold ">Admin panel</h1>
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            label: `Bookings`,
            key: "1",
            children: <Bookings />,
          },
          {
            label: `Rooms`,
            key: "2",
            children: <Rooms />,
          },
          {
            label: `Add Room`,
            key: "3",
            children: <AddRooms />,
          },
          {
            label: `User`,
            key: "4",
            children:<User />,
          },
        ]}
      />
    </div>
  );
}

export default AdminPage;
