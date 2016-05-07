var TimeFormatter = {
  leadingZero: function(time) {
    time = "" + time;
    return time.length == 1 ? ("0" + time) : time;
  }, format: function(time) {
    time = parseInt(time);
    time = isNaN(time) ? 0 : time;

    seconds = this.leadingZero(time % 60);
    minutes = this.leadingZero(parseInt((time / 60) % 60));
    hours = parseInt(time / 3600);

    return hours + ":" + minutes + ":" + seconds;
  }
};

module.exports = {
  TimeFormatter: TimeFormatter
};