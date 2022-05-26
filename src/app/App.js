import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/home/home';
import Info from '../components/info/info';
import Nav from '../components/nav/Nav';

function App() {
  return (
    <Router>
      <Nav />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Info/:countryId" element={<Info />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
