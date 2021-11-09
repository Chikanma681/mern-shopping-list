import React, { Component } from "react";
import "./App.css";
import AppNavbar from "./components/AppNavbar.jsx";
import ShoppingList from "./components/ShoppingList";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <AppNavbar />
          <ShoppingList/>
        </div>
      </div>
    );
  }
}

export default App;
