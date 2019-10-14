import React, {Component} from 'react';
import './App.css';
import Profiles from './component/Profiles'
import Header from './component/Header'



class App extends Component {
  constructor(props) {
    super(props)

   
  }

  render() {
    return (
      <div>
        <Header/>
        <Profiles/>
        
      </div>
    )
  }
}

export default App




