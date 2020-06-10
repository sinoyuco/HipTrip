import {fetchSpots} from './spot_actions';

export const UPDATE_BOUNDS = "UPDATE_BOUNDS";

const changeBounds = (bounds) => ({
    type: UPDATE_BOUNDS,
    bounds
});

export const updateBounds = (bounds) => (dispatch, getState) => {
    dispatch(changeBounds(bounds));
    return fetchSpots(getState().ui.filter)(dispatch);
};