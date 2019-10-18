import React from 'react';

function LoginPage(){
    return (
        <div className='login-container'>
            <div className='login-wrapper'>
                <div className='login-input'>
                    <label>Account Name</label>
                    <input></input>
                    <label>Password</label>
                    <input></input>
                </div>
                <div className='login-button'>
                    <button>Login</button>
                </div>
            </div>
        </div>
    )
}


export default LoginPage;