import React from 'react';
import {closeModal} from '../../actions/modal_actions';
import {connect} from 'react-redux';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import { render } from 'react-dom';

class Modal extends React.Component{
    constructor(props){
        super(props);
        // this.setState={error: this.props.error}
    }

    // componentWillUnmount(){
    //     debugger;
    //     this.props.clearErrors();
    // }

    render(){
    if(!this.props.modal){ 
        return null;
    }

    let component;
    switch(this.props.modal){
        case 'login':
            component = <LoginFormContainer/>
            break;
        case 'signup':
            component = <SignupFormContainer/>
            break;
        default:
            return null;
    }

    const errors = this.props.error.map((error,idx) => <li key={idx}>{error}</li>)

    return(
        <div className="modal-background" onClick={this.props.closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
            <ul className="auth-error">
                {errors}
            </ul>
        </div>
    );
    }
}

const mSTP = state => ({
    modal: state.ui.modal,
    error: state.errors.session
});

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP,mDTP)(Modal);