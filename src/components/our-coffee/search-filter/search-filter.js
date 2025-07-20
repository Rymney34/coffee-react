

import './search-filter.css'

const SearchFilter = () => {

        return (
            
                <div className="SearchAndFilter">
                    <div className="searchFilter">
                        <div className="search">
                            <span>Looking for</span>
                            <input type = "text" className="search-input" placeholder="start typing here"/>
                        </div>
                        <div className="filter">
                            <span>Filter</span>
                            <div className="filter-buttons">
                                <button className="buttons123">
                                    Brazil
                                </button >
                                <button className="buttons123">
                                    Kenya
                                </button>
                                <button className="buttons123">
                                    Columbia
                                </button>


                            </div>
                        </div>
                    </div>
                </div>
            )
    

}

export default SearchFilter;