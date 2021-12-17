import './App.css';
import React, { useState, useEffect } from 'react';
import Onboarding from './components/onboarding';

const axios = require('axios');
export const baseUrl = "http://localhost:3333"; //should be in environment


const App = () => {

  const [merchandise, setMerchandise] = useState(null);

  useEffect(() => {
    axios.get(`${baseUrl}/users/1`, {}).then((response) => {
      if (response.data.merchandise_id) {
        setMerchandise({
          id: response.data.merchandise_id,
          hash: response.data.merchandise_hash
        });
      }
      else {
        axios.post(`${baseUrl}/merchandise`, {}).then((response) => {
          setMerchandise({
            id: response.data.id,
            hash: response.data.hash
          })
        });
      }
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {merchandise && <Onboarding merchandiseId={merchandise.id} merchandiseHash={merchandise.hash} />}
      </header>
    </div >
  );
}

export default App;
