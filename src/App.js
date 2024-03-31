import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Football from './Football';
import Basketball from './Basketball';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />

        <Route path="/football" element={<Football />} />
        <Route path="/basketball" element={<Basketball />} />
        {/* Add additional routes for other pages */}
      </Routes>
    </Router>
  );
}

export default App;
