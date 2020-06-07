import {connect} from 'react-redux';
import SpotShow from './spot_show';
import { fetchSpot } from '../../actions/spot_actions'

const mSTP = (state, ownProps) => ({
    spot: state.entities.spots[ownProps.match.params.spotId]
});


const mDTP = (dispatch) => ({
    fetchSpot: spotId => dispatch(fetchSpot(spotId))
});

export default connect(mSTP, mDTP)(SpotShow);