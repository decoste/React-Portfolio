import React, { useState } from "react";
import Nav from './components/Nav';
import Home from './components/Home';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {

  return (
   <>
  
   <Nav/>
   < Home />
 
  
   Hello!
   </> 
  )
}

export default App;
