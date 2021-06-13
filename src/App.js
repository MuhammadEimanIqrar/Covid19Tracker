import React from 'react';
import Navbar from './Components/Navbar';
import InfoPanel from './Components/infoPanel';
import Sidebar from './Components/Sidebar';

import './App.css';

function App() {
  return (
    <div className="App">
      <section>
        <Navbar />
        <Sidebar />
        {/* <InfoPanel /> */}
      </section>
    </div>
  );
}

export default App;
