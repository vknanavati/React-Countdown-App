import {useState, useEffect} from 'react';

function App() {

  const [date, setDate] = useState("");
  const [submitDate, setSubmitDate] = useState("");
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("")
  const [countdown, setCountdown] = useState(false)


  const handleClick = (e) => {
    e.preventDefault();
    setSubmitDate(date);
    setCountdown(true);
    calculateTime(date)
  }
  const calculateTime = (userDate) => {
    /*parse parses the date string and returns the
    number of milliseconds. */
    const timeMS = Date.parse(userDate) -
    Date.parse(new Date());

    setDays(Math.floor(timeMS/(1000*60*60*24)));
    setHours(Math.floor((timeMS/(1000*60*60))%24));
    setMinutes(Math.floor((timeMS/1000/60)%60));
    setSeconds(Math.floor((timeMS/1000)%60));
  }
  /*If submitDate is true then countdown will start.
  setInterval calls a function at specified intervals.
  In this case calculateTime gets called every 1000 milliseconds
  to update the countdown. */
    useEffect(()=>{
      if (submitDate) {
        const interval = setInterval(()=>{
          calculateTime(submitDate);
        }, 1000);
        return () => clearInterval(interval)
      }
    }, [submitDate])

  return (
   <div className="body">
    <h2>Countdown Clock</h2>
    <form>
      <input
      value={date}
      placeholder="enter date"
      onChange={e => setDate(e.target.value)}
      />
      <button
      onClick={e => handleClick(e)}
      >Submit</button>
    </form>
    <div>
      {countdown && (
        <>
        {<span>{days !=="" ? `${days} days` : ""} </span>}
        {<span>{hours !=="" ? `${hours} hours` : ""} </span>}
        {<span>{minutes !=="" ? `${minutes} minutes` : ""} </span>}
        {<span>{seconds !=="" ? `${seconds} seconds`: ""} </span>}
        </>
      )}
    </div>
   </div>
  );
}

export default App;
