import React from "react"
import HogCard from "./HogCard"

function HogsContainer(props){
    const { hogs } = props

    const renderHogs = hogs.map((hog, index) =>
    <HogCard 
    hog ={ hog }
    key ={ index }/>)
    return(
        <div className="ui grid container">
            {
            renderHogs
            }
        </div>
    )
}

export default HogsContainer;