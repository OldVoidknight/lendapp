import React from 'react';

function Footer(){
    return (
        <div className='master-footer'>
            <div className='footer-inner'>
            &copy; 2019 Powered by
                <img src={require('./assets/Voidbytes_Web.png')} alt='' />
            </div>
        </div>
    )
}

export default Footer;