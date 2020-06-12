import React from 'react';
import {Link} from 'react-router-dom';
import EssentialsTable from '../tables/essentials_table';
import AmenitiesTable from '../tables/amenities_table';
import CampSiteTable from '../tables/campsite_table';
import BookingFormContainer from '../booking_form/booking_form_container';
import SpotShowMap from '../map/spot_show_map';
import ReviewIndex from '../reviews/review_index';
// import CreateReviewContainer from '../reviews/create_review_container';

class SpotShow extends React.Component{
    constructor(props){
        super(props);
        this.state = { scrollFixedUp: true, scrollFixedDown: false}
    }

    componentDidMount(){
        let spotId = parseInt(this.props.match.params.spotId);
        this.props.fetchSpot(spotId);

        document.addEventListener('scroll', () => {
            const belowPictures = window.scrollY < 550;
            if (belowPictures !== this.state.scrollFixedUp) {
                this.setState({ scrollFixedUp: belowPictures });
            }
        });

        document.addEventListener('scroll', () => {
            //-491 for footer, -400 for map, +94 for fixed header
            const belowPictures2 = window.scrollY > (document.body.scrollHeight - window.innerHeight - 491 - 400 + 94 + 250);
            if (belowPictures2 !== this.state.scrollFixedDown){ 
                this.setState({ scrollFixedDown: belowPictures2 });
            }
        });
        
    }

    render(){
        if(!this.props.spot){
            return null;
        }
        const spot_photos = this.props.spot.photoUrls.map((photo_url,idx) => <div className="spot-show-images-sub" key={idx}>
            <img src={photo_url}></img>
        </div>);
    
        const scrollClass = this.state.scrollFixedUp ? 'spot-show-booking-div' : (this.state.scrollFixedDown ? 'spot-show-booking-div-fixed-down' : 'spot-show-booking-div-absolute');
        const reviews_passed = this.props.spot.reviews ? Object.values(this.props.spot.reviews) : []

        // const review_form = null;

        // if(this.props.user && Object.keys(this.props.user.bookings).length && Object.values(this.props.user.bookings).some(ele => ele.spot_id === this.props.spot.id)){
        //     review_form = <CreateReviewContainer spot_id={this.props.spot.id} user_id={this.props.user.id} action={this.props.createReview}/>
        // }

        return(
            <div className="spot-show-master">
            <div className="spot-show-images">
                {spot_photos}
            </div>
            <div className="spot-show">
                <div className="spot-show-main">
                    <div className="spot-show-header">
                        <div className="spot-show-1">
                            <div className="spot-show-1-1">
                                    <li>United States</li>
                                    <span className="spot-show-1-1-span">></span>
                                    <Link className="spot-show-state-link" to={`/discover/${this.props.spot.state.toLowerCase()}`}>{this.props.spot.state}</Link>
                                    <span className="spot-show-1-1-span">></span>
                                    <Link className="spot-show-state-link" to={`/spots/${this.props.spot.id}`}>{this.props.spot.name}</Link>
                            </div>

                            <div className="spot-show-1-name">
                                <h2>{this.props.spot.name}</h2>
                                <div className="spot-show-tick">
                                    <span>&#10003;</span>
                                    <div className="spot-show-tick-arrow"></div>
                                    <div className="spot-show-tick-message">
                                            <p>The listing's accuracy has been verified by a <strong>HipTrip Associate.</strong>. You can plan your visit without doubts.</p>
                                    </div>
                                </div>
                            </div>

                                <h3><strong>Nearby:</strong> The great outdoors of the US of A</h3>
                        </div>
                        <div className="spot-show-header-2">
                            <div className="spot-show-header-2-1">
                                    <div className="abovethumbs-div">
                                         <i className="abovethumbs fa fa-thumbs-up" aria-hidden="true"></i>
                                    </div>
                                    <h3 className="spot-show-header-hundred-percent">100%</h3>
                                <h3>Recommend</h3>
                            </div>

                            <div className="spot-show-header-2-2">

                                    <button className="spot-show-header-2-2-upload">
                                        <i className="fa fa-camera" aria-hidden="true"></i>
                                        Upload
                                    </button>

                                <button className="spot-show-header-2-2-save">
                                        Save to List
                                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                                </button>

                                <button className="spot-show-header-2-2-share">
                                    <i className="fa fa-share-square" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="spot-show-bot">
                        <div className="spot-show-user-profile">
                                <div className="spot-show-user-profile-element">
                                    <div className="spot-show-user-profile-element-pic">
                                        <img src={this.props.spot.host_photo[0]}></img>
                                    </div>
                                    <p><strong>Hosted by:</strong> {this.props.spot.host.fname} {this.props.spot.host.lname} </p>
                                </div>
                        </div>

                        <div className="spot-show-description">
                            <p>{this.props.spot.description}</p>
                        </div>

                    </div>
                    
                    <div className = "spot-show-tables">
                        <div className="spot-show-tables-campsite">
                            <h2>Campsite</h2>
                            <CampSiteTable elements={this.props.spot.campsites.map(el => el.campsite_property_type)}/>
                        </div>

                        <div className="spot-show-tables-essentials">
                            <h2>Essentials</h2>
                            <EssentialsTable elements={this.props.spot.essentials.map(el => el.essential_type)} />
                        </div>

                        <div className="spot-show-tables-amenities">
                            <h2>Amenities</h2>
                            <AmenitiesTable elements={this.props.spot.amenities.map(el => el.amenity_type)} />
                        </div>

                    </div>

                    <div className="spot-show-reviews">
                        <ReviewIndex reviews={reviews_passed}/>
                    </div>
                    {/* {review_form} */}
                    
                </div>
                <div className="spot-show-side">
                        <BookingFormContainer action={this.props.createBooking} spot={this.props.spot} scroll={scrollClass} history={this.props.history}/>
                </div>
                
            </div>
                <SpotShowMap latitude={this.props.spot.latitude} longitude={this.props.spot.longitude} />
            </div>
        
        );
    }

}

export default SpotShow;

