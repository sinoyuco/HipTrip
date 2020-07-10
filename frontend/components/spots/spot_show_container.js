import {connect} from 'react-redux';
import SpotShow from './spot_show';
import { fetchSpot } from '../../actions/spot_actions'
import {createBooking} from '../../actions/booking_actions';
import {fetchAllReview} from '../../actions/review_actions';

const mSTP = (state, ownProps) => {
    return{
    spot: state.entities.spots[ownProps.match.params.spotId],
    user: state.entities.users[state.session.id],
    reviews: state.entities.reviews
    }
};


const mDTP = (dispatch) => ({
    fetchSpot: spotId => dispatch(fetchSpot(spotId)),
    createBooking: booking => dispatch(createBooking(booking)),
    fetchAllReview: review => dispatch(fetchAllReview(review))
});

export default connect(mSTP, mDTP)(SpotShow);