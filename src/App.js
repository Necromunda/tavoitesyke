import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import { Activity } from 'react-bootstrap-icons';
import { UniversalAccess } from 'react-bootstrap-icons';
import './App.css';

function App() {
  const [age, setAge] = useState(0)
  const [lower, setlower] = useState(0)
  const [upper, setUpper] = useState(0)

  const calcLimits = () => {
    if (age <= 0 || isNaN(age)) {
      setlower(0)
      setUpper(0)
    } else {
      const y = (220 - age) * 0.85
      const x = (220 - age) * 0.65
      setlower(x.toFixed(0))
      setUpper(y.toFixed(0))
    }
  }

  return (
    <div className='main'>
      <h2>Heart rate limits calculator</h2>
      <form>
        <div>
          <label>Age <UniversalAccess /></label>
          <input type="text" placeholder="40" value={age} onChange={e => setAge(e.target.value)}></input>
        </div>
        <div>
          <label>Heart rate limits <Activity /></label>
          <output>{lower} - {upper}</output>
        </div>
        <Button variant="outline-primary" onClick={calcLimits}>Calculate</Button>{' '}
      </form>
    </div>
  );
}

export default App;
