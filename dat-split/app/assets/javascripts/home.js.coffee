# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

Stopwatch = (elem, trigger, options) ->
  timer = elem
  interval = null
  clock = 0
  offset = null
  delay = 100
  split = 0
  splitTime = 0

  formatPlaces = (time) ->
    if time < 10 then "0#{time}" else time

  formatTime = (time) ->
    ms = "#{time % 1000}".substring(0, 1)
    s = formatPlaces(Math.floor(time / 1000) % 60)
    m = formatPlaces(Math.floor(time / 60000) % 60)
    h = formatPlaces Math.floor(time / 3600000)
    "#{h}:#{m}:#{s}.#{ms}"

  formatSplit = (time) ->
  currentSplit = ->
    $("[data-split=#{split}]")

  nextSplit = ->
    diff = clock - splitTime
    if clock != 0 && diff < 0
      currentSplit().addClass 'green'
    currentSplit().html formatTime(Math.abs(diff))

    split += 1
    splitTime = currentSplit().data 'ms'

  nextSplit()

  render = (time) ->
    timer.html formatTime(time)

    diff = clock - splitTime

    if diff > 0
      currentSplit().addClass('red')
      currentSplit().html formatTime(diff)

  reset = ->
    clock = 0
    render(0)

  delta = ->
    now = Date.now()
    d = now - offset
    offset = now
    d

  update = ->
    clock += delta()
    render(clock)

  toggle = ->
    if interval then stop() else start()

  start = -> 
    return if interval
    offset = Date.now()
    interval = setInterval(update, delay)
  
  stop = -> 
    return unless interval
    clearInterval(interval)
    interval = null

  trigger.on 'click', ->
    toggle()

  $(document).on 'keyup', (e) ->
    if e.keyCode == 39
      nextSplit()
  

$(document).on 'ready', ->
  timer = new Stopwatch $('.timer-text'), $('#timer')




