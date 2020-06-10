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
                        <div className="search-bar-main">
                            <div className="search-bar-input-icon">
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </div>
                            <input className="search-bar-input" type="text" placeholder="Austin, Texas"/>
                        </div>

                        <button className="search-bar-date">
                            <div className="search-bar-date-icon">
                                <i className="far fa-calendar"></i>
                            </div>
                            <h5>Enter dates</h5>
                        </button>

                        <button className="search-bar-category">

                            <div className="search-bar-category-icon">
                                <i className="fas fa-tree"></i>
                            </div>

                            <h5>All Camping </h5>

                            <div className="search-bar-category-icon-2">
                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                            </div>

                        </button>
                        <Link className="search-bar-submit-link" to="/discover"><button className="search-bar-submit">Search</button></Link>
                    </form>
                </div>
            </div>
        );
    }
}

export default Search;