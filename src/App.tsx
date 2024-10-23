//import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Logo from './Logo.tsx';
import Timer from './Timer.tsx';

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Logo />} />
        <Route path="/logo" element={<Logo />} />
        <Route path="/timer" element={<Timer />} />
       </Routes>
    </>
  )
}

export default App
