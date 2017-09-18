import API from './api'

export const REQUEST_SPEED_RUN_ROUTES = 'REQUEST_SPEED_RUN_ROUTES'
export const RECEIVE_SPEED_RUN_ROUTES = 'RECEIVE_SPEED_RUN_ROUTES'

export function requestSpeedRunRoutes() {
  return { type: REQUEST_SPEED_RUN_ROUTES }
}

export function receiveSpeedRunRoutes(speedRunRoutes) {
  return { type: RECEIVE_SPEED_RUN_ROUTES, speedRunRoutes }
}

export function fetchSpeedRunRoutes() {
  return function (dispatch) {
    dispatch(requestSpeedRunRoutes())
    API.fetchSpeedRunRoutes().then(data => {
      dispatch(receiveSpeedRunRoutes(data))
    })
  }
}
