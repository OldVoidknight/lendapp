import React from 'react';

function Navbar(){
    return (
        <div className='navbar'>
            <div className='leftside'>
            Hello
            </div>
            <div className='rightside'>
                <ul>
                    <li>
                        <img src={require('./assets/dashboard.png')} alt=''/>
                        Dashboard
                    </li>
                    <li>
                        <img src={require('./assets/loan.png')} alt=''/>
                        Loan
                    </li>
                    <li>
                        <img src={require('./assets/database.png')} alt=''/>
                        Database
                    </li>
                    <li>
                        <img src={require('./assets/report.png')} alt=''/>
                        Report
                    </li>
                </ul>
            </div>
        </div>
    )
}


export default Navbar;