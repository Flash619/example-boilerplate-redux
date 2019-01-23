import { combineReducers } from 'redux'
import * as types from './types'

const all = (state = [], action) => {
  switch (action.type) {
    case types.GET:
      return []
    case types.GET_FULFILLED:
      return [ ...state, ...Object.values(action.payload.organizationRole) ]
    default:
      return state
  }
}

const byId = (state = {}, action) => {
  switch (action.type) {
    case types.GET:
      return {}
    case types.GET_FULFILLED:
      return { ...state, ...action.payload.organizationRole }
    default:
      return state
  }
}

const getLoading = (state = false, action) => {
  switch (action.type) {
    case types.GET:
      return true
    case types.GET_FULFILLED:
    case types.GET_FAILED:
      return false
    default:
      return state
  }
}

const postLoading = (state = false, action) => {
  switch (action.type) {
    case types.POST:
      return true
    case types.POST_FULFILLED:
    case types.POST_FAILED:
      return false
    default:
      return state
  }
}

const patchLoading = (state = false, action) => {
  switch (action.type) {
    case types.PATCH:
      return true
    case types.PATCH_FULFILLED:
    case types.PATCH_FAILED:
      return false
    default:
      return state
  }
}

const purgeLoading = (state = false, action) => {
  switch (action.type) {
    case types.PURGE:
      return true
    case types.PURGE_FULFILLED:
    case types.PURGE_FAILED:
      return false
    default:
      return state
  }
}

export default combineReducers({
  all,
  byId,
  getLoading,
  postLoading,
  patchLoading,
  purgeLoading
})
