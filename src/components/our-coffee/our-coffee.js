import React from 'react';
import AppHeader from '../app-header/app-header.js'
import MainBgBlock from './our-coffee-bg/our-coffee-bg.js';
import AboutBeans from './about-our-beans/about-our-beans.js';
import CoffeeItems from './coffee-items/coffee-items.js';


import AppFooter from '../app-footer/app-footer.js';
import SearchFilter from './search-filter/search-filter.js';

function OurCoffee() {
  return (
   
     <div className="our-coffee">
        <link href='https://fonts.googleapis.com/css?family=Merienda' rel='stylesheet'></link>
       
           <MainBgBlock/> 
           <AboutBeans/>
           <SearchFilter/>
           <CoffeeItems/>

     </div>
  );
}

export default OurCoffee