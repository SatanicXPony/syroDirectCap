import './App.css';
import React from "react";
//import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
//import landingTransition from './components/landingTransition';
import Header from './components/Header.js';
import Carousel from './components/Carousel';
import Slidetrack from "./components/Slidetrack.js"
//import { AnimatePresence } from 'framer-motion';


function App() {
  return (
    <div className="App">
        <landingTransition/>
        <Header />
        <Carousel/>
        <Slidetrack />
        <Slidetrack />
    </div>
  );
}

export default App;
