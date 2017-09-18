export const TIMER_NEXT = 'TIMER_NEXT'
export const TIMER_PAUSE = 'TIMER_PAUSE'
export const TIMER_RESET = 'TIMER_RESET'

// Not all timers really have a concept of 'prev'
export const TIMER_PREV = 'TIMER_PREV'

export function startTimer() {
  return { type: TIMER_NEXT }
}

export function resumeTimer(timerId) {
  return { type: TIMER_NEXT, timerId }
}

export function splitTimer(timerId) {
  return { type: TIMER_NEXT, timerId }
}

export function pauseTimer(timerId) {
  return { type: TIMER_PAUSE, timerId }
}

export function resetTimer(timerId) {
  return { type: TIMER_RESET, timerId }
}

export function timerPrev(timerId) {
  return { type: TIMER_PREV, timerId }
}
