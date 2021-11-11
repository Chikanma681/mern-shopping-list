import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { connect } from "react-redux";
import { addItem, getItems } from "../redux/actions/itemAction";
import { v4 as uuidv4 } from 'uuid';

// try make sure form has a state in component avoid application with from

class ItemModal extends Component {
  state = {
    modal: false,
    name: "",
  };
  componentDidMount() {
    this.props.getItems();
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: uuidv4(),
      name: this.state.name,
    };
    this.props.addItem(newItem);
  };
  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={() => this.toggle()}
          className="mt-5"
        >
          Add Item
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add to Shopping List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Item</Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Adding shopping item"
                  onChange={this.onChange}
                  className="mb-3"
                />
                <Button
                  color="dark"
                  style={{ marginBottom: "2rem" }}
                  onSubmit={this.onChange}
                  type="submit"
                  block
                >
                  Add Item
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    item: state.item,
  };
};

export default connect(mapStateToProps, { getItems, addItem })(ItemModal);
