import React from 'react';
import { Sun } from 'react-feather';
import Clock from '../Components/Weather/Clock';
import Date from '../Components/Weather/Date';



function Home() {
    
  return (
    <div className='content'>
      <div className='flex centered'>

        <Clock/>

        <Date/>

        <div className='divider'>
          <div className='flex BigWContainer'>
            <Sun size={100} className='icon' strokeWidth={0.8}/>
            <p className='BigW'>13°C</p>
          </div>

          <div className='flex smallW'>
            <p>max: 20°C</p>
            <p>min: 5°C</p>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default Home;