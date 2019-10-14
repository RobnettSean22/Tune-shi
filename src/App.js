import React, {Component} from 'react';
import './App.css';
import Profiles from './component/Profiles'
import Header from './component/Header'
import Coverphoto from './component/Coverphoto';
import Profilepic from './component/Profilepic'



class App extends Component {
  constructor(props) {
    super(props)

   
  }

  render() {
    return (
      <div>
        <body>
          <Header/>
          <Coverphoto/>
          
          <Profiles/>
        </body>
        
      </div>
    )
  }
}

export default App




