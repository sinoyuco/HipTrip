import React from 'react';
import {connect} from 'react-redux';
import {updateBooking, deleteBooking, fetchBookings} from '../../actions/booking_actions';
import {openModal} from '../../actions/modal_actions';
import {fetchSpot} from '../../actions/spot_actions';
import BookingIndex from './booking_index';

const mSTP = (state, ownProps) => {
    return{
    user: state.entities.users[ownProps.match.params.userId],
    bookings: Object.values(state.entities.bookings),
    session: state.session.id
}};

const mDTP = (dispatch) => ({
    updateBooking: booking => dispatch(updateBooking(booking)),
    deleteBooking: bookingId => dispatch(deleteBooking(bookingId)),
    fetchBookings: userId => dispatch(fetchBookings(userId)),
    fetchSpot: spotId => dispatch(fetchSpot(spotId)),
    openModal: (type,booking) => dispatch(openModal(type, booking))
});

export default connect(mSTP, mDTP)(BookingIndex)