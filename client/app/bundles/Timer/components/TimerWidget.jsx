// HelloWorldWidget is an arbitrary name for any "dumb" component. We do not recommend suffixing
// all your dump component names with Widget.

import React, { PropTypes } from 'react';
import Split from './Split';
import { TimeFormatter } from '../helpers/util';
import { TimerApi } from '../apis/timer-api';
import { SplitHelpers } from '../helpers/split-helpers';
import _ from 'lodash';

// Simple example of a React "dumb" component
export default class TimerWidget extends React.Component {
  static propTypes = {
    // If you have lots of data or action properties, you should consider grouping them by
    // passing two properties: "data" and "actions".
    id: PropTypes.number.isRequired,
  };

  constructor(props, context) {
    super(props, context);

    // Uses lodash to bind all methods to the context of the object instance, otherwise
    // the methods defined here would not refer to the component's class, not the component
    // instance itself.
    TimerApi.get(this.props.id, function(data) {
      this.state = {
        name: data.name,
        splits: data.splits,
        currentTime: TimeFormatter.format(0),
        currentPbTime: TimeFormatter.format(SplitHelpers.currentPb(data.splits))
      };


    }.bind(this));
  };

  updateTime(time) {
    this.setState({
      currentTime: time,
      formattedTime: TimeFormatter.format(time)
    });

    console.info('attempted to setState', this);
  };

  render() {
    console.info('attempting to render TimerWidget', this.state);
    var splits = this.state.splits.map(function (split, index) {
      console.info('trying to render Split', split);
      return (
        <Split name={split.name} bestTime={split.bestTime} timeInPb={split.timeInPb} />
      );
    });
    console.info('Split HTML', splits);
    return  <div>
              <div className="split span8 split-title">
                <div className="mam">
                  <img className="span1 split-logo" src="#" />
                  <div className="span4 text text-left mlm">{this.state.name}</div>
                  <div className="span2 text text-right" data-previous-best></div>
                </div>
              </div>
              <ul className="no-style span8 pan man" data-timer="">
                {splits}
              </ul>
              <div className="split span8 split-footer">
                <div className="mam">
                  <img className="span1 split-logo" src="#" />
                  <div className="span6 text text-large text-right  mlm timer-text"
                       data-status="off">
                    {this.state.formattedTime}
                  </div>
                </div>
              </div>
            </div>;
  };
}
