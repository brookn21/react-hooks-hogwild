import React from "react";

function HogCardFront(props){
    const { hog } = props
    return( 
        <div className='pigTile'>
                <h3>
                    {hog.name}
                </h3>
            <img src = {`${hog.image}`} className="minPigTile" alt="hog img"/>
            </div>
    )
}

export default HogCardFront;