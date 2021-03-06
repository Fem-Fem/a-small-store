export default function cartsReducer(
  state = {
    cart: [],
  },
  action
) {
  switch (action.type) {
    case "GET_CART":
      return {
        ...state,
        cart: action.payload,
      };

    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case "DELETE_FROM_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    default:
      return state;
  }
}
