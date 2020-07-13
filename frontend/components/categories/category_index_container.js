import React from 'react';
import { connect } from 'react-redux';
import CategoryIndex from './category_index';
import {openModal} from '../../actions/modal_actions'
import {updateBounds} from '../../actions/filter_actions'

const mSTP = (state) => ({
    session: state.session.id
});


const mDTP = (dispatch) => ({
    openModal: type => dispatch(openModal(type)),
    updateBounds: (filter_type, bounds) => dispatch(updateBounds(filter_type, bounds))
});

export default connect(mSTP, mDTP)(CategoryIndex);