var TimerApi = {
  get: function(id, callback) {
  	return callback({
  		id: id,
  		name: 'SM64 16 Star',
  		splits: [
  			{ name: 'BOB (1)', bestTime: 0, timeInPb: 119500 },
  			{ name: 'WF (6)', bestTime: 0, timeInPb: 183400 },
  			{ name: 'CCM (8)', bestTime: 0, timeInPb: 139900 },
  			{ name: 'Key 1 (9)', bestTime: 0, timeInPb: 132400 }
  		]
  	});
  }
};

module.exports = {
  TimerApi: TimerApi
};