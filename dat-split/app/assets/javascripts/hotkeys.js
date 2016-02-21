window.App = window.App || {};

(function() {

  var Hotkeys = function($container, timer, hotkeys) {
    this.$wrapper = $container;

    this.playKey = new Hotkey(this.$wrapper, '[data-play-hotkey]', hotkeys.play, timer.play);
    this.pauseKey = new Hotkey(this.$wrapper, '[data-pause-hotkey]', hotkeys.pause, timer.pause);
    this.resetKey = new Hotkey(this.$wrapper, '[data-reset-hotkey]', hotkeys.reset, timer.reset);
    this.prevKey = new Hotkey(this.$wrapper, '[data-prev-hotkey]', hotkeys.prev, timer.prev);
    this.nextKey = new Hotkey(this.$wrapper, '[data-next-hotkey]', hotkeys.next, timer.next);

    this.hotkeys = [this.playKey, this.pauseKey, this.resetKey, this.prevKey, this.nextKey];

    this.$wrapper.on('keyup', function(e) {
      for(var index in this.hokeys) {
        if(e.keyCode === this.hotkeys[index].keyCode) {
          this.hotkeys[index].fn();
        }
      }
    }.bind(this));

    return this;
  };

  Hotkeys.prototype.toggle = function() {
    this.$wrapper.toggleClass('disabled');

    for(var index in this.hotkeys) {
      this.hotkeys[index].toggle();
    }
  }

  var Hotkey = function($container, selector, value, fn) {
    this.$key = $container.find(selector);
    this.setKey(value);
    this.fn = fn;

    this.$key.on('keyup', function(e) {
      this.setKey(e.keyCode);
      this.$key.select();
    }.bind(this));

    this.$key.on('click', function() {
      $(this).select();
    });

    return this;
  };

  Hotkey.prototype.setKey = function(value) {
    this.keyCode = value;
    this.$key.val(String.fromCharCode(value));
  }

  Hotkey.prototype.toggle = function() {
    var disabled = this.$key.prop('disabled');
    this.$key.prop('disabled', !disabled);
  }

  App.Hotkeys = Hotkeys;

})();