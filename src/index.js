import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HelpList from './components/HelpList';
import MoneyOnBlood from './components/MoneyOnBlood';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
    <Routes>
      {/* <Route path="/" element={} /> */}
      <Route path="money-for-life" element={<HelpList />} />
      <Route path="blood-on-money" element={<MoneyOnBlood />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
