import React from 'react';
import {openModal} from '../../actions/modal_actions';

class BookingIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.dateFormat = this.dateFormat.bind(this);
        this.handleUpdateClick = this.handleUpdateClick.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    // componentDidMount(){
    //     this.props.fetchSpot(this.props.trip.spot_id);
    // }

    handleDelete(e){
        e.preventDefault();
        const start_date_disabled = new Date(parseInt(this.props.trip.start_date.split("-")[0]), parseInt(this.props.trip.start_date.split("-")[1]) - 1, parseInt(this.props.trip.start_date.split("-")[2].slice(0, 2)));
        if(new Date() < start_date_disabled){
            this.props.delete(this.props.trip.id);
        }
    }

    handleUpdateClick(e){
        e.preventDefault();
        const start_date_disabled = new Date(parseInt(this.props.trip.start_date.split("-")[0]), parseInt(this.props.trip.start_date.split("-")[1]) - 1, parseInt(this.props.trip.start_date.split("-")[2].slice(0, 2)));
        if(new Date() < start_date_disabled){
            this.props.openModal('edit', this.props.trip)
        }
        e.stopPropagation();
       
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

    handleClick(e){
        e.preventDefault();
        this.props.history.push(`/spots/${this.props.trip.spot_id}`);
        window.scrollTo(0,0);
    }

    render(){
        // debugger;
        const spot = this.props.trip.spot;
        const start_date_disabled = new Date(parseInt(this.props.trip.start_date.split("-")[0]), parseInt(this.props.trip.start_date.split("-")[1]) - 1, parseInt(this.props.trip.start_date.split("-")[2].slice(0,2)));

        const update_class = (new Date() < start_date_disabled) ? 'update-bookings-button' : 'update-bookings-button-disabled';
        const delete_class = (new Date() < start_date_disabled) ? 'delete-bookings-button' : 'delete-bookings-button-disabled';

        let disabled_message;
        if (update_class === 'update-bookings-button-disabled'){
            disabled_message = (
            <div className="disabled-message">
                <p>This trip has already started or ended, hence you cannot edit this booking.</p>
            </div>);
        }else{
            disabled_message = null;
        }

        let disabled_triangle;
        if (update_class === 'update-bookings-button-disabled') {
            disabled_triangle = (
                <div className="disabled-message-triangle"></div>
                );
        } else {
            disabled_triangle = null;
        }

        return(
            <div onClick={this.handleClick} className="user-bookings-index-item">
                <div className="user-bookings-index-item-imagediv">
                    <img className="user-bookings-index-item-image" src={spot.image_url}></img>
                </div>
                <h3>{spot.name}</h3>
                <h3 className="user-bookings-index-item-state">{spot.city}, {spot.state}</h3>
                <h3 className="user-bookings-index-item-date">{this.dateFormat(this.props.trip.start_date)} - {this.dateFormat(this.props.trip.end_date)}</h3>
                <div className="user-bookings-index-item-buttons">

                    <div className="user-bookings-buttons-div">
                        <button className={update_class} onClick={this.handleUpdateClick}>Edit Booking</button>
                        {disabled_triangle}
                        {disabled_message}
                        
                    </div>

                    <div className="user-bookings-buttons-div">
                        <button className={delete_class} onClick={this.handleDelete}>Delete Booking</button>
                        {disabled_triangle}
                        {disabled_message}
                       
                    </div>
                </div>
                
            </div>
        );
    }


}

export default BookingIndexItem;