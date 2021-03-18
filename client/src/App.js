import React, { useState } from "react";
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Portfolio from './components/Portfolio';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {

  return (
<div>

   <Router>
     
   <div className="App">
   <Nav/>
     <Route exact path="/" component={Home} />
     <Route exact path="/contact" component={Contact} />
     <Route exact path="/education" component={Education} />
     <Route exact path="/certifications" component={Certifications} />
     <Route exact path="/portfolio" component={Portfolio} />
     <Footer />
     </div>
     
   </Router>
   </div>

  )
}

export default App;
