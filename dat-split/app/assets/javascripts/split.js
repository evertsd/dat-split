var Split = function(number, name, previousTime, personalBest) {
	this.name = name;
	this.number = number;
	this.previousTime = previousTime;
	this.personalBest = personalBest;
	this.status = 'to be determined';

	return this;
}

Split.prototype.TBD_STATUS = 'to be determined';
Split.prototype.ACTIVE_STATUS = 'active';
Split.prototype.PAST_STATUS = 'past';

Split.prototype.currentTime = function() {
	if (this.status === this.ACTIVE_STATUS) {
		return this.originalTime + (new Date() - this.originalTime) / 1000;
	}

	if (this.status === this.PAST_STATUS) {
		return this.timeTaken;
	}

	return this.previousTime;
};

Split.prototype.start = function(time) {
	if (this.status !== this.TBD_STATUS) {
		throw "Can't start a split that isn't " + this.TBD_STATUS;
	}
	this.startTime = new Date();
	this.originalTime = time;
	this.status = this.ACTIVE_STATUS;
};

Split.prototype.pop = function() {
	if (this.status !== this.PAST_STATUS) {
		throw "Can't pop a split that isn't " + this.PAST_STATUS;
	}

	this.timeTaken = null;
	this.status = this.ACTIVE_STATUS;
}

Split.prototype.render = function() {
	return '<div class="mam">' +
		'<img class="span1 split-logo" src="#">' +
		'<div class="span4 text text-left mlm">' + this.name + '</div>' +
		'<div class="span2 text text-right">' + TimeFormatter.format(this.currentTime()) + '</div>' +
  '</div>';
}