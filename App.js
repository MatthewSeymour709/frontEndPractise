import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
 
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' exact element={<Home />}/>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;