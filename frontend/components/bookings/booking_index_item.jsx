import React from 'react';

class BookingIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.dateFormat = this.dateFormat.bind(this);
    }

    // componentDidMount(){
    //     this.props.fetchSpot(this.props.trip.spot_id);
    // }

    handleDelete(e){
        e.preventDefault();
        this.props.delete(this.props.trip.id)
    }

    dateFormat(date, days, months){
        const day_of_week = days[date.getDay()];
        const date_num = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        return `${day_of_week}, ${date_num} ${month} ${year}`;
    }

    render(){
        const spot = this.props.trip.spot;
        const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        const months = ['Jan','Feb', 'Mar', 'Apr', 'May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        return(
            <div className="user-bookings-index-item">
                <div className="user-bookings-index-item-imagediv">
                    <img className="user-bookings-index-item-image" src={spot.image_url}></img>
                </div>
                <h3>{spot.name}</h3>
                <h3 className="user-bookings-index-item-state">{spot.city}, {spot.state}</h3>
                <h3>{this.props.trip.start_date}</h3>
                {/* <h3>{this.dateFormat(this.props.trip.start_date,days,months)} - {this.dateFormat(this.props.trip.end_date,days,months)}</h3> */}
                <div className="user-bookings-index-item-buttons">
                    <button className="update-bookings-button" onClick={this.handleEdit}>Edit Booking</button>
                    <button className="delete-bookings-button" onClick={this.handleDelete}>Delete Booking</button>
                </div>
            </div>
        )
    }


}

export default BookingIndexItem;