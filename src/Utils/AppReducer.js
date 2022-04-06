export const InitialApp = {
  cart: null,
}

export const AppReducer = (state, action) => {
  switch (action.TYPE) {
    case 'set_cart':
      return { ...state, cart: action.PAYLOAD }
    default:
      break
  }
  return { state }
}
