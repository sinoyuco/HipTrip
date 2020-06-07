import React from 'react';
import {Link} from 'react-router-dom';
import EssentialsTable from '../tables/essentials_table';
import AmenitiesTable from '../tables/amenities_table';
import CampSiteTable from '../tables/campsite_table';
import BookingForm from '../booking/booking_form';

class SpotShow extends React.Component{
    constructor(props){
        super(props);
        this.state={scrollFixed: true}
    }

    componentDidMount(){
        let spotId = parseInt(this.props.match.params.spotId);
        this.props.fetchSpot(spotId);
        document.addEventListener('scroll', () => {
            const belowPictures = window.scrollY < 590;
            if (belowPictures !== this.state.scrollFixed) {
                this.setState({ scrollFixed: belowPictures });
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

        const scrollClass = this.state.scrollFixed ? 'spot-show-booking-div' : 'spot-show-booking-div-absolute';

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
                                    <Link className="spot-show-state-link" to="/discover">{this.props.spot.state}</Link>
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
                                <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                                    <h3 className="spot-show-header-hundred-percent">100%</h3>
                                <h3>Recommend</h3>
                            </div>

                            <div className="spot-show-header-2-2">

                                    <button className="spot-show-header-2-2-upload">
                                        <i class="fa fa-camera" aria-hidden="true"></i>
                                        Upload
                                    </button>

                                <button className="spot-show-header-2-2-save">
                                        Save to List
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                </button>

                                <button className="spot-show-header-2-2-share">
                                    <i class="fa fa-share-square" aria-hidden="true"></i>
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
                    
                </div>
                <div className="spot-show-side">
                        <BookingForm price={this.props.spot.price} scroll={scrollClass}/>
                </div>
                
            </div>
        </div>
        );
    }

}

export default SpotShow;

