import React from 'react';
import LoanForm from './LoanForm';

function Card(){
    return (
        <div className='master-card'>
            <div className='card-header'>Testing</div>
            <div className='card-content'>
                <LoanForm/>
            </div>
            <div className='card-footer'>One Two One Two</div>
        </div>
    )
}

export default Card;