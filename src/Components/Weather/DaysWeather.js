import { Sun } from 'react-feather';

const Card = () => {
    return(
        <div className='dividerTwo daysW contentWDays'>
            <div className='flex ContainerDays'>
            <Sun size={70} className='iconDays' strokeWidth={0.8}/>
            <p className='BigWdays'>13°C</p>
            </div>

            <div className='flex smallWDays'>
            <p>max: 20°C</p>
            <p>min: 5°C</p>
            </div>
        </div>
    );
}

function DaysWeather() {
  return (
    <div className='flex WDays'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}

export default DaysWeather