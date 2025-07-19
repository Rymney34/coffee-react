import beansLogo from '../../../images/Beanslogo.png'

import './about-our-beans.css'

import aboutOurBeans from '../../../images/girl.jpg'

const AboutBeans = () => {

        return (
            
                <div className="AboutBenas1">
                    <div className="about-beans-block">
                        <img className="imgAboutBeans" src={aboutOurBeans} alt="About Beans image"/>
                  
                        <div className="paragraph-block">
                            <h2>About our beans</h2>
                            <img  className="beans-logo1" src={beansLogo} alt='beans-logo'/>

                            <p className="paragraph1">
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            </p>
                            <p className="paragraph1">
                                Afraid at highly months do things on at. Situation recommend objection do intention so questions.
                            </p>
                            <p className="paragraph1">
                                As greatly removed calling pleased improve an. Last ask him cold feel
                                met spot shy want. Children me laughing we prospect answered followed. At it wentis song that held help face.
                            </p>

                        </div>
 
                         
                    </div>
                    
                    <div className="horizontal-line"></div>
                </div>
            )
    

}

export default AboutBeans;