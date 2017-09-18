// HelloWorldWidget is an arbitrary name for any "dumb" component. We do not recommend suffixing
// all your dump component names with Widget.

import React, { PropTypes } from 'react';
import RouteSection from './components/RouteSection';
import { TimeFormatter } from '../helpers/util';
import { TimerApi } from '../apis/timer-api';
import { SplitHelpers } from '../helpers/split-helpers';
import _ from 'lodash';

class SpeedRunRoute extends Component {
  updateTime(time) {
    this.setState({
      currentTime: time,
      formattedTime: TimeFormatter.format(time)
    });

    console.info('attempted to setState', this);
  };

  render() {
    console.info('attempting to render TimerWidget', this.state);
    var sections = this.state.sections.map(function (section, index) {
      console.info('trying to render Split', section);
      return (
        <RouteSection section={section} />
      );
    });

    console.info('Split HTML', section);
    return (
      <div>
        <div className="split span8 split-title">
          <div className="mam">
            <img className="span1 split-logo" src="#" />
            <div className="span4 text text-left mlm">{this.state.name}</div>
            <div className="span2 text text-right" data-previous-best></div>
          </div>
        </div>
        <ul className="no-style span8 pan man" data-timer="">
          {sections}
        </ul>
        <div className="split span8 split-footer">
          <div className="mam">
            <img className="span1 split-logo" src="#" />
            <div className="span6 text text-large text-right  mlm timer-text"data-status="off">
            </div>
          </div>
        </div>
      </div>
    );
  }
};

SpeedRunRoute.propTypes = {
  route: PropTypes.shape({
    id: PropTypes.number.isRequired,
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
      })
    )
  })
};

export default SpeedRunRoute;
