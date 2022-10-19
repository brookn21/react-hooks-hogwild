import React, { useState } from 'react'
import HogCardBack from './HogCardBack'
import HogCardFront from './HogCardFront'


function HogCard(props){
    const { hog } = props
    const [clicked, setClicked ] = useState( false  )

    function isClicked(){
        setClicked(!clicked)
    }

    return(
        <div className="ui eight wide column" onClick={isClicked}>
            {clicked ?
            <HogCardBack hog={hog}/>
            :
            <HogCardFront hog={hog}/>
            }
        </div>
    )
}

export default HogCard;