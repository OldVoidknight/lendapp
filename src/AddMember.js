import React,{useState} from 'react';
import './styler.css';


function AddMember(){
    const [value,setValue]=useState({membername:'',p_number:'',email:''})

    const handleChange=(e) =>{
        setValue({...value,[e.target.name]:e.target.value})}

    const submitData=(e)=>{
        e.preventDefault()
    }
    
    return (
        <div className='addmembers'>
            <form>
                <label>Member Name</label>
                <input name='membername'type='text' value={value.membername} onChange={handleChange}></input>
                <label>Phone Number</label>
                <input name='p_number' type='text' maxLength='10' value={value.p_number} onChange={handleChange}></input>
                <label>E-mail</label>
                <input name='email' type='email' value={value.email} onChange={handleChange}></input>
                <button onClick={submitData}>Submit</button>
            </form>
        </div>
    )
}

export default AddMember;