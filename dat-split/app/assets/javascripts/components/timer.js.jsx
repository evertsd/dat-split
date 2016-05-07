import TimeFormatter from './util';
// console.info('TimeFormatter', TimeFormatter);

var Timer = React.createClass({
	propTypes: {
		id: React.PropTypes.number,
  },
  getInitialState: function() {
    return {
      title: '',
      currentTime: 0,
      formattedTime: TimeFormatter.formatTime(0)
    };
  },
  updateTime: function(time) {
  	this.setState({
  		currentTime: time,
  		formattedTime: TimeFormatter.format(time)
  	});
  },
  componentDidMount: function() {
  	console.info('component did mount', this);
  	this.setState({
  		title: 'SM64 16 Star ~ Sig',
  	});
  	// this.updateTime(0);
  },
  render: function() {
    return 	<div>
    					<div className="split span8 split-title">
					    	<div className="mam">
						      <img className="span1 split-logo" src="#" />
						      <div className="span4 text text-left mlm">{this.state.title}</div>
						      <div className="span2 text text-right" data-previous-best></div>
						    </div>
						  </div>
						  <ul className="no-style span8 pan man" data-timer=""></ul>
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
  }
});
