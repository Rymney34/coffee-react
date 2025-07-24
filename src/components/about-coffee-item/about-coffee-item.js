import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppHeader from '../app-header/app-header.js'
import { Link } from "react-router-dom";
import AboutItemBlock from './about-item/about-item-block.js';
import MainBgBlock from '../our-coffee/our-coffee-bg/our-coffee-bg.js';

import {useLocation} from 'react-router-dom';

const AboutCoffeeItems = () => {

 const location = useLocation();
    return (
            
            <div className="about-coffee-item">
             
                <MainBgBlock/> 
                <AboutItemBlock  title={location.state.title} country={location.state.country} price={location.state.price}/>
            </div>
       
    )
}

export default AboutCoffeeItems