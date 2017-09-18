import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles.css'
import ListItem from './ListItem'

class RouteList extends Component {
  render() {
    const {
      routes,
      selectedRouteId,
      onRouteClick
    } = this.props

    const routeItems = routes.map(route => {
      var check = route.id == selectedRouteId

      return (
        <a className="route-item" onClick={() => {onRouteClick(route.id)}}>
          {route.name}{check}
        </a>
      )
    })

    return(
      <div className="ui vertical menu routes">
        {routeItems}
      </div>
    )
  }
}

RouteList.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  onRouteClick: PropTypes.func.isRequired,
  selectRouteId: PropTypes.number
}

export default RouteList
