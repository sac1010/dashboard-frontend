import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const AddStudent = () => {
  return (
    <div className='add-event'>
      <div>
      <TextField id="standard-basic" label="name" variant="standard" />
      <TextField id="standard-basic" label="roll no" variant="standard" />
      <TextField id="standard-basic" label="year" variant="standard" />
      <TextField id="standard-basic" label="term" variant="standard" />
      <TextField id="standard-basic" label="contact" variant="standard" />
      <Button variant='contained'>add student</Button>
      </div>

    </div>
  )
}

export default AddStudent