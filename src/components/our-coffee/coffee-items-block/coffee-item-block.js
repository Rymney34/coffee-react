import './coffee-item-block.css' 



const CoffeeItemBlock = (props) =>  {

    const {img,title, country,price} = props
    return (

             <div className="block-bx1">
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