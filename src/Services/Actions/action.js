import { ADD_TO_CART } from "../constants.js";
import { REMOVE_TO_CART } from "../constants.js";
export const addToCart = (data) => {
  // console.log("actions", data);
  return {
    type: ADD_TO_CART,
    data: data,
  };
};

export const removeToCart = () => {
  console.log("actions");
  return {
    type: REMOVE_TO_CART,
  };
};
