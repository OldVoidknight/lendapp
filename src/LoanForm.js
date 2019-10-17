import React,{useState} from 'react'

function LoanForm(){
    const [payback,setPayback]=useState(0)

    return (
        <div className='loan-container'>
            <div className='loan-request'>
                <label>Loan Amount (in GhC)</label>
                <input type='number' min='0'/>
                <label>Payback Period (in Days)</label>
                <input type='number' min='0'/>
            </div>
            <div className='loan-details'>
                <label>Name (In Full)</label>
                <input></input>
                <label>Date of Birth</label>
                <input type='date'/>
                <label>Marital Status</label>
                <select>
                    <option value='Single'>Single</option>
                    <option value='Married'>Married</option>
                    <option value='Widowed'>Widowed</option>
                    <option value='Divorced'>Divorced</option>
                </select>
                <label>Occupation</label>
                <input></input>
            </div>
        </div>
    )
}

export default LoanForm;