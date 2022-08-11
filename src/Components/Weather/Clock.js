import moment from 'moment';


function Clock(){
    let Time = moment().format('h:mm');
    let TimeTwo = moment().format('A');
  
    return(
      <div className="clock flex divider">
          <p className='time'>{Time}</p>
          <p className="pm">{TimeTwo}</p>
      </div>
    );
  }

  export default Clock;