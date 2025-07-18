import './our-best-block.css' 



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