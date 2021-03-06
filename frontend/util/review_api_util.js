export const createReview = (review) => {
    return $.ajax({
        method: 'POST',
        url: '/api/reviews',
        data:{review}
    });
}

export  const fetchAllReviews = (spotId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/spots/${spotId}/reviews`
    });
}

export const deleteReview = (reviewId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/reviews/${reviewId}`
    });
}