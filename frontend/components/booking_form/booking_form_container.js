import React from 'react';
import { connect } from 'react-redux';
import BookingForm from './booking_form';
import {openModal} from '../../actions/modal_actions';

const mSTP = (state, ownProps) => {
    return{
        session: state.session.id
    };
}


const mDTP = dispatch => {
    return{
        openModal: type => dispatch(openModal(type))
    };
}

export default connect(mSTP, mDTP)(BookingForm);

