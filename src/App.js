import React from 'react';
import './style.css';
import API from './api';

const App = () => {
  return (
    <div className="App">
      <form id="form">
        <label>
          Rider UUID:
          <input type="text" id="text" value="TEST" />
        </label>
        <input type="submit" value="Fetch driver emails" />
        <div id="results" />
      </form>
    </div>
  );
};

export default App;
