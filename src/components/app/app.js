import React from 'react';
import './app.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "../homePage/homePage"
import OurCoffee from '../our-coffee/our-coffee';
import AboutCoffeeItems from '../about-coffee-item/about-coffee-item';

function App() {
  return (
   
     <Router>
       <link href='https://fonts.googleapis.com/css?family=Merienda' rel='stylesheet'></link>
      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/ourCoffee" element={<OurCoffee />} />
        <Route path="/page1" element={<AboutCoffeeItems />} />
      </Routes>

      
    </Router>
  );
}

export default App;
