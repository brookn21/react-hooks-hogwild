import React from "react";

function HogCardBack(props){
    const {hog} = props

    const renderHogDetails = []

    for (let key in hog){
        if( key !== "image")
        renderHogDetails.push(<p>{`${key}: ${hog[key]}`}</p>)
    }
    return(
        <div className='pigTile'>
            {
                renderHogDetails
            }
        </div>
    )
}

export default HogCardBack;