import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './Dashboard';
import LoginPage from './LoginPage';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={LoginPage}/>
        <Route path='/dashboard' component={Dashboard}/>
      </Switch>
    </div>
  );
}

export default App;
