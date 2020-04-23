import { GET_USERS } from "../action-types.js";
import { ADD_TO_CART } from "../action-types.js";
import Client from "shopify-buy";

const client = Client.buildClient({
  storefrontAccessToken: "26853603f3b67fead6e3bcf3ee602758",
  domain: "a-very-small-store.myshopify.com",
});

export function getUsers() {
  return {
    type: GET_USERS,
  };
}

export function addUser(username, password) {
  return {
    type: ADD_TO_CART,
    username: username,
    password: password,
  };
}

export function logIn(username, password) {
  return {
    type: LOG_IN,
    username: username,
    password: password,
  };
}

export function logOut(user) {
  return {
    type: LOG_OUT,
    username: username,
    password: password,
  };
}
