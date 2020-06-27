import React from 'react';
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/sidebar';
import Mainpage from './components/mainpage';

function App() {
  return (
    <div class='container'>
      <div class='row'>
        <div class='col-2'>
          <Sidebar/>
        </div>
        <div class='col-10'>
          <Mainpage/>
        </div>
      </div>
    </div>
  );
}

export default App;
