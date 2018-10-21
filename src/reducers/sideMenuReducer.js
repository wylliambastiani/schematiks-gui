
export const sideMenuReducer = (state = { isMenuOpen: true }, action) => {

  switch (action.type) {
    case 'SELECTED_SERVER_ON_MENU':
      return { ...state, isMenuOpen: false }

    default:
      return state;
  }
}