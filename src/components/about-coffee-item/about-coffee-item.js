
import AboutItemBlock from './about-item/about-item-block.js';
import MainBgBlock from '../our-coffee/our-coffee-bg/our-coffee-bg.js';
import AppFooter from '../app-footer/app-footer.js';
import {useLocation} from 'react-router-dom';

const AboutCoffeeItems = () => {

 const location = useLocation();
    return (
            
            <div className="about-coffee-item">
             
                <MainBgBlock/> 
                <AboutItemBlock  title={location.state.title} country={location.state.country} price={location.state.price}/>
                
            <AppFooter></AppFooter>
            </div>
       
    )
}

export default AboutCoffeeItems