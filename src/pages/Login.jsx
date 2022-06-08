import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
export const Login = () => {
  return (
    <div style={{width:"100%", height:"100vh",  display:"flex", justifyContent:"center", alignItems:"center"}}>
        <div>
            <h1>Login</h1>
            <TextField  id="outlined-basic" label="username" variant="outlined" /><br />
            <TextField style={{marginTop:"20px"}} id="outlined-basic" label="password" variant="outlined" /><br />
            <Button style={{marginTop:"20px"}} variant='contained'>Login</Button>
        </div>

    </div>
  )
}
