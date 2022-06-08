
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Events = () => {
    const [ongoing, setOngoing] = useState([])
    const [upcoming, setUpcoming] = useState([])
    useEffect(()=>{
       axios.get("http://localhost:8000/events") 
    },[])
  return (
    <div style={{ width:"100%", height:"100%" ,display:"flex", justifyContent:"space-around"}}>
        <div className='ongoing'>
            <div>Ongoing Events</div>

        </div>
        <div className='upcoming'>
            <div>Upcoming Events</div>
        </div>
    </div>
  )
}

export default Events