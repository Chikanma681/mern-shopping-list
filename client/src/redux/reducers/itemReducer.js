import { actionTypes } from "../types/action-types";

const initialState = {
  items: [
    { id: 1, name: "Eggs" },
    { id: 2, name: "Water" },
    { id: 3, name: "Steak" },
    { id: 4, name: "Milk" },
  ],
};

const { GET_ITEMS, ADD_ITEM, DELETE_ITEM } = actionTypes;
export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case ADD_ITEM:
      return {
        ...state,
        items:[action.payload, ...state.items]
      }
    default:
      return state;
  }
};
