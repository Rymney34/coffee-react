import { Component } from "react"


const Filter = (props) => {

    
    
        const buttonsData = [
                {clazz: 'buttons1' ,label: 'Brazil', colored: false, id: 1},
                {clazz: 'buttons2' ,label: 'Columbia', colored: false, id: 2},
                {clazz: 'buttons2' ,label: 'Kenya', colored: false, id: 3},
                {clazz: 'buttons3' ,label: 'All', colored: true, id: 4}
            ]
        const buttons = buttonsData.map(({clazz, label, colored, id}) => {
            return (
               
                            <button 
                                type ="button"
                                className={clazz} 
                                 onClick={() => props.onFilterSelect(label)}>
                                {label}
                            </button >
                
            )
        })
        return (
                    <div className="filter">
                        <span>Filter</span>
                          <div className="filter-buttons" >
                                {buttons}
                          </div>
                        
                    </div>
                )
            }

  


export default Filter