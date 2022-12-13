import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from 'axios';

ReactDOM.createRoot(document.getElementById('root')).render(
  axios
  .get('https://webapp-tau-six.vercel.app/films/')
  .then(response => {
    const notes = response.data;
ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes} />)
  })
)
