import React from 'react';
import Button from './Button';

function MainMenu(){
    return (
        <div className='main-menu'>
          <Button title='Edit' imgsrc={require ('./assets/edit.png')}/>
          <Button title='Save' imgsrc={require ('./assets/save.png')}/>
          <Button title='Clear'imgsrc={require ('./assets/delete.png')}/> 
        </div>
    )
}

export default MainMenu;