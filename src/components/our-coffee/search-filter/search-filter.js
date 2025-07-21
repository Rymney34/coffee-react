
import Filter from './filter.js'
import './search-filter.css'

import { Component } from 'react';



class SearchFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

     onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term})
        this.props.onUpdateSearch(term)
    }

render(){
            return (
                    
                        <div className="SearchAndFilter">
                            <div className="searchFilter">
                                <div className="search">
                                    <span>Looking for</span>
                                    <input 
                                        type = "text"
                                        className="search-input"
                                        placeholder="start typing here" 
                                        value = {this.state.term} 
                                        onChange={this.onUpdateSearch}
                                    />
                                </div>
                                <Filter/>
                                {/* <div className="filter">
                                    <span>Filter</span>
                                    <div className="filter-buttons">
                                        <button className="buttons1">
                                            Brazil
                                        </button >
                                        <button className="buttons2">
                                            Kenya
                                        </button>
                                        <button className="buttons3">
                                            Columbia
                                        </button>


                                    </div>
                                </div> */}
                            </div>
                        </div>
                    )
            

        }
}
    

export default SearchFilter;