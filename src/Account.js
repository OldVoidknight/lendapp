import React from 'react';
import Accordion from './Accordion';
import AddMember from './AddMember';
import ViewMember from './ViewMember';
import './styler.css';

function Account(){

    return (
        <div className='acc-man-container'>
            <Accordion title='Add New Member(s)' content='Content 1'>
                <AddMember/>
            </Accordion>
            <Accordion title='View Members' content='Content 2'>
                <ViewMember/>
            </Accordion>
        </div>
    )
}

export default Account;