import './coffee-item-block.css' 

import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const CoffeeItemBlock = (props) =>  {

  const navigate = useNavigate();
        function Page (){
              navigate("/page1");  
              console.log("page")
        }
    const {img,title, country,price} = props
    return (
   
             <div className="block-bx1"  onClick={Page}>
                    <img className="prod-image" src={img} alt="background" />
                    <h3 className='prod-title'>{title}</h3>
                    <div className="country-price">
                      <h4 className="prod-country">{country}</h4>
                      <p className='prod-price1'>£{price}</p>
                    </div>
                   
              </div>
    
            
        )
 
    
 }


        
  
   
   


export default CoffeeItemBlock;