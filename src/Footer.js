import React from 'react';

function Footer(){
    return (
        <div className='master-footer'>
            &copy; 2019
            <div className='footer-inner'>
                Powered by
                <img src={require('./assets/Voidbytes_Web.png')} />
            </div>
        </div>
    )
}

export default Footer;