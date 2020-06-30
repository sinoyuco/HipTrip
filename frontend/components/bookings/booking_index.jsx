import React from 'react';
import BookingIndexItem from './booking_index_item';

class BookingIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchBookings(this.props.user.id)
    }

    render(){
        if(!(this.props.session===this.props.user.id)){
            this.props.history.push("/");
        }
        const trips = this.props.bookings.reverse().map(trip => <BookingIndexItem key={trip.id} trip={trip} delete={this.props.deleteBooking} update={this.props.updateBooking} history={this.props.history}/>)
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
                            <h4>Where are you from?</h4>
                        </div>

                        <div className="user-bookings-index-left-profile-4">
                            {/* <p><strong>Bio:</strong> {this.props.user.bio}</p> */}
                            <p><strong>Bio:</strong> Hello, I am the demo user, I don't go to any of these places physically but they still make me pay.</p>
                        </div>
                        
                    </div>
                </div>
                <div className="user-bookings-index-right">
                    <div className="user-bookings-index-right-header">

                        <div className="user-bookings-index-right-header-sub">
                            <h3>{this.props.bookings.length || 0}</h3>
                            <h3>Trips</h3>
                        </div>

                        <div className="user-bookings-index-right-header-sub">
                            <h3>{0}</h3>
                            <h3>Saves</h3>
                        </div>

                        <div className="user-bookings-index-right-header-sub">
                            <h3>{0}</h3>
                            <h3>Reviews</h3>
                        </div>

                    </div>
                    <div className="user-bookings-index-items">
                        {trips}
                    </div>
                </div>
            </div>
        )
    }

}

export default BookingIndex;