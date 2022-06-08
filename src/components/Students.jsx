import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {
  useWindowWidth,
} from '@react-hook/window-size'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));



const Students = () => {
    const [students, setStudents] = React.useState([])
    const [year, setYear] = React.useState("")
    const [term, setTerm] = React.useState("")
    const [search, setSearch] = React.useState("")
    const onlyWidth = useWindowWidth()

    React.useEffect(()=>{
        getStudents()
        console.log(onlyWidth)
    }, [onlyWidth])

    const getStudents =()=>{
        axios.get(`http://localhost:8000/students?${year&&`year=${year}`}&${term&&`term=${term}`}&${search&&`q=${search}`}`).then((res)=>{
            setStudents(res.data)
        }).catch((err)=>{
          console.log(err)
        })
    }
  if(onlyWidth>650){  
 return (
    <div>
   <h3>Students List</h3>
   <div style={{display:"flex", justifyContent:"space-evenly", margin:"10px"}}>
   <TextField
        onChange={(e)=>{setSearch(e.target.value)}}
        id="input-with-icon-textfield"
        label="search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon></SearchIcon>
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Year</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={year}
          label="Year"
          onChange={(e)=>setYear(e.target.value)}
        >
          <MenuItem value={1}>first</MenuItem>
          <MenuItem value={2}>Second</MenuItem>
          <MenuItem value={3}>Third</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">term</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={term}
          label="Year"
          onChange={(e)=>setTerm(e.target.value)}
        >
          <MenuItem value={1}>first</MenuItem>
          <MenuItem value={2}>Second</MenuItem>
          <MenuItem value={3}>Third</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <Button onClick={getStudents} variant='contained'>search</Button>
   </div>
   <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Roll No.</StyledTableCell>
            <StyledTableCell align="right">Term</StyledTableCell>
            <StyledTableCell align="right">Year</StyledTableCell>
            <StyledTableCell align="right">contact No.</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.rollNumber}</StyledTableCell>
              <StyledTableCell align="right">{row.term}</StyledTableCell>
              <StyledTableCell align="right">{row.year}</StyledTableCell>
              <StyledTableCell align="right">{row.contact}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
 
  )}
    
    else{
      return(
          <div style={{width:"90%", margin:"auto", textAlign:"left"}}>
          {students.map((el)=>(
            <div style={{marginTop:"15px",padding:"15px",paddingLeft:"40px", boxShadow:"rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"}}>
              <div>name: {el.name}</div>
              <div>roll no: {el.rollNumber}</div>
              <div>term: {el.term} </div>
              <div>year: {el.year} </div>
              <div>contact: {el.contact} </div>
            </div>
        ))}
          </div>
      )
    }
  }



export default Students