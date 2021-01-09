import {connect} from 'react-redux';
import SpotShow from './spot_show';
import { fetchSpot } from '../../actions/spot_actions'
import {createBooking} from '../../actions/booking_actions';
import {fetchAllReview, deleteReview} from '../../actions/review_actions';
import {login} from '../../actions/session_actions';

const mSTP = (state, ownProps) => {
    return{
    spot: state.entities.spots[ownProps.match.params.spotId],
    user: state.entities.users[state.session.id],
    reviews: state.entities.reviews,
    session: state.session.id
    }
};


const mDTP = (dispatch) => ({
    fetchSpot: spotId => dispatch(fetchSpot(spotId)),
    createBooking: booking => dispatch(createBooking(booking)),
    fetchAllReview: review => dispatch(fetchAllReview(review)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId)),
    forceLogin: () => dispatch(login({ email: 'demouser@demoemail.com', password: 'demopass123' }))
});

export default connect(mSTP, mDTP)(SpotShow);