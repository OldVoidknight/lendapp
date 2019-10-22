import React,{useState} from 'react';
import LoanForm from './LoanForm';

function Card(){
    const [showComp,setShowComp]=useState(true)


    return (
        <div className='master-card'>
            <div className='card-header'>Testing</div>
            <div className='card-content'>
                {showComp && <LoanForm/>}
            </div>
            <div className='card-footer'>One Two One Two</div>
        </div>
    )
}

export default Card;