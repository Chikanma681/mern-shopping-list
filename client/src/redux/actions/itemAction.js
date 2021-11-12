import { actionTypes } from "../types/action-types";
import axios from "axios";
const { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } = actionTypes;

// axios.defaults.baseURL = "http://localhost:5000/";
// dispatch semds asynchronous call to the backend server
export const getItems = () => (dispatch) => {
  dispatch(setItemsLoading());
  axios
    .get("api/items/")
    .then((res) => {
      dispatch({
        type: GET_ITEMS,
        payload: res.data,
      });
    })
    .catch((err) => console.log("Error: ", err));
};

export const deleteItem = (id) => (dispatch) => {
  axios.delete(`api/items/${id}`).then((res) =>
    dispatch({
      type: DELETE_ITEM,
      payload: id,
    })
  );
};

export const addItem = (item) => (dispatch) => {
  axios
    .post("/api/items/", item)
    .then((res) => dispatch({ type: ADD_ITEM, payload: res.data }))
    .catch((err) => console.log("Error", err));
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING,
  };
};
