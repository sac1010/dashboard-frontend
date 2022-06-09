
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SimpleBackdrop from './SimpleBackdrop'

const Events = () => {
    const [ongoing, setOngoing] = useState([])
    const [upcoming, setUpcoming] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
      setLoading(true)
       axios.get("https://dashboard1-backend.herokuapp.com/events").then((res)=>{
         let cur = new Date().getTime()
        const up = res.data.filter((el)=>{
          const startTime = new Date(el.startDate).getTime()
          return(
            startTime>cur
          )
        })
        console.log(up)
        setUpcoming((up))
        
        const on = res.data.filter((el)=>{
          const startTime = new Date(el.startDate).getTime()
          const endTime =  new Date(el.endDate).getTime()
          return(
            cur>startTime && cur<endTime
          )
        })
        console.log(on)
        setOngoing(on)
        setLoading(false)
       })

    },[])
  return (
    <div style={{ width:"100%", height:"100%" ,display:"flex", justifyContent:"space-around"}}>
      <SimpleBackdrop open={loading}></SimpleBackdrop>
        <div className='ongoing'>
            <div>Ongoing Events</div>

        </div>
        <div className='upcoming'>
            <div>Upcoming Events</div>
            <ul>
              {upcoming.map((el)=><li>{el.name}</li>)}
            </ul>
        </div>
    </div>
  )
}

export default Events