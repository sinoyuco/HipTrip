import React from 'react';
import { connect } from 'react-redux';
import { updateBooking } from '../../actions/booking_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import EditForm from './edit_form';

const mSTP = (state) => ({
    errors: state.errors.session,
    booking: state.ui.modal,
    formText: 'Update Booking'
});

const mDTP = (dispatch) => ({
    processForm: booking => dispatch(updateBooking(booking)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(EditForm);