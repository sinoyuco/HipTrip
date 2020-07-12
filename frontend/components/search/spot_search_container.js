import React from 'react';
import { connect } from 'react-redux';
import SpotSearch from './spot_search';
import {fetchSpots} from '../../actions/spot_actions';
import {updateBounds} from '../../actions/filter_actions';

const mSTP = (state,ownProps) => {
    debugger;
    return {
        spots: Object.values(state.entities.spots),
        search_terms: ownProps.location.search_terms || {search_term: '', type: 'All Camping'}
    }

};


const mDTP = (dispatch) => ({
    fetchSpots: () => dispatch(fetchSpots()),
    updateBounds: (filter_type, bounds) => dispatch(updateBounds(filter_type, bounds))
});

export default connect(mSTP, mDTP)(SpotSearch);