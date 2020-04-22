import {GET_USERS} from "../action-types.js"
import {ADD_TO_CART} from "../action-types.js"
import Client from 'shopify-buy';

const client = Client.buildClient({
	storefrontAccessToken: '26853603f3b67fead6e3bcf3ee602758',
	domain: 'a-very-small-store.myshopify.com'
})

export function getUsers() {
	return {
		type: GET_USERS,
	};
}

export function addUser(user) {
	return {
		type: ADD_TO_CART,
		payload: user
	};
}

export function logIn(user) {
	return {
		type: LOG_IN,
		payload: user
	};
}

export function logOut(user) {
	return {
		type: LOG_OUT,
		payload: user
	};
}