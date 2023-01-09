import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Loader from "../../components/loading/Loading"

function User() {
    const[users,setusers]=useState([]);
    const[loading,setloading]=useState(false)
    const[err,seterr]=useState()

    const fetchData=async()=>{
        try{
            setloading(true)
            const data=(await axios.get('https://orbiz-roomz-derver.onrender.com/orbizRooms/users/getdata')).data
          setusers(data)
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
    <div className='row'>
    <div className="col-md-12">
         {loading && <Loader />}
        <h1>Users</h1>
        <table className='table table-dark table-bordered'>
        <thead>
            <tr>
                <th>user Id</th>
                <th> Name</th>
                <th>Email</th>
                <th>is Admin</th>
            </tr>
        </thead>
        <tbody>
            {users && (users.map(user=>{
                return <tr>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.isAdmin ? "Yes" : "No"}</td>
                </tr>
            }))}
        </tbody>

        </table>
    </div>

      
    </div>
  )
}

export default User
