import './our-best-block.css' 
import Paper from '../../images/paper.png'
import {itemBlock }from './block'

import {Component} from 'react'

class OurBestBlock extends Component {

 
    render () {

        return (
            
                 <div className="wrapper">
                    <img className="bg-image" src={Paper} alt="background" />
                    <div className="centered-content">
                        <h3>Our Best</h3>
                        
                    </div>
                 </div>
            )
    }
    
  
   
   
}

export default OurBestBlock;