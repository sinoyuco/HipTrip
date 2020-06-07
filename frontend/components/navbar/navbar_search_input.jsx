import React from 'react';
import { Redirect } from 'react-router-dom';

class NavbarSearchInput extends React.Component{
    constructor(props){
        super(props)
        this.state={search:''}
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        // e.preventDefault();
        // debugger;
        // <Redirect exact to="/"/>
        this.props.history.push(`/discover/${this.state.search}`);
    }

    handleChange(){
        return e => this.setState({search: e.currentTarget.value});
    }

    render(){
        return(
            <div className="navbar-search-input-div">
                <i className="fa fa-search" aria-hidden="true"></i>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange()} className="navbar-search-input" type="text" placeholder="Austin, Texas"/>
                </form>
            </div>
        );
    }

}

export default NavbarSearchInput;
