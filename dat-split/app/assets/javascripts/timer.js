var Timer = function(splits) {
	this.$container = $('[data-timer]');
	this.splits = [];

	this.initializeSplits(splits);
}


Timer.prototype.initializeSplits = function(splits) {
	var split, $split, i, html;

	for(i in splits) {
		split = new Split(i, splits[i].name, splits[i].previousTime, splits[i].personalBest);
		$split = $('<li class="split span8" data-split="' + i + '"></li>');
		html = split.render();
		console.log(html);
		$split.html(html);
		this.$container.append($split);
		this.splits.push(split);
	}
}

var testData = [{ name: 'BOB (1)', previousTime: 126, personalBest: 104 },
							  { name: 'WF (5)', previousTime: 348, personalBest: 344 },
							  { name: 'CC (8)', previousTime: 233, personalBest: 215 }];

$(document).on('ready', function() {
	new Timer(testData);
});
