import { ajax } from 'rxjs/ajax'
import { map, mergeMap } from 'rxjs/operators'
import { combineEpics, ofType } from 'redux-observable'

import * as actions from './actions'
import * as types from './types'
import * as utils from '../../utilities'
import * as models from '../models'

export const restGetItems = action$ => action$.pipe(
  ofType(types.REST_GET),
  mergeMap(action =>
    ajax.getJSON(utils.genApiUrl(models.USER, null, action.payload)).pipe(
      map(response => actions.getFulfilled(response))
    )
  )
)

export default combineEpics({
  restGetItems
})
