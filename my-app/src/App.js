import './App.css';
import React from "react";
//import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
//import landingTransition from './components/landingTransition';
import Header from './components/Header.js';
import Slidetrack from "./components/Slidetrack.js"
//import { AnimatePresence } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
        <landingTransition/>
        <Header />
        <Slidetrack />
        <Slidetrack />
    </div>
  );
}

export default App;
