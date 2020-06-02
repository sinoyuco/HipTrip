import React from 'react';
import {connect} from 'react-redux';
import { login } from '../../actions/session_actions';
import {openModal, closeModal} from '../../actions/modal_actions';
import SessionForm from './session_form'

const mSTP = (state) => ({
    errors: state.errors.session,
    formType: 'login',
    formText: 'Log in'
});

const mDTP = (dispatch) => ({
    processForm: user => dispatch(login(user)),
    demoLogin: () => dispatch(login({ email: 'demouser@demoemail.com', password: 'demopass123' })),
    closeModal: () => dispatch(closeModal()),
    otherForm: (
        <div className="other-form">
            <p>Don't have a HipTrip account?</p>
            <li className="other-form-link" onClick={() => dispatch(openModal('signup'))}>
                Sign up!
            </li>
        </div>
    )
});

export default connect(mSTP, mDTP)(SessionForm);