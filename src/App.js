import {useState} from 'react';

function App() {

  const [date, setDate] = useState("");
  const [submitDate, setSubmitDate] = useState("");

  console.log(new Date())

  const displayDate = e => {
    e.preventDefault();
    setSubmitDate(date);
  }

  return (
   <div>
    <h2>Countdown Clock</h2>
    <form>
      <input
      value={date}
      placeholder="enter date"
      onChange={e => setDate(e.target.value)}
      />
      <button
      onClick={e => displayDate(e)}
      >Submit</button>
    </form>
    {submitDate && <p>{submitDate}</p>}
   </div>
  );
}

export default App;
