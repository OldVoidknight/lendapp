import React,{useState,useRef} from 'react';
import './styler.css';


function Accordion (props){
    const [dropthis,setDropthis]=useState('')
    const [height, setHeight]=useState("0px")
    const content=useRef(null);
    
    const dropdown=()=>{
       setDropthis(dropthis === '' ? 'active' : '')
       setHeight(dropthis === 'active'? '0px': `${content.current.scrollHeight}px`)
       console.log(height)
    }


    return(
        <div className='acc-man-body'>
            <button className={`acc-drop $(dropthis)`} onClick={dropdown} >{props.title}</button>
            <div ref={content} className='drop-content' style={{maxHeight: `${height}`}}>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Accordion;