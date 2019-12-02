import React,{useState} from 'react';
import Navbar from './Navbar';


function Report(){
    const [anError,setError]=useState(false)
    const popError=()=>{
        setError(!anError)
    }
    
    return (
        <div className='report-container'>
            <Navbar/>
            <div className='report-content-wrapper'>
                <div className='report-content'>
                <button onClick={popError}>Show Error</button>
                <input></input>
                <input></input>
                <input></input>
                </div>
            </div>
        </div>
    )
}

export default Report;