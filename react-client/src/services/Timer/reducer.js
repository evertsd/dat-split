import {
  TIMER_NEXT,
  TIMER_PAUSE,
  TIMER_RESET,
  TIMER_PREV
} from './actions'

const initialState = {
  timers: {}
}

export default function timer(state = initialState, action) {
  // find by action.timerId
  let timer

  switch (action.type) {
    // Start, resume, or go to the next split
    case TIMER_NEXT:
      return state
    // Pause the current timer, return state
    case TIMER_PAUSE:
      return state
    // Stop the current timer, push a new timer?
    case TIMER_RESET:
      return state
    // Go to the prev split in the timer
    case TIMER_PREV:
      return state
    default:
      return state
  }
}
