import React from 'react';

function Line({left}){
    return(
        <div className='line' style={{left: `${left}%`}}>
        </div>
    )
}

export default Line;