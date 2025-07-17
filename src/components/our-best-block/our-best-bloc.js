import './our-best-block.css' 
import Paper from '../../images/paper.png'
import ItemBlock from './block'
import img1 from '../../images/coffee-1.png'
import img2 from '../../images/coffee-2.png'
import img3 from '../../images/coffee-3.png'

import {Component} from 'react'

class OurBestBlock extends Component {

 
    render () {

        return (
            
                 <div className="wrapper">
                    <img className="bg-image" src={Paper} alt="background" />
                    <div className="centered-content">
                        <h2>Our best</h2>
                       

                    </div>
                     <div className='products-div'>

                            <ItemBlock 
                            img={img1}
                            title={"Solimo Coffee Beans 2 kg"}
                            price={200}/>

                            <ItemBlock 
                            img={img2}
                            title={"Presto Coffee Beans 1 kg"}
                            price={10}/>
                            <ItemBlock 
                            img={img3}
                            title={"AROMISTICO Coffee 1 kg"}
                            price={100}/>
                        </div>
                 </div>
            )
    }
    
  
   
   
}

export default OurBestBlock;