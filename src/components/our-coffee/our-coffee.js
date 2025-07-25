
import MainBgBlock from './our-coffee-bg/our-coffee-bg.js';
import AboutBeans from './about-our-beans/about-our-beans.js';
import CoffeeItems from './coffee-items/coffee-items.js';

import AppFooter from '../app-footer/app-footer.js';
import SearchFilter from './search-filter/search-filter.js';

import aboutOurBeans from '../../images/girl.jpg'


import React, { useState } from 'react';

const OurCoffee = ({ data }) => {
  // Initialize state
  const [term, setTerm] = useState('');
  const [filter, setFilter] = useState('');

  // Search function
  const searchItem = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter(item => 
      item.country.indexOf(term) > -1 || item.title.indexOf(term) > -1
    );
  };

  // Filter function
  const filterPost = (items, filter) => {
    switch (filter) {
      case 'Columbia':
      case 'Brazil':
      case 'Kenya':
        return items.filter(item => item.country === filter);
      default:
        return items;
    }
  };

  // Update search term
  const onUpdateSearch = (term) => {
    setTerm(term);
  };

  // Update filter
  const onFilterSelect = (filter) => {
    setFilter(filter);
  };


  const visibleData = filterPost(searchItem(data, term), filter);

  return (
    <div className="our-coffee">
      <link href="https://fonts.googleapis.com/css?family=Merienda" rel="stylesheet" />
      <MainBgBlock /> 
      <AboutBeans aboutOurBeans={aboutOurBeans} title="About our beans" />
      <SearchFilter 
        onUpdateSearch={onUpdateSearch} 
        filter={filter} 
        onFilterSelect={onFilterSelect} 
      />
      <CoffeeItems data={visibleData} />
      <AppFooter />
    </div>
  );
}

export default OurCoffee;