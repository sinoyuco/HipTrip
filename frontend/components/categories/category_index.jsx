import React from 'react';
import {Link} from 'react-router-dom';

class CategoryIndex extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleHosting = this.handleHosting.bind(this);
    }

    handleClick(type){
        return e => {
            this.props.history.push(`discover`);
             window.scrollTo(0, 0);}
    }

    handleHosting(e){
        e.preventDefault();
        if(!this.props.session){
            this.props.openModal('signup');
        }
    }

    render(){
        return(
            <div className="category-index">
                <div className="category-index-hosting-image-div">
                    <img src="https://hiptrip-aa-seed.s3.amazonaws.com/alpacas.jpg" />
                    <div className="category-index-hosting-message">
                        <h3>Own land? Earn money hosting on HipTrip</h3>
                        <h5 className="description-hosting">Help more people spend time outside. Share your land with campers, glampers, and RV travelers.</h5>
                    </div>
                </div>
                <div className="category-index-experiences">
                    <h3>HipTrip top destinations...</h3>
                    <div className="category-index-experiences-1">
                        <Link className="category-index-experiences-discover-1-sub-link" to={{ pathname: "/discover", search_terms: { search_term: 'Austin', type: [] } }}>
                            <div className="category-index-experiences-1-sub">
                                <img src="https://hiptrip-aa-seed.s3.amazonaws.com/austin.jpg"/>
                                <div className="category-index-experiences-1-sub-text">
                                    <h3 className="top-three-h3">Austin</h3>
                                    <h5>Live music, bats and barbecue</h5>
                                </div>
                            </div>
                        </Link>

                        <Link className="category-index-experiences-discover-1-sub-link" to={{ pathname: "/discover", search_terms: { search_term: 'california', type: [] } }}>
                        <div className="category-index-experiences-1-sub">
                                <img src="https://hiptrip-aa-seed.s3.amazonaws.com/california.jpg"/>
                            <div className="category-index-experiences-1-sub-text">
                                <h3 className="top-three-h3">California</h3>
                                <h5>Enjoy the sun and the waves</h5>
                            </div>
                        </div>
                        </Link>

                        <Link className="category-index-experiences-discover-1-sub-link" to={{ pathname: "/discover", search_terms: { search_term: 'Georgia', type: [] } }}>
                        <div className="category-index-experiences-1-sub">
                                <img src="https://hiptrip-aa-seed.s3.amazonaws.com/georgia.jpg"/>
                            <div className="category-index-experiences-1-sub-text">
                                <h3 className="top-three-h3">Georgia</h3>
                                <h5>Experience southern hospitality</h5>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>

                
                <div className="category-index-experiences-discover">
                    <h3>Discover camping...</h3>
                    <div className="category-index-experiences-discover-1">

                        <Link className="category-index-experiences-discover-1-sub-link" to={{ pathname: "/discover", search_terms: { search_term: '', type: ['Camping']} }}>
                            <div className="category-index-experiences-discover-1-sub">

                                <div className="category-index-experiences-discover-1-sub-pic">
                                    <img src="https://hiptrip-aa-seed.s3.amazonaws.com/cats/tent_camping.jpg"/>
                                </div>

                                <div className="category-index-experiences-discover-1-sub-text">
                                    <h3 className="bottom-five-h3">Tent camping</h3>
                                    <h5>Best tent camping near me</h5>
                                </div>

                            </div>
                        </Link>

                        <Link className="category-index-experiences-discover-1-sub-link" to={{ pathname: "/discover", search_terms: { search_term: '', type: ['Glamping']} }}>
                            <div className="category-index-experiences-discover-1-sub">

                                <div className="category-index-experiences-discover-1-sub-pic">
                                    <img src="https://hiptrip-aa-seed.s3.amazonaws.com/cats/glamping_camping.jpg"/>
                                </div>

                                <div className="category-index-experiences-discover-1-sub-text">
                                    <h3 className="bottom-five-h3">Glamping</h3>
                                    <h5>Best glamping spots near me</h5>
                                </div>

                            </div>
                        </Link>

                        <Link className="category-index-experiences-discover-1-sub-link" to={{ pathname: "/discover", search_terms: { search_term: '', type: ['RVs'] } }}>
                            <div className="category-index-experiences-discover-1-sub">

                                <div className="category-index-experiences-discover-1-sub-pic">
                                    <img src="https://hiptrip-aa-seed.s3.amazonaws.com/cats/rvpark_camping.png"/>
                                </div>

                                <div className="category-index-experiences-discover-1-sub-text">
                                    <h3 className="bottom-five-h3">RV park</h3>
                                    <h5>Best RV parks near me</h5>
                                </div>

                            </div>
                        </Link>

                        <Link className="category-index-experiences-discover-1-sub-link" to={{ pathname: "/discover", search_terms: { search_term: '', type: ['Beach Camping']} }}>
                            <div className="category-index-experiences-discover-1-sub">

                                <div className="category-index-experiences-discover-1-sub-pic">
                                    <img src="https://hiptrip-aa-seed.s3.amazonaws.com/cats/beach_camping.jpg"/>
                                </div>

                                <div className="category-index-experiences-discover-1-sub-text">
                                    <h3 className="bottom-five-h3">Beach camping</h3>
                                    <h5>Best beach camping near me</h5>
                                </div>

                            </div>
                        </Link>

                        <Link className="category-index-experiences-discover-1-sub-link" to={{ pathname: "/discover", search_terms: { search_term: '', type: ['Lake Camping'] } }}>
                        <div className="category-index-experiences-discover-1-sub">

                            <div className="category-index-experiences-discover-1-sub-pic">
                                <img src="https://hiptrip-aa-seed.s3.amazonaws.com/cats/lake_camping.jpg"/>
                            </div>

                            <div className="category-index-experiences-discover-1-sub-text">
                                    <h3 className="bottom-five-h3">Lake camping</h3>
                                <h5>Best lake camping near me</h5>
                            </div>

                        </div>
                        </Link>

                    </div>

                </div>
                
            </div>
        );
    }
}

export default CategoryIndex;