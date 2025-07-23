import React from 'react';
import AppHeader from '../app-header/app-header.js'
import MainBgBlock from './our-coffee-bg/our-coffee-bg.js';
import AboutBeans from './about-our-beans/about-our-beans.js';
import CoffeeItems from './coffee-items/coffee-items.js';

import Filter from './search-filter/filter.js'
import AppFooter from '../app-footer/app-footer.js';
import SearchFilter from './search-filter/search-filter.js';

import { Component } from 'react';

class OurCoffee extends Component {

     constructor(props) {
        super(props);
        this.state ={
               data :[
                        {title: 'Solimo Coffee Beans 2 kg' , country: "Brazil", price: 200, id: 1},
                        {title: 'Solimo Coffee Beans 2 kg' , country: "Kenya", price:  200, id: 2},
                        {title: 'Solimo Coffee Beans 2 kg' , country: "Columbia",price:200, id: 3},
                        {title: 'Solimo Coffee Beans 1 kg' , country: "Brazil", price: 200, id: 4},
                        {title: 'Solimo Coffee Beans 1 kg' , country: "Brazil", price: 200, id: 5},
                        {title: 'Solimo Coffee Beans 1 kg' , country: "Brazil", price: 200, id: 6},
                     
                     
                     ],
                     term: "",
                     filter: ""
               }
    }

   searchItem = (items, term) => {
            if(term.length === 0) {
                return items;
   }
           

      return items.filter(item => {
         return item.country.indexOf(term) > -1 || item.title.indexOf(term) > -1;
      })
    }

   
    onUpdateSearch = (term) => {
        this.setState({term});
    }

   
   filterPost = (items, filter) => {
        switch (filter) {
            case 'Columbia':
                
            case 'Brazil' : 
                
            case 'Kenya' : 
                return items.filter(item => item.country === filter);
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState ({filter});
    }
    

    render () {

      const {data, term, filter} = this.state;

       const visibleData = this.filterPost(this.searchItem(data, term), filter);
         return (
            
            <div className="our-coffee">
               <link href='https://fonts.googleapis.com/css?family=Merienda' rel='stylesheet'></link>
               
                  <MainBgBlock/> 
                  <AboutBeans/>
                  <SearchFilter onUpdateSearch={this.onUpdateSearch} filter = {filter} onFilterSelect = {this.onFilterSelect} />
                  
                  <CoffeeItems data = {visibleData}/>
                  <AppFooter/>

            </div>
         );
    }
 
}

export default OurCoffee