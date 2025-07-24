import React from 'react';
import './app.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "../homePage/homePage"
import OurCoffee from '../our-coffee/our-coffee';
import AboutCoffeeItems from '../about-coffee-item/about-coffee-item';
import ForYourPleasure from '../for-your-pleasure/for-your-pleasure';

function App() {
  return (
   
     <Router>
       <link href='https://fonts.googleapis.com/css?family=Merienda' rel='stylesheet'></link>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ourCoffee" element={<OurCoffee />} />
        <Route path="/page1" element={<AboutCoffeeItems />} />
        <Route path="/forPleasure" element={<ForYourPleasure />} />
      </Routes>

      
    </Router>
  );
}

export default App;
