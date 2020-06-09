import * as APIUtil from '../util/booking_api_util';

export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const REMOVE_BOOKING = "REMOVE_BOOKING";
export const RECEIVE_ALL_BOOKINGS = "RECEIVE_ALL_BOOKINGS";

const receiveBooking = (booking) => ({
    type: RECEIVE_BOOKING,
    booking
});

const removeBooking = (bookingId) => ({
    type: REMOVE_BOOKING,
    bookingId
});

const receiveAllBookings = (bookings) => ({
    type: RECEIVE_ALL_BOOKINGS,
    bookings
});

export const fetchBookings = userId => dispatch => {
    return APIUtil.fetchBookings(userId).then((bookings) => dispatch(receiveAllBookings(bookings)));
}

export const createBooking = booking => dispatch => {
    return APIUtil.createBooking(booking).then((booking) => dispatch(receiveBooking(booking)));
}

export const deleteBooking = bookingId => dispatch => {
    return APIUtil.deleteBooking(bookingId).then(() => dispatch(removeBooking(bookingId)));
}

export const updateBooking = booking => dispatch => {
    return APIUtil.updateBooking(booking).then((booking) => dispatch(receiveBooking(booking)));
}