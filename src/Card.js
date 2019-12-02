import React,{useState} from 'react';
import LoanForm from './LoanForm';
import Account from './Account';
import Database from './Database';

function Card(){
    const [showLoan,setShowLoan]=useState(false)
    const [showAccount,setShowAccount]=useState(false)
    const [showDatabase,setShowDatabase]=useState(false)

    const toggleLoan=()=>{
        setShowLoan(!showLoan)
        setShowAccount(false)
        setShowDatabase(false)
    }
    const toggleAccount=()=>{
        setShowAccount(!showAccount)
        setShowLoan(false)
        setShowDatabase(false)
    }
    const toggleDatabase=()=>{
        setShowDatabase(!showDatabase)
        setShowLoan(false)
        setShowAccount(false)
    }

    return (
        <div className='master-card'>
            <div className='card-header'>
                <button onClick={toggleAccount}>Account</button>
                <button onClick={toggleLoan}>Loan</button>
                <button onClick={toggleDatabase}>Database</button>
            </div>
            <div className='card-content'>
                {showAccount && <Account/>}
                {showLoan && <LoanForm/>}
                {showDatabase && <Database/>}
            </div>
            
        </div>
    )
}

export default Card;