import React from 'react';
import { connect } from 'react-redux';
import SpotSearch from './spot_search';
import {fetchSpots} from '../../actions/spot_actions';
import {updateBounds} from '../../actions/filter_actions';

const mSTP = (state) => {
    return {spots: Object.values(state.entities.spots)}
};


const mDTP = (dispatch) => ({
    fetchSpots: () => dispatch(fetchSpots()),
    updateBounds: (bounds) => dispatch(updateBounds(bounds))
});

export default connect(mSTP, mDTP)(SpotSearch);