import React from 'react'
import Events from '../components/Events';
import { Pie } from '../components/Pie';
import Students from '../components/Students';

const DashBoard = () => {
  return (
    <div className='App'>
        <div className='events'>
          <Events></Events>
        </div>
        <div className='students'>
            <Students></Students>
        </div>
        <div className='pie'>
            <h2>Termwise Data</h2>
            <Pie></Pie>
        </div>
    </div>
  )
}

export default DashBoard