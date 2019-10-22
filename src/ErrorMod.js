import React from 'react';

function ErrorMod(props){
   
    
    return (
        <div className='error-modal'>
            <div className='error-modal-content'>
            {props.info_text}
            <button onClick={props.onClick}>Close</button>
            </div>
        </div>
    )
}

export default ErrorMod;