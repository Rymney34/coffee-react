import './coffee-items.css'
import CoffeeItemBlock from '../coffee-items-block/coffee-item-block.js'

import img3 from '../../../images/coffee-3.png'

const CoffeeItems = () => {

        return (
            
                <div className="coffee-items-block">
                   <CoffeeItemBlock  
                            img={img3}
                            title={"Solimo Coffee Beans 2 kg"}
                            country={"Columbia"}
                            price={200}/>
                    {/* <CoffeeItemBlock  
                            img={img3}
                            title={"Solimo Coffee Beans 2 kg"}
                            country={"Brazil"}
                            price={200}/> */}
                </div>
            )
    

}

export default CoffeeItems;