import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './Dashboard';
import LoginPage from './LoginPage';
import Report from './Report'



function Approute({props}) {


  return (
    <Switch>
        <Route exact path='/' component={LoginPage} />
        
        <Route path ='/dashboard' component={Dashboard}/>
        <Route path ='/report' component={Report}/>
    </Switch>
    
  );
}

export default Approute;