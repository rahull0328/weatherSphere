import './App.css';
import React from 'react';
import CurrentLocation from './currentLocation';
function App() {
  return (
    <React.Fragment>
      <div className='container'>
        <CurrentLocation />
      </div>
      Developed by{" "}
        <a href="https://www.rahull0328.github.io">
          Rahul Mehta
        </a>
        <a href="https://www.heetmehta18.github.io">
          Heet Mehta
        </a>
        <a href="https://www.github.com/urvalkheni">
          Urval Kheni
        </a>
    </React.Fragment>
  );
}

export default App;
