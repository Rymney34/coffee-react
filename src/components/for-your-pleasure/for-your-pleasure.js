import React from 'react';
import AppHeader from '../app-header/app-header.js'
import MainBg2 from '../main-bg/main-bg2.js';
import AboutUsBlock from '../about-us-block/about-us-block.js';
import OurBestBlock from '../our-best-block/our-best-bloc.js';
import AppFooter from '../app-footer/app-footer.js';
import mainbg from '../../images/headerfor.png';
import AboutBeans from '../our-coffee/about-our-beans/about-our-beans.js';
import hotCoffee from '../../images/hot-coffee.png'
import CoffeeItems from '../our-coffee/coffee-items/coffee-items.js';

function ForYourPleasure({data}) {
  return (
   
     <div className="for-pleasure">
       
            <MainBg2 mainbg ={mainbg}>
                
            </MainBg2>
            <AboutBeans aboutOurBeans={hotCoffee} title="About It"/>
            
                <CoffeeItems data={data}/>
         
           
            <AppFooter></AppFooter>
     </div>
  );
}

export default ForYourPleasure