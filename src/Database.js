import React from 'react';
import Graph from './Graph';

function Database(){
    return (
        <div className='data-container'>
            <div className='stats-visual'>
                <label>Account Name</label>
                <label>Number of Members</label>
                <label>Total Loans</label>
                <label>Average Loan</label>
            </div>
            <div className='graph-visual'>
                <Graph/>
            </div>
        </div>
    )
}

export default Database;