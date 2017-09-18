import React, { Component, PropTypes } from 'react';

class RouteList extends Component {
  componentDidMount() {
    console.info('RouteList.componentDidMount')
    this.props.fetchSpeedRunRoutes()
  }

  render() {
    var routes = this.props.speedRunRoutes.map(function (route, index) {
      return (
        <li>{route.name}</li>
      );
    });

    console.info('RouteList.render routes', routes);
    return (
      <ul>{routes}</ul>
    );
  }
};

RouteList.propTypes = {
  speedRunRoutes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ),
  fetchSpeedRunRoutes: PropTypes.func.isRequired
};

export default RouteList;
