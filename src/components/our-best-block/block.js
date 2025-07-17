import './our-best-block.css' 

import {Component} from 'react'

import img1 from '../../images/coffee-1.png'

const ItemBlock = (props) =>  {

    const {img,title,price} = props
    return (

             <div className="block-bx">
                    <img className="prod-image" src={img} alt="background" />
                    <h3 className='prod-title'>{title}</h3>
                    <p className='prod-price'>£{price}</p>
                 </div>
        
            
        )
 
    
 }


        
  
   
   


export default ItemBlock;