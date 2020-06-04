import React from 'react';
import {Route, Link, NavLink} from 'react-router-dom';

class Search extends React.Component{
    constructor(props){
        super(props);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleSubmit(e){
    //     e.preventDefault();
    // }

    render(){
        return(
            <div className="search">
                <div className="search-header">
                    <h1>Feel the nature on your skin.</h1>
                    <h2>Book unique camping experiences on over 30 campsites, cabins, RV parks, public parks and more.</h2>
                </div>
                <div className="search-bar-div">
                    <form className="search-bar-form">
                        <input className="search-bar-input" type="text" placeholder="Austin, Texas"/>
                        <button className="search-bar-date"> Date </button>
                        <button className="search-bar-category">All Camping</button>
                        <Link className="search-bar-submit-link" to="/discover"><button className="search-bar-submit">Search</button></Link>
                    </form>
                </div>
            </div>
        );
    }
}

export default Search;