import './App.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/Header.js';
import { MyCarousel } from './components/Carousel';
import { Slidetrack } from "./components/Slidetrack.js"
import Contact from "./components/Contact"
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import { useAuth0 } from '@auth0/auth0-react';

function App() {

const auth = useAuth0();

  // if (auth.isLoading) {
  //   return <p>Loading...</p>
  // }

  //  if (!auth.isAuthenticated) {
  // auth.loginWithRedirect();
  // }
  // console.log(auth.user);


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/">
        <Header />
        <MyCarousel />
        <Slidetrack />
          </Route>
        </Switch>
      </Router>    
    </div>
  );
}

export default App;
