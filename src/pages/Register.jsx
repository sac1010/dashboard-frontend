import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from "@mui/material/InputLabel"

const Register = () => {
  return (
    <div style={{width:"100%", height:"100vh",  display:"flex", justifyContent:"center", alignItems:"center"}}>
        <div>
        <h1>Register</h1>
            <TextField id='outlined-basic' label="full name" variant="outlined"></TextField> <br />
            <TextField style={{marginTop:"20px"}} id="outlined-basic" label="username" variant="outlined" /><br />
            <TextField style={{marginTop:"20px"}} id="outlined-basic" label="password" variant="outlined" /><br />
            <InputLabel id="demo-simple-select-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
         
          label="Role"
          onChange={()=>{}}
        >
          <MenuItem value={"admin"}>Admin</MenuItem>
          <MenuItem value={"student"}>Student</MenuItem>
          <MenuItem value={"teacher"}>Teacher</MenuItem>
        </Select>
            <Button style={{marginTop:"20px"}} variant='contained'>Login</Button>
        </div>

    </div>
  )
}

export default Register