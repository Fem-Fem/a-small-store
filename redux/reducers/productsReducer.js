// import Client from 'shopify-buy';
// const client = Client.buildClient({
// 	storefrontAccessToken: '26853603f3b67fead6e3bcf3ee602758',
// 	domain: 'a-very-small-store.myshopify.com'
// })


export default function productsReducer(state = {
	products: ['this is a product', 'this too']
}, action) {


	switch(action.type) {
		case 'GET_PRODUCTS':
			return {
				...state,
				products: action.payload
			}

		case 'PRODUCT_IS_1':
			return {
				...state,
				products: [1]
			}
			
		default:
			return state;
	}
};