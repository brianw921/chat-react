import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import actionCable from 'actioncable';
import { APP_CABLE_URL } from './constants';


const cable = actionCable.createConsumer(APP_CABLE_URL)
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App cable={cable}/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
