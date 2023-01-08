import React,{useState} from 'react'
import "./loading.css"

import FadeLoader from "react-spinners/FadeLoader";
function Loading() {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");


  return (

    <div style={{marginTop:"150px",marginLeft:"700px"}}>
        <div className="sweet-loading text-center" >

      <FadeLoader
        color="red"
        loading={loading}
        cssOverride=''
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
 
    </div>
  
  )
}

export default Loading
