import './coffee-items.css'
import CoffeeItemBlock from '../coffee-items-block/coffee-item-block.js'

import img3 from '../../../images/coffee-3.png'

const CoffeeItems = ({data}) => {

         const elements = data.map(item => {
        const {id, ...itemProps} = item;

         return(
                <CoffeeItemBlock  
                            img={img3}
                            title={itemProps.title}
                            country={itemProps.country}
                            price={itemProps.price}/>
         )
        
        })
        return (
            <div className="coffee-items-wrapper">
                 <div className="coffee-items-block">
{/*                    
                   <CoffeeItemBlock  
                            img={img3}
                            title={"Solimo Coffee Beans 2 kg"}
                            country={"Brazil"}
                            price={200}/>
                    <CoffeeItemBlock  
                            img={img3}
                            title={"Solimo Coffee Beans 2 kg"}
                            country={"Kenya"}
                            price={200}/>
                    <CoffeeItemBlock  
                            img={img3}
                            title={"Solimo Coffee Beans 2 kg"}
                            country={"Brazil"}
                            price={200}/>
                    <CoffeeItemBlock  
                        img={img3}
                        title={"Solimo Coffee Beans 2 kg"}
                        country={"Brazil"}
                        price={200}/>
                    <CoffeeItemBlock  
                            img={img3}
                            title={"Solimo Coffee Beans 2 kg"}
                            country={"Brazil"}
                            price={200}/>
                     <CoffeeItemBlock  
                            img={img3}
                            title={"Solimo Coffee Beans 2 kg"}
                            country={"Brazil"}
                            price={200}/> */}
                            {elements}
                </div>
            </div>
               
            )
    

}

export default CoffeeItems;