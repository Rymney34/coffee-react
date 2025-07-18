import React from 'react';
import AppHeader from '../app-header/app-header.js'
import MainBgBlock from '../main-bg/main-bg-block.js';
import AboutUsBlock from '../about-us-block/about-us-block.js';
import OurBestBlock from '../our-best-block/our-best-bloc.js';
import AppFooter from '../app-footer/app-footer.js';

function Home() {
  return (
   
     <div className="App">
       
            <MainBgBlock>
                
            </MainBgBlock>
            <AboutUsBlock></AboutUsBlock>
            <OurBestBlock></OurBestBlock>
            <AppFooter></AppFooter>
     </div>
  );
}

export default Home