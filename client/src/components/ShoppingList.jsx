import React, { Component } from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  // Card,
  // CardText,
} from "reactstrap";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
import {connect} from 'react-redux';
import {getItems} from '../redux/actions/itemAction';
import PropTypes from 'prop-types';
// import { v4 as uuidv4 } from 'uuid';

class ShoppingList extends Component {

  componentDidMount() {
    this.props.getItems();
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
    const { items } = this.props.item;
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
};

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = (state)=>{
  return{
    item:state.item
}};

export default connect(mapStateToProps,{getItems})(ShoppingList); // connect takes mapstatetoprops and actions
