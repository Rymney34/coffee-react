import './about-item-block.css' 

import img from '../../../images/coffee.jpg'

import beansLogo from '../../../images/Beanslogo.png'

const AboutItemBlock = ( props) =>  {


 const {title,country,price} = props

    //  function noCountry ()  {
    //    return country || "Italy";
    // }

    function noCountry() {
        
    if (!country) {
        return "Italy"; // Return "Italy" if country is falsy (empty, null, undefined, etc.)
    }
        return country; // Otherwise, return the actual country value
    }

   
    return (
        
           

               <div className="about-item-block">
                    <img className="imgAboutBeans" src={img} alt="About Beans image"/>
            
                    <div className="paragraph-block">
                        <h2 className='h22'>About It</h2>
                        <img  className="beans-logo1" src={beansLogo} alt='beans-logo'/>
                        <div className='details-block'>  
                            <h3 className='prod-title'>
                                <b >Country: </b>{noCountry()}
                                
                            </h3>
                            <h3 className='prod-title'>Title: {title}</h3>
                            <p className="paragraph1">
                                <b>Description:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        <p className='prod-price1'><b>Price: £</b>{price}</p></div>
                    </div>

                    
                </div>
        
            
        )
 
    
 }

 export default AboutItemBlock
