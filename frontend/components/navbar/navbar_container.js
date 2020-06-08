import {connect} from 'react-redux';
import {openModal} from '../../actions/modal_actions';
import {logout} from '../../actions/session_actions';
import Navbar from './navbar';

const mSTP = state => ({
    session: state.session.id,
    user: state.entities.users[state.session.id]
});

const mDTP = (dispatch) => ({
    openModal: type => dispatch(openModal(type)),
    logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(Navbar);