import React, { useState } from 'react';
import Home from "./components/Home";
import Uploader from "./components/Uploader";
import Signup from "./components/Signup";
import Login from "./components/Login";

import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import './App.css';
import Graph from './components/Graph';

function App() {

  return (
    <div className="App">
    
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/Uploader' element={<Uploader/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Signup' element={<Signup/>} />
        <Route path='/Graph' element={<Graph/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
