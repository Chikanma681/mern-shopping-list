import {actionTypes} from "../types/action-types";

const { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS } = actionTypes;


export const getItems = () => {
    return {
        type: GET_ITEMS
    }
}