import _ from 'lodash';

var SplitHelpers = {
  currentPb: function(splits) {
    return _.reduce(splits, function(num, split) {
      return (split.timeInPb || 0) + num;
    }, 0);
  }
};

module.exports = {
  SplitHelpers: SplitHelpers
};