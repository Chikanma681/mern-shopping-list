import React, { Component } from "react";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import ShoppingList from "./components/ShoppingList";
import ItemModal from "./components/itemModal";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <AppNavbar />
          <div className="container">
          <ItemModal />
          <ShoppingList/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
