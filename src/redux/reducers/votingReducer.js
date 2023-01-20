const votingReducer = (defaultState = { isVoting: false }, action) => {
  switch (action.type) {
    case 'SET_VOTING':
      return {
        isVoting: action.payload.isVoting,
      }
    default:
      return defaultState
  }
}

export default votingReducer
