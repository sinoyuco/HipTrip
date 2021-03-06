import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {updateBounds} from '../../actions/filter_actions';

class NavbarSearchInput extends React.Component{
    constructor(props){
        super(props)
        this.state={search:''}
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        if(this.props.location.pathname === '/discover'){
            this.props.updateBounds('search_term', this.state.search)
        }else{
            this.props.updateBounds('search_term', this.state.search).then(() => this.props.history.push('/discover'));
        }
    }

    handleChange(){
        return e => this.setState({search: e.currentTarget.value});
    }

    render(){
        return(
            <div className="navbar-search-input-div">
                <i className="fa fa-search" aria-hidden="true"></i>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange()} className="navbar-search-input" type="text" placeholder="Type destination... (eg. Austin)"/>
                </form>
            </div>
        );
    }

}

const mSTP = (state) => ({

});

const mDTP = (dispatch) => ({
    updateBounds: (filter_type, bounds) => dispatch(updateBounds(filter_type, bounds))
});


export default connect(mSTP, mDTP)(NavbarSearchInput);
