import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ToDoPage from './ToDoPage';
import Loginform from './LoginForm';



function Approute({props}) {


  return (
    <Switch>
        <Route exact path='/' component={Loginform} />
        
        <Route path ='/todo' component={ToDoPage}/>
    </Switch>
    
  );
}

export default Approute;