import './App.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
//import landingTransition from './components/landingTransition';
import Header from './components/Header.js';
import { MyCarousel } from './components/Carousel';
import Slidetrack from "./components/Slidetrack.js"
//import { AnimatePresence } from 'framer-motion';
import Contact from "./components/Contact"


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/contact">
            <Contact/>
          </Route>

          <Route path="/">
          <landingTransition/>
        <Header />
        <MyCarousel />
        <Slidetrack />
        <Slidetrack />
          </Route>
        </Switch>
      </Router>
        
    </div>
  );
}

export default App;
