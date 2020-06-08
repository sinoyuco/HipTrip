import * as APIUtil from '../util/booking_api_util';

export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const REMOVE_BOOKING = "REMOVE_BOOKING";

const receiveBooking = (booking) => ({
    type: RECEIVE_BOOKING,
    booking
});

const removeBooking = (bookingId) => ({
    type: REMOVE_BOOKING,
    bookingId
});

export const fetchBooking = bookingId => dispatch => {
    return APIUtil.fetchBooking(bookingId).then((booking) => dispatch(receiveBooking(booking)));
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