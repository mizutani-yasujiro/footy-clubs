const chatReducer = (defaultState = { user: null }, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        user: action.payload.user,
      }
    default:
      return defaultState
  }
}

export default chatReducer
