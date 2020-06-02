import React from 'react';
import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form'

const mSTP = (state) => ({
    errors: state.errors.session,
    formType: 'signup',
    formText: 'Join HipTrip'
});

const mDTP = (dispatch) => ({
    processForm: user => dispatch(signup(user)),
    demoLogin: () => dispatch(login({ email: 'demouser@demoemail.com', password: 'demopass123' })),
    closeModal: () => dispatch(closeModal()),
    otherForm: (
        <div className="other-form">
            <p>Already have an account?</p>
            <li className="other-form-link" onClick={() => dispatch(openModal('login'))}>
                Log in!
            </li>
        </div>
    )
});

export default connect(mSTP, mDTP)(SessionForm);