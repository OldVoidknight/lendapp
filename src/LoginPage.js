import React,{useState} from 'react';
import Footer from './Footer';
import InfoMod from './InfoMod';

function LoginPage(){
    const [value,setValue]=useState({username:'',password:''})
    const [anError,setError]=useState(false)

    const handleChange=(e) =>{
        setValue({...value,[e.target.name]:e.target.value})}

    const popError=()=>{
        setError(!anError)
    }

    const validatelogin=(e)=>{
        e.preventDefault()
        if (value.username===''||value.password==='') {
            popError()
        } else {
                
        }
        login()
    }
    
    const login=()=>{

    }
    
    return (
        <div className='login-container'>
            {anError ? <InfoMod info_text='Some field(s) are empty. Please check and try again.' onClick={()=>setError(false)}/>:null}
            <div className='login-wrapper'>
                <div className='login-input'>
                    <label>Account Name</label>
                    <input name='username' type='text' placeholder='Enter Your Account Name' value={value.username} onChange={handleChange}></input>
                    <label>Password</label>
                    <input name='password' type='password' placeholder='Enter Your Password' value={value.password} onChange={handleChange}></input>
                </div>
                <div className='login-button'>
                    <button onClick={validatelogin}>Login</button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}


export default LoginPage;