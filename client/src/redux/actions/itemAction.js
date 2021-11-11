import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS } from "../types/action-types.js";

export const getItems = () => {
    return {
        type: GET_ITEMS,
    }
}