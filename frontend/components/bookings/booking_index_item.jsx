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

    dateFormat(date){
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['Placeholder','Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const splitted = date.split("-")

        const date_num = parseInt(splitted[2].slice(0,2));
        const month =months[parseInt(splitted[1])];
        const year = parseInt(splitted[0]);

        const day_of_week = days[new Date(year, parseInt(splitted[1])-1,date_num).getDay()];
        return `${day_of_week}, ${date_num} ${month} ${year}`;
    }

    render(){
        const spot = this.props.trip.spot;
        return(
            <div className="user-bookings-index-item">
                <div className="user-bookings-index-item-imagediv">
                    <img className="user-bookings-index-item-image" src={spot.image_url}></img>
                </div>
                <h3>{spot.name}</h3>
                <h3 className="user-bookings-index-item-state">{spot.city}, {spot.state}</h3>
                <h3 className="user-bookings-index-item-date">{this.dateFormat(this.props.trip.start_date)} - {this.dateFormat(this.props.trip.end_date)}</h3>
                <div className="user-bookings-index-item-buttons">
                    <button className="update-bookings-button" onClick={this.handleEdit}>Edit Booking</button>
                    <button className="delete-bookings-button" onClick={this.handleDelete}>Delete Booking</button>
                </div>
            </div>
        )
    }


}

export default BookingIndexItem;