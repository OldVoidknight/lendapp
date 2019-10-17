import React from 'react';

function Button(props){
    return (
        <div>
            <button className='master-button' onClick={props.onClick}>
            <img src={props.imgsrc} alt=''/>
            {props.title}
            </button>
        </div>
    )
}

export default Button;