import { connect } from 'react-redux'
import {
  fetchSpeedRunRoutes,
} from '../../services/DatSplit/actions'
import RouteList from '../../components/RouteList'

const mapStateToProps = (state, ownProps) => {
  console.info('mapStateToProps', state)
  return {
    speedRunRoutes: state.datSplit.speedRunRoutes
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchSpeedRunRoutes: () => {
      dispatch(fetchSpeedRunRoutes())
    }
  }
}

const RouteListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteList)

export default RouteListContainer
