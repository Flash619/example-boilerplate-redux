import { combineReducers } from 'redux'
import app from './modules/app'
import category from './modules/category'
import department from './modules/department'
import item from './modules/item'
import itemProperty from './modules/itemProperty'

export default combineReducers({
  app,
  category,
  department,
  item,
  itemProperty
})
