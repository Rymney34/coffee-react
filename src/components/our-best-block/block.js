import './our-best-block.css' 

import { useNavigate } from 'react-router-dom';

const ItemBlock = (props) =>  {

    const {img,title,price} = props

  const navigate = useNavigate();
        function Page (){
              navigate("/page1", 
                  {
                  state:{
                        
                        title,
                        price,
                   }});  
              console.log("page")
        }
    return (

             <div className="block-bx" onClick={Page}>
                    <img className="prod-image" src={img} alt="background" />
                    <h3 className='prod-title'>{title}</h3>
                    <p className='prod-price'>£{price}</p>
                 </div>
        
            
        )
 
    
 }


        
  
   
   


export default ItemBlock;