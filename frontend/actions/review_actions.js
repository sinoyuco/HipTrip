import * as APIUtil from '../util/review_api_util';


export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';

const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
});

const receiveAllReviews = (reviews) => ({
    type: RECEIVE_ALL_REVIEWS,
    reviews
});

export const createReview = (review) => dispatch => {
    return APIUtil.createReview(review).then((review) => dispatch(receiveReview(review)))
}

export const fetchAllReview = (spotId) => dispatch => {
    return APIUtil.fetchAllReviews(spotId).then((reviews) => dispatch(receiveAllReviews(reviews)));
}




