import { combineReducers } from 'redux'
import chatReducer from './chatReducer'
import votingReducer from './votingReducer'

export default combineReducers({
  voting: votingReducer,
  chat: chatReducer,
})
