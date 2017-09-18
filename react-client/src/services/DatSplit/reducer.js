import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import timer from '../Timer/reducer'
import {
  REQUEST_SPEED_RUN_ROUTES,
  RECEIVE_SPEED_RUN_ROUTES
} from './actions'

const initialState = {
  speedRunRoutes: [],
  isFetchingSpeedRunRoutes: false
}

let datSplit = function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_SPEED_RUN_ROUTES:
      return {
        ...state,
        isFetchingSpeedRunRoutes: true
      }
    case RECEIVE_SPEED_RUN_ROUTES:
      return {
        ...state,
        isFetchingSpeedRunRoutes: false,
        speedRunRoutes: action.speedRunRoutes || []
      }
    default:
      return state
  }
}

export default combineReducers({
  routing: routerReducer,
  datSplit,
  timer
})
