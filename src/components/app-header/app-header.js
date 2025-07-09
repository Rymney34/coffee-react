import './app-header.css' 

import {Component} from 'react'

class AppHeader extends Component {

 
    render () {

        return (
                <div className="header">
                    <nav>
                         <img src="" alt="logo" />
                        <ul>
                            <li><a href="#">Coffee House</a></li>
                            <li><a href="#">Our coffee</a></li>
                            <li><a href="#">For your pleasure</a></li>
                        </ul>
                    </nav>
                </div>
            )
    }
    
  
   
   
}

export default AppHeader;