import React from 'react'
import Home from './home/Home';

import { Route, Routes } from "react-router-dom"
import Courses from "./courses/Courses"
import Signup from './components/Signup';
import Contect from './components/Contect';




const App = () => {
  return(
    <>
    {/* <Home/>
    <Course/> */}
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Course" element={<Courses/>} />
      <Route path="/Course/Contect" element={<Contect/>} />

      <Route path="/signup" element={<Signup/>} />
    </Routes>
    </div>
    </>
     
    
  );
};

export default App