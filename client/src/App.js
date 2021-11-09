import React, {Component} from 'react';
import './App.css'
import AppNavbar from './components/AppNavbar.jsx'
class App extends Component{
  render(){
    return (
      <div className="App">
        <h1><AppNavbar/></h1>
      </div>
    )
  }
}

export default App;
