import  DashBoard  from '../pages/DashBoard'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddEvent from '../pages/AddEvent'
import AddStudent from '../pages/AddStudent'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<DashBoard></DashBoard>}></Route>
            <Route path='/addEvent' element={<AddEvent></AddEvent>}></Route>
            <Route path='/addStudent' element={<AddStudent></AddStudent>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes