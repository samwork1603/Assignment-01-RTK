const initialState = {
  redCart: [],
};

function cartReducer(state = initialState, action) {
    // const { outletName, item } = action.payload;
    // const cartItem = { ...item, id: `${outletName}-${item.id}` };
  switch (action.type) {
    case "ADD_TO_CART": {
      const { outletName, item } = action.payload;
      const cartItem = { ...item, id: `${outletName}-${item.id}` };
      const existingItemIndex = state.redCart.findIndex(
        (it) => it.id === cartItem.id
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...state.redCart];
        updatedCart[existingItemIndex].quantity += 1;
        return { ...state, redCart: updatedCart };
      } else {
        return {
          ...state,
          redCart: [...state.redCart, { ...cartItem, quantity: 1 }],
        };
      }
    }

    case "REMOVE_FROM_CART": {
      const { outletName, item } = action.payload;
      const cartItemId = `${outletName}-${item.id}`;
      const existingItem = state.redCart.find((it) => it.id === cartItemId);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          return {
            ...state,
            redCart: state.redCart.map((it) =>
              it.id === cartItemId ? { ...it, quantity: it.quantity - 1 } : it
            ),
          };
        } else {
          return {
            ...state,
            redCart: state.redCart.filter((it) => it.id !== cartItemId),
          };
        }
      }

      return state;
    }

    default:
      return state;
  }
}

export default cartReducer;
