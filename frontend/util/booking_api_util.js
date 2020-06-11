// export const fetchBooking = (bookingId) => {
//     return $.ajax({
//         method: 'GET',
//         url: `/api/users/${userID}/${bookingId}`
//     });
// }

export const fetchBookings = (userId) => {
    return $.ajax({
        method: 'GET',
        url: `api/users/${userId}/bookings`
    });
}


export const createBooking = (booking) => {
    return $.ajax({
        method: 'POST',
        url: '/api/bookings',
        data: {booking}
    });
}

export const updateBooking = (booking) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/bookings/${booking.id}`,
        data: { booking }
    });
}

export const deleteBooking = (bookingId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/bookings/${bookingId}`
    });
}