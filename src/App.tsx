//import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Logo from './Logo.tsx';
import Timer from './Timer.tsx';

function App() {
  
  return (
    <>
      < Logo/ >
      <Routes>
         <Route path="/timer" element={<Timer />} />
         <Route path="/logo" element={<Logo />} />
       </Routes>
    </>
  )
}

export default App
