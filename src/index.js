import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Heading from './heading';

ReactDOM.render(
  <React.StrictMode>
    <Heading />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

