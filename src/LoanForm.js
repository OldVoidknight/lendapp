import React,{useState} from 'react'

function LoanForm(){
    const [value,setValue]=useState({amount:'',period:'',fullname:'',dob:'',m_status:'',occupation:'',p_number:''})

    const handleChange=(e) =>{
        setValue({...value,[e.target.name]:e.target.value})}

    return (
        <div className='loan-container'>
            <div className='loan-request'>
                <label>Loan Amount (in GhC)</label>
                <input name='amount' type='number' min='0' value={value.amount} onChange={handleChange}/>
                <label>Payback Period (in Days)</label>
                <input name='period' type='number' min='0' value={value.period} onChange={handleChange}/>
            </div>
            <div className='loan-details'>
                <label>Name (In Full)</label>
                <input name='fullname' type='text' value={value.fullname} onChange={handleChange}></input>
                <label>Date of Birth</label>
                <input name='dob' type='date' value={value.dob} onChange={handleChange}/>
                <label>Marital Status</label>
                <select name='m_status' value={value.m_status} onChange={handleChange}>
                    <option value='Single'>Single</option>
                    <option value='Married'>Married</option>
                    <option value='Widowed'>Widowed</option>
                    <option value='Divorced'>Divorced</option>
                </select>
                <label>Occupation</label>
                <input name='occupation' type='text' value={value.occupation} onChange={handleChange}></input>
                <label>Phone Number</label>
                <input name='p_number' type='text' maxLength='10' value={value.p_number} onChange={handleChange}></input>
            </div>
        </div>
    )
}

export default LoanForm;