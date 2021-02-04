import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  const [values, setValues] = useState([{id:1, name:''}]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/values').then((response) => {
      setValues(response.data)
    })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {values.map((value: any) => (
            <li key={value.id}>{value.name}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
