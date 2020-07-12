import {UPDATE_BOUNDS} from '../actions/filter_actions';

const filterReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type){
        case UPDATE_BOUNDS:
            // return {bounds: action.bounds};
            debugger;
            return Object.assign({}, state, {[action.filter_type]: action.value});
        default:
            return state;
    }
}

export default filterReducer;