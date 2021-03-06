import {OPEN_MODAL, CLOSE_MODAL} from '../actions/modal_actions'

const modalReducer = (state = null, action) =>{
    Object.freeze(state);
    switch(action.type){
        case OPEN_MODAL:
            if(!action.booking){
                return action.modal;
            }else{
                return action.booking;
            }
        case CLOSE_MODAL:
            return null;
        default:
            return state;
    }

}

export default modalReducer;