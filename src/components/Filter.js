import React from 'react'

function Filter(props){
    const { changeFilter } = props
    return(
        <div>
            <select onChange={ (e) => changeFilter(e.target.value) }>
                <option value= "All">Show All</option>
                <option value="Greased">Greased</option>
                <option value="Not Greased">Not Greased</option>
            </select>
        </div>
    )
}

export default Filter;