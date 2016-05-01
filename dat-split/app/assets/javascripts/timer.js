window.App = window.App || {};

var Timer = function(splits) {
  this.$container = $('[data-timer]');
  this.$previousBest = $('[data-previous-best]')
  this.splits = [];
  this.hotkeys = new App.Hotkeys($('[data-hotkey-wrapper]'), this,
    { play: 83, pause: 80, reset: 82, prev: 66, next: 78 });

  this.initializeSplits(splits);
}


Timer.prototype.initializeSplits = function(splits) {
  var split, $split, i, html, timeToSplit = 0;

  for(i in splits) {
    split = new Split(i, splits[i].name, splits[i].previousTime, splits[i].personalBest);
    $split = $('<li class="split span8" data-split="' + i + '"></li>');
    html = split.setTime(timeToSplit += split.previousTime);
    $split.html(html);
    this.$container.append($split);
    this.splits.push(split);
  }

  this.$previousBest.html(TimeFormatter.format(timeToSplit));
}

var testData = [{ name: 'BOB (1)', previousTime: 126, personalBest: 104 },
                { name: 'WF (5)', previousTime: 348, personalBest: 344 },
                { name: 'CC (8)', previousTime: 233, personalBest: 215 }];

$(document).on('ready', function() {
  App.timerRef = new Timer(testData);
});
