import React from 'react';

function InfoMod(props){
   
    
    return (
        <div className='info-modal'>
            <div className='info-modal-content'>
            {props.info_text}
            <button onClick={props.onClick}>Close</button>
            </div>
        </div>
    )
}

export default InfoMod;