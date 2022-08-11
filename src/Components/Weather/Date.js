import moment from "moment"

function Date() {
    let Day = moment().format('ddd D'); 
    let Year = moment().format('YYYY'); 
  return (
    <div className="divider">
        <p className="date">{Day}</p>
        <p className="year">{Year}</p>
    </div>
  )
}

export default Date