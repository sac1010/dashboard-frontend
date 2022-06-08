import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { PieChart } from 'react-minimal-pie-chart'

export const Pie = () => {
  const [term1, setTerm1] = useState("")
  const [term2, setTerm2] = useState("")
  const [term3, setTerm3] = useState("")
  useEffect(()=>{
    axios.get(`http://localhost:8000/students?term=1`).then((res)=>{
      setTerm1( res.data.length)
    })
    axios.get(`http://localhost:8000/students?term=2`).then((res)=>{
      setTerm2( res.data.length)
    })
    axios.get(`http://localhost:8000/students?term=3`).then((res)=>{
      setTerm3( res.data.length)
    })
  }, [])
  return (
    <div>
        <PieChart
  data={[
    { title: 'Term One', value: term1, color: '#E38627' },
    { title: 'Term Two', value: term2, color: '#C13C37' },
    { title: 'Term Three', value: term3, color: '#6A2135' },
  ]} animate={true} 

/>
    </div>
  )
}
