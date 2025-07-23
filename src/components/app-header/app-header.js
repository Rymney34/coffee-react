import './app-header.css' 
import logo from '../../images/logo.png'
import React from 'react';
import { Link } from "react-router-dom";

import {Component} from 'react'

class AppHeader extends Component {

 
    render () {

        return (
            
                <div className="header">
                   
                    <nav className='head-nav'>
                   
                        <ul className='list-nav'>
                            <div></div>
                            <Link to="/Home" className='abc'><img src={logo} alt="logo"/></Link>
                            <li><Link to="/ourCoffee">Our coffee</Link></li>
                            <li><a href="#">For your pleasure</a></li>
                        </ul>
                    </nav>
                </div>
            )
    }

}

export default AppHeader;