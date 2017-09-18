var TimeFormatter = {
  leadingZero: function(time) {
    time = "" + time;
    return ('' + Math.trunc(time)).length == 1 ? ('0' + time) : time;
  }, format: function(time) {
    time = parseInt(time);
    time = isNaN(time) ? 0 : time;

    var timeInSeconds = time / 1000,
        seconds = this.leadingZero(timeInSeconds % 60),
        minutes = this.leadingZero(parseInt((timeInSeconds / 60) % 60)),
        hours = parseInt(timeInSeconds / 3600);

    return hours + ":" + minutes + ":" + seconds;
  }
};

module.exports = {
  TimeFormatter: TimeFormatter
};
