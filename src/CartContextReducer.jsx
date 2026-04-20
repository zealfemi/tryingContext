const CartReducer = (state, action) => {
  let index = -1;

  index = action.product
    ? state.findIndex((product) => product.id === action.product.id)
    : -1;

  let newCart = [...state];

  switch (action.type) {
    case "Add":
    case "Increase":
      if (index === -1) {
        newCart.push({ ...action.product, quantity: 1 });
      }

      if (index > -1 && newCart[index].quantity < 10) {
        newCart[index].quantity++;
      }

      break;

    case "Decrease":
      if (index > -1 && newCart[index].quantity > 1) {
        newCart[index].quantity--;
      }

      break;

    case "Remove":
      newCart = state.filter((product) => product.id !== action.product.id);

      break;

    case "Clear":
      newCart = [];
      break;

    default:
      return state;
  }

  state = newCart;

  return state;
};

export default CartReducer;
