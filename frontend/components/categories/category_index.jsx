import React from 'react';

class CategoryIndex extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(type){
        return e => this.props.history.push(`discover/${type}`);
    }

    render(){
        return(
            <div className="category-index">
                <div className="category-index-hosting-image-div">
                    <img src="https://hiptrip-aa-seed.s3.amazonaws.com/alpacas.jpg" />
                    <div className="category-index-hosting-message">
                        <h3>Own land? Earn money hosting on HipTrip</h3>
                        <h5>Help more people spend time outside. Share your land with campers, glampers, and RV travelers.</h5>
                        <button>Become a Host</button>
                    </div>
                </div>
                <div className="category-index-experiences">
                    <h3>HipTrip experinces.</h3>
                    <div className="category-index-experiences-1">
                        <div className="category-index-experiences-1-sub">
                            <img src="https://hiptrip-aa-seed.s3.amazonaws.com/cabin.jpg"/>
                            <div className="category-index-experiences-1-sub-text">
                                <h3>Unique Tiny Cabins</h3>
                                <h5>Small and Stylish</h5>
                            </div>
                        </div>
                        <div className="category-index-experiences-1-sub">
                            <img src="https://hiptrip-aa-seed.s3.amazonaws.com/goat_yoga.jpg"/>
                            <div className="category-index-experiences-1-sub-text">
                                <h3>Animal Experiences</h3>
                                <h5>Goats, alpacas, llamas & more</h5>
                            </div>
                        </div>
                        <div className="category-index-experiences-1-sub">
                            <img src="https://hiptrip-aa-seed.s3.amazonaws.com/glamping.jpg"/>
                            <div className="category-index-experiences-1-sub-text">
                                <h3>Stunning Sunshine State</h3>
                                <h5>Colorful camping & glamping</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="category-index-experiences-discover">
                    <h3>Discover camping...</h3>
                    <div className="category-index-experiences-discover-1">

                        <div onClick={this.handleClick('tent_camping')} className="category-index-experiences-discover-1-sub">

                            <div className="category-index-experiences-discover-1-sub-pic">
                                <img src="https://hiptrip-aa-seed.s3.amazonaws.com/cats/tent_camping.jpg"/>
                            </div>

                            <div className="category-index-experiences-discover-1-sub-text">
                                <h3>Tent camping</h3>
                                <h5>Best tent camping near me</h5>
                            </div>

                        </div>

                        <div onClick={this.handleClick('glamping')} className="category-index-experiences-discover-1-sub">

                            <div className="category-index-experiences-discover-1-sub-pic">
                                <img src="https://hiptrip-aa-seed.s3.amazonaws.com/cats/glamping_camping.jpg"/>
                            </div>

                            <div className="category-index-experiences-discover-1-sub-text">
                                <h3>Glamping</h3>
                                <h5>Best glamping spots near me</h5>
                            </div>

                        </div>

                        <div onClick={this.handleClick('rv_parks')} className="category-index-experiences-discover-1-sub">

                            <div className="category-index-experiences-discover-1-sub-pic">
                                <img src="https://hiptrip-aa-seed.s3.amazonaws.com/cats/rvpark_camping.png"/>
                            </div>

                            <div className="category-index-experiences-discover-1-sub-text">
                                <h3>RV park</h3>
                                <h5>Best RV parks near me</h5>
                            </div>

                        </div>

                        <div onClick={this.handleClick('beach_camping')} className="category-index-experiences-discover-1-sub">

                            <div className="category-index-experiences-discover-1-sub-pic">
                                <img src="https://hiptrip-aa-seed.s3.amazonaws.com/cats/beach_camping.jpg"/>
                            </div>

                            <div className="category-index-experiences-discover-1-sub-text">
                                <h3>Beach camping</h3>
                                <h5>Best beach camping near me</h5>
                            </div>

                        </div>

                        <div onClick={this.handleClick('lake_camping')} className="category-index-experiences-discover-1-sub">

                            <div className="category-index-experiences-discover-1-sub-pic">
                                <img src="https://hiptrip-aa-seed.s3.amazonaws.com/cats/lake_camping.jpg"/>
                            </div>

                            <div className="category-index-experiences-discover-1-sub-text">
                                <h3>Lake camping</h3>
                                <h5>Best lake camping near me</h5>
                            </div>

                        </div>

                    </div>

                </div>
                
            </div>
        );
    }
}

export default CategoryIndex;