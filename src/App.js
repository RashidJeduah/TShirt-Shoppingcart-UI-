import React from 'react';
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/sidebar';
import Mainpage from './components/mainpage';

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-2'>
          <Sidebar/>
        </div>
        <div className='col-md-10'>
          <Mainpage/>
        </div>
      </div>
    </div>
  );
}

export default App;
