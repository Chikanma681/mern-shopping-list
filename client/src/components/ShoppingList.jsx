import React, { Component } from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  Card,
  CardText,
} from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// import { v4 as uuidv4 } from 'uuid';

class ShoppingList extends Component {
  state = {
    items: [
      { id: 1, name: "Eggs" },
      { id: 2, name: "Water" },
      { id: 3, name: "Steak" },
      { id: 4, name: "Milk" },
    ],
  };

  prompter = () => {
    const name = prompt("Enter Item");
    if (name) {
      this.setState((state) => ({
        items: [...state.items, { id: this.state.items.length + 1, name }],
      }));
    }
    // console.log(this.state.items.length +1)
  };

  render() {
    const { items } = this.state;
    return (
      <Container className="mt-3">
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={() => this.prompter()}
        >
          Add Item
        </Button>
        {items.map(({ id, name }) => {
          return (
            <ListGroup>
              {/* <TransitionGroup className="shopping-list">
                <CSSTransition key={id} timeout={500} className="fade"> */}
              <ListGroupItem key={id}>
                <Button
                  className="remove-btn me-2"
                  color="danger"
                  size="sm"
                  onClick={() => {
                    this.setState((state) => ({
                      items: state.items.filter((item) => item.id !== id),
                    }));
                  }}
                >
                  &times;
                </Button>
                {name}
              </ListGroupItem>
              {/* </CSSTransition>
              </TransitionGroup> */}
            </ListGroup>
          );
        })}
      </Container>
    );
  }
}

export default ShoppingList;
