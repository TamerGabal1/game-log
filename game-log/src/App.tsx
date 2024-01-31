import React from 'react';
import logo from './logo.svg';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
      </Routes>
    </BrowserRouter>
    // <div>
    //   <h1 className="text-3xl text-center">Game Log</h1>
    // </div>
  );
}

export default App;
