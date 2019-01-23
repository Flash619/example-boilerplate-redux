import { combineReducers } from 'redux'
import * as types from './types'

const title = (state = '', action) => {
  switch (action.type) {
    case types.SET_TITLE:
      return action.payload
    default:
      return state
  }
}

const notifications = (state = [], action) => {
  switch (action.type) {
    case types.POST_NOTIFICATION:
      return [ ...state, { ...action.payload } ]
    default:
      return state
  }
}

export default combineReducers({
  title,
  notifications
})
