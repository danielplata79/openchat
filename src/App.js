import './App.css';
import React from "react";
import Sidebar from './Sidebar';
import "./App.css"

function App() {
  return (
    // BEM Naming convention
    <div className="app">
        <div className='app_body'>
          <Sidebar />
          {/* Chat */}
        </div>
    </div>
  );
}

export default App;
