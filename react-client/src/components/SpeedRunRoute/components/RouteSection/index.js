import React, { PropTypes } from 'react';
import { TimeFormatter } from '../helpers/util';

const RouteSection = () => {
  var formattedTime = TimeFormatter.format(this.props.timeInPb);
  console.info('constructor called', this.props.timeInPb, formattedTime);
  this.state = { formattedTime: formattedTime };

  return (
    <div className="mam">
      <img className="span1 split-logo" src="#" />
      <div className="span4 text text-left mlm">{this.props.name}</div>
      <div className="span2 text text-right">{this.state.formattedTime}</div>
    </div>
  );
};

RouteSection.propTypes = {
  // If you have lots of data or action properties, you should consider grouping them by
  // passing two properties: "data" and "actions".
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    gold: PropTypes.number.isRequired,
    pb: PropTypes.number.isRequired
  })
};

export default RouteSection;
