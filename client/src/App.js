import React, { useState } from "react";
import Nav from './components/Nav';
import Home from './components/Home';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {

  return (
<div>
<Nav/>
   <Router>
   <div className="App">
     <Route exact path="/" component={Home} />
     </div>
   </Router>
   </div>

  )
}

export default App;
