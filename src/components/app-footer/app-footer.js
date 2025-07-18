import './app-footer.css' 
import logo from '../../images/logo.png'
import beansLogo from '../../images/Beanslogo.png'


import {Component} from 'react'

class AppFooter extends Component {

 
    render () {

        return (
            
                <div className="footer">
                   
                    <nav className='nav2'>
                   
                        <ul className='ul-list-nav'>
                            <img className='logo1'src={logo} alt="logo" />
                            <li><a className='titles' href="#">Our coffee</a></li>
                            <li><a className='titles' href="#">For your pleasure</a></li>
                            
                        </ul>
                        <img className='beans-logo1' src={beansLogo} alt='beans-logo'/>
                    </nav>
                </div>
            )
    }  
}

export default AppFooter;