export default function productsReducer(
  state = {
    products: [],
  },
  action
) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
}
