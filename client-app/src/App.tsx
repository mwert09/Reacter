import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import {Header, Icon, List} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

function App() {

  const [values, setValues] = useState([{id:1, name:''}]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/values').then((response) => {
      setValues(response.data)
    })
  }, []);

  return (
    <div>
      <Header as='h2'>
        <Icon name='users'/>
        <Header.Content>Reacter</Header.Content>
      </Header>
      <List>
        {values.map((value: any) => (
          <List.Item key={value.id}>{value.name}</List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;
