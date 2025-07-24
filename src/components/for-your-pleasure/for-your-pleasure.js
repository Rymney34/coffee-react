import React from 'react';
import AppHeader from '../app-header/app-header.js'
import MainBg2 from '../main-bg/main-bg2.js';
import AboutUsBlock from '../about-us-block/about-us-block.js';
import OurBestBlock from '../our-best-block/our-best-bloc.js';
import AppFooter from '../app-footer/app-footer.js';
import mainbg from '../../images/headerfor.png';

function ForYourPleasure() {
  return (
   
     <div className="for-pleasure">
       
            <MainBg2 mainbg ={mainbg}>
                
            </MainBg2>
            <AppFooter></AppFooter>
     </div>
  );
}

export default ForYourPleasure