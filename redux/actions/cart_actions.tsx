import { GET_CART } from "../action-types.js";
import { ADD_TO_CART } from "../action-types.js";
import Client from "shopify-buy";

const client = Client.buildClient({
  storefrontAccessToken: "26853603f3b67fead6e3bcf3ee602758",
  domain: "a-very-small-store.myshopify.com",
});

export function getCart() {
  return {
    type: GET_CART,
  };
}

export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
}

export function deleteFromCart(item) {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
}
