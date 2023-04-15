import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import SingleNote from './SingleNote';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App= ()=>{
  return(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/NoteId/:id" element={<SingleNote/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
