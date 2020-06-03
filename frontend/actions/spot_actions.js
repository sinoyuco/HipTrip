import * as APIUtil from '../util/spot_api_util';

export const RECEIVE_SPOTS = "RECEIVE_SPOTS";
export const RECEIVE_SINGLE_SPOT = "RECEIVE_SINGLE_SPOT";

const receiveSpots = (spots) => ({
    type: RECEIVE_SPOTS,
    spots
});

const receiveSpot = (spot) => ({
    type: RECEIVE_SINGLE_SPOT,
    spot
});

export const fetchSpots = () => dispatch => {
    return APIUtil.fetchSpots().then((spots)=>dispatch(receiveSpots(spots)))
}

export const fetchSpot = (spotId) => dispatch => {
    return APIUtil.fetchSpot(spotId).then((spot) => dispatch(receiveSpot(spot)))
}