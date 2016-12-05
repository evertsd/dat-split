import React, { PropTypes } from 'react';
import TimerWidget from '../components/TimerWidget';
import _ from 'lodash';

// Simple example of a React "smart" component
export default class Timer extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired, // this is passed from the Rails view
  };

  constructor(props, context) {
    super(props, context);

    this.state = { id: this.props.id };
  }

  render() {
    return (
      <div>
        <TimerWidget id={this.state.id} />
      </div>
    );
  }
}
