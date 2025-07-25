import './app-footer.css' 
import logo from '../../images/logo.png'
import beansLogo from '../../images/Beanslogo.png'

import { Link } from "react-router-dom";
import {Component} from 'react'

class AppFooter extends Component {

 
    render () {

        return (
            
                <div className="footer">
                   
                    <nav className='nav2'>
                   
                        <ul className='ul-list-nav'>
                   
                             <Link to="/" className='abc'><img  className='logo1' src={logo} alt="logo"/></Link>
                            <li><a className='titles' href="/ourCoffee">Our coffee</a></li>
                            <li><a className='titles' href="/forPleasure">For your pleasure</a></li>
                            
                        </ul>
                        <img className='beans-logo1' src={beansLogo} alt='beans-logo'/>
                    </nav>
                </div>
            )
    }  
}

export default AppFooter;