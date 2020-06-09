import React from 'react';
import {connect} from 'react-redux';
import {updateBooking, deleteBooking} from '../../actions/booking_actions';
import {fetchSpot} from '../../actions/spot_actions';
import BookingIndex from './booking_index';

const mSTP = (state, ownProps) => {
    return{
    user: state.entities.users[ownProps.match.params.userId],
    bookings: Object.values(state.entities.users[ownProps.match.params.userId].bookings)
}};

const mDTP = (dispatch) => ({
    updateBooking: booking => dispatch(updateBooking(booking)),
    deleteBooking: bookingId => dispatch(deleteBooking(bookingId)),
    fetchSpot: spotId => dispatch(fetchSpot(spotId))
});

export default connect(mSTP, mDTP)(BookingIndex)