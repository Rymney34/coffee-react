import './app-header.css' 
import logo from '../../images/logo.png'

import {Component} from 'react'

class AppHeader extends Component {

 
    render () {

        return (
            
                <div className="header">
                   
                    <nav className='head-nav'>
                   
                        <ul className='list-nav'>
                            <div></div>
                            <img src={logo} alt="logo" />
                            <li><a href="#">Our coffee</a></li>
                            <li><a href="#">For your pleasure</a></li>
                        </ul>
                    </nav>
                </div>
            )
    }
    
  
   
   
}

export default AppHeader;