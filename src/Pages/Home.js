import Clock from '../Components/Weather/Clock';
import Date from '../Components/Weather/Date';
import DaysWeather from '../Components/Weather/DaysWeather';
import Weather from '../Components/Weather/Weather';



function Home() {
  return (
    <div className='content'>
      <div className='flex centered contentWOne'>

        <Clock/>

        <Date/>

        <Weather/>
      </div>

      <hr className='WlineTop'/>
      <DaysWeather/>
      <hr className='WlineBottom'/>
    </div>
  )
}

export default Home;