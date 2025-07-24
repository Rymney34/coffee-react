import './main-bg2.css' 
import beansLogo from '../../images/Beanslogo.png'


import AppHeader from '../app-header/app-header.js'

const MainBg2 = (props) => {

const {mainbg} = props;

        return (
            
                 <div className="our-coffee-main">
      <div id="app-header-overlay">
          <AppHeader/>
      </div>
     
      <div className="backgroundImg">
        <h2 className='titleh2'>For your Pleasure</h2>
         <img className='bgImage' src={mainbg} alt="main-bg"/>
      </div>
      
    </div>
            )
    }
    
  
   
   


export default MainBg2;