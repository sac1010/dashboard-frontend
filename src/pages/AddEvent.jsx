import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import axios from 'axios';

const AddEvent = () => {
  const [data, setData] = useState({
    name:"",
    information:"",
    startDate:new Date('2022-08-18T21:11:54'),
    endDate:new Date('2022-08-18T21:11:54'),
    registration:""
  })

  const handleChange = (e)=>{
    setData({
      ...data,
      [e.target.name]:e.target.value
    })
    console.log(data)
  }

  const addEvent = ()=>{
    if(!data.name|| !data.information){
      alert("please fill all the required fields")
      return
    }
    axios.post("http://localhost:8000/events", data).then((res)=>{
      alert("event created successfully")
    })
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <div className='add-event'>
      <h2>Create Event</h2>
      <div>
      <TextField onChange={handleChange} name="name" value={data.name} id="standard-basic" label="name" variant="standard" />
      <TextField onChange={handleChange} name="information" value={data.information} id="standard-basic" label="Information" variant="standard" />
      <TextField onChange={handleChange} name="registration" value={data.registration} id="standard-basic" label="Registration" variant="standard" />
      <DesktopDatePicker
          label="Start Date"
          inputFormat="MM/dd/yyyy"
          value={data.startDate}
          onChange={(e)=>setData({...data, startDate:e})}
          renderInput={(params) => <TextField {...params} />}
        />
      <DesktopDatePicker
          label="end Date"
          inputFormat="MM/dd/yyyy"
          value={data.endDate}
          onChange={(e)=>setData({...data, endDate:e})}
          renderInput={(params) => <TextField {...params} />}
        />
      <Button onClick={addEvent} variant='contained'>submit</Button>
      </div>
    </div>
    </LocalizationProvider>
  )
}

export default AddEvent