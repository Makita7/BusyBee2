import moment from 'moment';
import { useEffect, useState } from 'react';


function Clock(){
    const [time, setTime] = useState(moment().format('h:mm'));
    const [timeTwo, setTimeTwo] = useState(moment().format('A'));

    useEffect(() => {
      const Interval = setInterval(() => {
        setTime(moment().format('h:mm'));
        setTimeTwo(moment().format('A'))
      }, 20000)
    }, [time])

    return(
      <div className="clock flex divider">
          <p className='time'>{time}</p>
          <p className="pm">{timeTwo}</p>
      </div>
    );
  }

  export default Clock;