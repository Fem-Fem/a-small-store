import {combineReducers} from 'redux';

import productsReducer from './productsReducer'
import cartsReducer from './cartsReducer'


const rootReducer = combineReducers({
	products: productsReducer,
	cart: cartsReducer
});

export default rootReducer;