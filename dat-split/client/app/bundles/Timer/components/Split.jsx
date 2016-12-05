import React, { PropTypes } from 'react';
import { TimeFormatter } from '../helpers/util';
import _ from 'lodash';

export default class Split extends React.Component {
  static propTypes = {
    // If you have lots of data or action properties, you should consider grouping them by
    // passing two properties: "data" and "actions".
    name: PropTypes.string.isRequired,
    bestTime: PropTypes.number.isRequired,
    timeInPb: PropTypes.number.isRequired
  };

  constructor(props, context) {
    super(props, context);

    // Uses lodash to bind all methods to the context of the object instance, otherwise
    // the methods defined here would not refer to the component's class, not the component
    // instance itself.
    
    var formattedTime = TimeFormatter.format(this.props.timeInPb);
    console.info('constructor called', this.props.timeInPb, formattedTime);
    this.state = { formattedTime: formattedTime };
  };

  render() {
    return  <div className="mam">
              <img className="span1 split-logo" src="#" />
              <div className="span4 text text-left mlm">{this.props.name}</div>
              <div className="span2 text text-right">{this.state.formattedTime}</div>
            </div>;
  };
}
