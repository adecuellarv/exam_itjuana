import React from 'react';
import Problem1 from './problems/Problem1';
import Problem2 from './problems/Problem2';
import './App.css';

function App() {
  return (
    <div className="content">
      <div className='col c50'>
        <Problem1 />
      </div>
      <div className='col c50'>
        <Problem2 />
      </div>
    </div>
  );
}

export default App;
