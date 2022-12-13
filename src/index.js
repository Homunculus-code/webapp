import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from 'axios';

ReactDOM.createRoot(document.getElementById('root')).render(
  axios
  .get('http://localhost:3001/films')
  .then(response => {
    const notes = response.data;
ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes} />)
  })
)