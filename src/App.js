import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Football from './Football';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />

        <Route path="/football" element={<Football />} />
        {/* Add additional routes for other pages */}
      </Routes>
    </Router>
  );
}

export default App;
