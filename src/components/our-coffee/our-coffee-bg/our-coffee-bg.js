import ourCoffeePic from "../../../images/coffee-shop.png"
import './our-coffee-bg.css';
import AppHeader from '../../app-header/app-header.js'

function OurCoffeeBg() {
  return (
    <div className="our-coffee-main">
      <div id="app-header-overlay">
          <AppHeader/>
      </div>
     
      <div className="coffee-bg">
        <h2>Our Coffee</h2>
      </div>
    </div>
  );
}

export default OurCoffeeBg;
