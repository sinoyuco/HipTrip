import React from 'react';
import BookingIndexItem from './booking_index_item';
import ReviewIndexItem from '../reviews/review_index_item';

class BookingIndex extends React.Component{
    constructor(props){
        super(props)
        this.state={showing: 'Trips'}
        this.handleReviewClick = this.handleReviewClick.bind(this);
    }

    componentDidMount(){
        this.props.fetchBookings(this.props.user.id)
    }

    handleReviewClick(id) {
        return e => {
        e.preventDefault();
        this.props.history.push(`/spots/${id}`);
        }
    }

    render(){
        if(!(this.props.session===this.props.user.id)){
            this.props.history.push("/");
        }
        const trips = this.props.bookings.reverse().map(trip => <BookingIndexItem key={trip.id} trip={trip} delete={this.props.deleteBooking} update={this.props.updateBooking} history={this.props.history} openModal={this.props.openModal}/>)
        const reviews = (this.props.user.reviews ? Object.values(this.props.user.reviews).map(review => <div onClick={this.handleReviewClick(review.spot.id)} className="bookings-review-index-item">
            <h3>{`For: ${review.spot.name} (${review.spot.city}, ${review.spot.state})`}</h3>
            <ReviewIndexItem key={review.id} review={review} />
        </div>) : null);

        const reviews_length = reviews ? reviews.length : 0;

        const saves = null;
        const content = {'Trips': trips, 'Reviews': reviews, 'Saves': saves};

        const tabs_index = {'Trips': 0, 'Saves': 1, 'Reviews':2}
        const tabs = Array.from(document.getElementsByClassName('user-bookings-index-right-header-sub'));
        // debugger;
        tabs.forEach((ele,i) => {
            ele.classList.remove('active-tab');
            if(tabs_index[this.state.showing]===i){
                ele.classList.add('active-tab');
            }
        });

        return(
            <div className="user-bookings-index">
                <div className="user-bookings-index-left">
                    <div className="user-bookings-index-left-profile">
                        <div className="user-bookings-index-left-profile-1">
                            <div className="spot-show-user-profile-element-pic">
                                <img src={this.props.user.profile_photo[0]}></img>
                            </div>
                            <h3>{this.props.user.fname} {this.props.user.lname}</h3>
                        </div>

                        <div className="user-bookings-index-left-profile-2">
                            <i className="fa fa-heart" aria-hidden="true"></i>
                            <h4>Hipcamper since Jan 2020</h4>
                        </div>

                        <div className="user-bookings-index-left-profile-3">
                            <i className="fa fa-globe" aria-hidden="true"></i>
                            <h4>Kansas City, Missouri</h4>
                        </div>

                        <div className="user-bookings-index-left-profile-4">
                            {/* <p><strong>Bio:</strong> {this.props.user.bio}</p> */}
                            <p><strong>Bio:</strong> Hello, I am the demo user, I don't go to any of these places physically but they still make me pay.</p>
                        </div>
                        
                    </div>
                </div>
                <div className="user-bookings-index-right">
                    <div className="user-bookings-index-right-header">

                        <div onClick={() => this.setState({showing: 'Trips'})} className="user-bookings-index-right-header-sub">
                            <h3>{this.props.bookings.length || 0}</h3>
                            <h3>Trips</h3>
                        </div>

                        <div onClick={() => this.setState({ showing: 'Saves' })} className="user-bookings-index-right-header-sub">
                            <h3>{0}</h3>
                            <h3>Saves</h3>
                        </div>

                        <div onClick={() => this.setState({ showing: 'Reviews' })} className="user-bookings-index-right-header-sub">
                            <h3>{reviews_length || 0}</h3>
                            <h3>Reviews</h3>
                        </div>

                    </div>
                    <div className="user-bookings-index-items">
                        {content[this.state.showing]}
                    </div>
                </div>
            </div>
        )
    }

}

export default BookingIndex;