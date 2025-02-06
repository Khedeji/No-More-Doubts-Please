import React from 'react';
import './App.css';
import Navbar from './Components/Navbar.tsx';
import {  Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.tsx';
import AskQuestion from './Pages/AskQuestion.tsx';
import LoginPage from './Pages/LoginPage.tsx';
import SignupPage from './Pages/SignupPage.tsx';


function App() {
  return (
    
    <div >
     
      <Navbar/>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/AskQuestion' element={<AskQuestion/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/register' element={<SignupPage/>} />
        </Routes>
    </div>
  );
}

export default App;
