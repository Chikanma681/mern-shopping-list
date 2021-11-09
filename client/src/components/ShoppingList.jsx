import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "reactstrap";
import uuid from "uuid";

class ShoppingList extends Component {
  state = {
    items: [
      { id: uuid(), name: "Eggs" },
      { id: uuid(), name: "Water" },
      { id: uuid(), name: "Steak" },
      { id: uuid(), name: "Milk" },
    ],
  };
  render() {
    const { items } = this.state;
    return (
      <Container>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onCLick={() => {
              const name = prompt('Enter Item');
              if (name){
                  this.setState(state=>({
                      items:[...state.items, {id:uuid(), name}]
                  }))
              }
          }}
        ></Button>
      </Container>
    );
  }
}

export default ShoppingList;
