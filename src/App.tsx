import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './Logo';

function App() {
  

  return (
    <>
      <Routes>
         <Route path="/timer" element={<Timer />} />
         <Route path="/logo" element={<Logo />} />
       </Routes>
    </>
  )
}

export default App
