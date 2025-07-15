import './about-us-block.css' 
import beansLogo from '../../images/Beanslogo.png'

import {Component} from 'react'

class AboutUsBlock extends Component {

 
    render () {

        return (
            
                <div className="about">
                    <h3>About Us</h3>
                    <img  src={beansLogo} alt='beans-logo'/>
                    <p className='p1' >
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                    </p>
                    <p className='p2'>
                        Now residence dashwoods she excellent you. Shade being under his bed her, Much
                        read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                        horrible but confined day end marriage. Eagerness furniture set preserved far
                        recommend. Did even but nor are most gave hope. Secure active living depend sonrepair day ladies now.
                    </p>
                </div>
            )
    }
    
  
   
   
}

export default AboutUsBlock;