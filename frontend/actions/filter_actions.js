import {fetchSpots} from './spot_actions';

export const UPDATE_BOUNDS = "UPDATE_BOUNDS";

const changeBounds = (filter_type, value) => ({
    type: UPDATE_BOUNDS,
    filter_type,
    value
});

export const updateBounds = (filter_type, value) => (dispatch, getState) => {
    dispatch(changeBounds(filter_type, value));
    console.log(`${filter_type} --- ${value}`);
    return fetchSpots(getState().ui.filter)(dispatch);
};