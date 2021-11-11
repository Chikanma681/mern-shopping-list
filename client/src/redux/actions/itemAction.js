import { actionTypes } from "../types/action-types";

const { GET_ITEMS, ADD_ITEM, DELETE_ITEM } = actionTypes;

export const getItems = () => {
  return {
    type: GET_ITEMS,
  };
};

export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    payload: id,
  };
};

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload:item
  }
};
