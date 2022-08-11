import { Sun } from 'react-feather';

function Weather() {
  return (
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
  )
}

export default Weather