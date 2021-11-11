import {actionTypes} from "../types/action-types";

const initialState = {
  items: [
    { id: 1, name: "Eggs" },
    { id: 2, name: "Water" },
    { id: 3, name: "Steak" },
    { id: 4, name: "Milk" },
  ],
};

const { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS } = actionTypes;
export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
      };
    default:
      return state;
  }
};
