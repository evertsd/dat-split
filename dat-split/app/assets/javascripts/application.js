// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .


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