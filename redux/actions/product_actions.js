import {GET_PRODUCTS} from "../action-types.js"
import {PRODUCT_IS_1} from "../action-types.js"
import Client from 'shopify-buy';

const client = Client.buildClient({
	storefrontAccessToken: '26853603f3b67fead6e3bcf3ee602758',
	domain: 'a-very-small-store.myshopify.com'
})

// export function productIs1() {
// 	return {type: PRODUCT_IS_1};
// }

export const getProducts = () => {
	return dispatch => {
		client.product.fetchAll()
		.then(product => dispatch({
			type: GET_PRODUCTS,
			payload: product
		}))
	}
}