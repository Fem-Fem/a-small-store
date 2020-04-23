import { combineReducers } from "redux";

import productsReducer from "./productsReducer";
import cartsReducer from "./cartsReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartsReducer,
  users: usersReducer,
});

export default rootReducer;
