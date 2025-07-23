import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppHeader from '../app-header/app-header.js'
import { Link } from "react-router-dom";
import AboutItemBlock from './about-item/about-item-block.js';
import MainBgBlock from '../our-coffee/our-coffee-bg/our-coffee-bg.js';

const AboutCoffeeItems = () => {


    return (
            
            <div className="about-coffee-item">
             
                <MainBgBlock/> 
                <AboutItemBlock/>
            </div>
       
    )
}

export default AboutCoffeeItems