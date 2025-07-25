
import MainBg2 from '../main-bg/main-bg2.js';

import AppFooter from '../app-footer/app-footer.js';
import mainbg from '../../images/headerfor.png';
import AboutBeans from '../our-coffee/about-our-beans/about-our-beans.js';
import hotCoffee from '../../images/hot-coffee.png'
import CoffeeItems from '../our-coffee/coffee-items/coffee-items.js';

function ForYourPleasure({data}) {
  return (
   
     <div className="for-pleasure">
       
            <MainBg2 mainbg ={mainbg}/>
                
           
            <AboutBeans aboutOurBeans={hotCoffee} title="About It"/>
            
              <div style={{marginTop: "60px"}}>
                <CoffeeItems data={data}/>
              </div> 
         
           
            <AppFooter></AppFooter>
     </div>
  );
}

export default ForYourPleasure