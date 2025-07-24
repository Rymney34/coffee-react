import './main-bg-block.css' 
import beansLogo from '../../images/Beanslogo.png'


import AppHeader from '../app-header/app-header.js'


import {Component} from 'react'

const MainBgBlock = (props) => {

const {mainbg} = props;

        return (
            
                <div className="main-block">
                    <AppHeader className="App-header"/>
                    <div className='group-main'>
                        <h1>Everything You Love About Coffee</h1>    
                        <img className='bean-logo' src={beansLogo} alt='beans-logo'/>
                        <p className='main-txt'>We makes every day full of energy and taste</p>
                        <p className='main-txt'>Want to try our beans?</p>
                        <button className='moreBtn'>More</button>
                    </div>
                        
                        <img className='main-bg' src={mainbg} alt="main-bg"/>
                        
                </div>
            )
    }
    
  
   
   


export default MainBgBlock;