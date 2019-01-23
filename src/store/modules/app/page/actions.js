import * as types from './types'

const setTitle = (payload) => ({
  type: types.SET_TITLE,
  payload: payload
})

const postNotification = (payload) => ({
  type: types.POST_NOTIFICATION,
  payload: payload
})