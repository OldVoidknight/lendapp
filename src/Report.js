import React,{useState} from 'react';
import ErrorMod from './ErrorMod';


function Report(){
    const [anError,setError]=useState(false)
    const popError=()=>{
        setError(!anError)
    }
    
    return (
        <div className='report-container'>
            {anError ? <ErrorMod info_text='This is an error' onClick={()=>setError(false)}/>:null}
            <div className='report-content-wrapper'>
                <div className='report-content'>
                <button onClick={popError}>Show Error</button>
                </div>
            </div>
        </div>
    )
}

export default Report;