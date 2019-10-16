import React, {Component} from 'react';
import {Switch, Route, Link} from  'react-router-dom'
import Home from './Components/Home/Home'
import People from './Components/People/People'
import Profile from './Components/Profile/Profile'
import './App.css';




class App extends Component {
 

  render() {
    return (
      <div>
        <header>
        <Link to = '/'>Home</Link>
        <Link to = '/people'>People</Link>
        <Link to = '/Profile'>Profile</Link>
        </header>
        <Switch>
          <Route exact path = '/' component ={Home} />
          <Route path = '/people' component = {People} />
          <Route path = '/profile/:tag' component = {Profile}/>
        
        </Switch>
      </div>
    )
  }
}

export default App




