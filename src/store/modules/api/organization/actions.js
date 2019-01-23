import * as types from './types'

export const get = (payload) => ({
  type: types.GET,
  payload: payload
})

export const getFailed = (payload) => ({
  type: types.GET_FAILED,
  payload: payload
})

export const getFulfilled = (payload) => ({
  type: types.GET_FULFILLED,
  payload: payload
})

export const post = (payload) => ({
  type: types.POST,
  payload: payload
})

export const postFailed = (payload) => ({
  type: types.POST_FAILED,
  payload: payload
})

export const postFulfilled = (payload) => ({
  type: types.POST_FULFILLED,
  payload: payload
})

export const patch = (payload) => ({
  type: types.PATCH,
  payload: payload
})

export const patchFailed = (payload) => ({
  type: types.PATCH_FAILED,
  payload: payload
})

export const patchFulfilled = (payload) => ({
  type: types.PATCH_FULFILLED,
  payload: payload
})

export const purge = (payload) => ({
  type: types.PURGE,
  payload: payload
})

export const purgeFailed = (payload) => ({
  type: types.PURGE_FAILED,
  payload: payload
})

export const purgeFulfilled = (payload) => ({
  type: types.PURGE_FULFILLED,
  payload: payload
})
