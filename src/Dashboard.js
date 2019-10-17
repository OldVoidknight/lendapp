import React from 'react';
import Navbar from './Navbar';
import MainMenu from './MainMenu';
import Card from './Card';


function Dashboard(){
    return (
        <div className='dashboard'>
            <Navbar/>
            <div className='dash-inner'>
                <MainMenu/>
                <Card/>
            </div>
        </div>
    )
}


export default Dashboard;