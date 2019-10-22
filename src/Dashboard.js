import React from 'react';
import Navbar from './Navbar';
import MainMenu from './MainMenu';
import Card from './Card';
import Footer from './Footer'


function Dashboard(){
    return (
        <div className='dashboard'>
            <Navbar/>
            <div className='dash-inner'>
                <MainMenu/>
                <Card/>
            </div>
            <Footer></Footer>
        </div>
    )
}


export default Dashboard;