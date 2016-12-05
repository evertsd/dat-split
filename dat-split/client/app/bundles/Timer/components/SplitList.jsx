import React, { PropTypes } from 'react';
import { Split } from './Split';
import _ from 'lodash';

export default class SplitList extends React.Component {
  static propTypes = {
    // If you have lots of data or action properties, you should consider grouping them by
    // passing two properties: "data" and "actions".
    splits: PropTypes.array.isRequired,
  };

  constructor(props, context) {
    super(props, context);
  };

  render() {
    return this.props.splits.map(function (split, index) {
      return (
        <Split name={split.name} bestTime={split.bestTime} timeInPb={split.timeInPb} />
      );
    });
  };
}
