import React from 'react';
import DayPicker from 'react-day-picker';

class EditForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            start_date: new Date(this.props.booking.start_date),
            end_date: new Date(this.props.booking.end_date),
            guests: this.props.booking.num_guests,
            savings: (this.props.booking.spot.price / 4),
            day_picker_display: false,
            day_picker_type: 'in'
        }
        this.handlePlus = this.handlePlus.bind(this);
        this.handleMinus = this.handleMinus.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDayClickCheckIn = this.handleDayClickCheckIn.bind(this);
        this.handleDayClickCheckOut = this.handleDayClickCheckOut.bind(this);
        this.handleDayPickerDisplayCheckIn = this.handleDayPickerDisplayCheckIn.bind(this);
        this.handleDayPickerDisplayCheckOut = this.handleDayPickerDisplayCheckOut.bind(this);
    }

    handlePlus(e) {
        e.preventDefault();
        this.setState({ guests: this.state.guests + 1 });
        this.setState({ savings: (this.props.booking.spot.price / 4) * (this.state.guests + 1) });
    }

    handleMinus(e) {
        e.preventDefault();
        if (this.state.guests > 1) {
            this.setState({ guests: this.state.guests - 1 });
            this.setState({ savings: (this.props.booking.spot.price / 4) * (this.state.guests - 1) });
        }
    }

    handleDayClickCheckIn(day) {

        if (day > new Date()) {
            this.setState({ start_date: day, day_picker_display: false });
        } else {

        }
    }

    handleDayClickCheckOut(day) {
        if (day > this.state.start_date) {
            this.setState({ end_date: day, day_picker_display: false });
        } else {

        }
    }

    handleDayPickerDisplayCheckIn(e) {
        this.state.day_picker_display ? this.setState({ day_picker_display: false, day_picker_type: 'in' }) : this.setState({ day_picker_display: true, day_picker_type: 'in' })
    }

    handleDayPickerDisplayCheckOut(e) {
        this.state.day_picker_display ? this.setState({ day_picker_display: false, day_picker_type: 'out' }) : this.setState({ day_picker_display: true, day_picker_type: 'out' })
    }

    handleSubmit(e) {
        this.props.processForm({
            id: this.props.booking.id,
            spot_id: this.props.booking.spot.id,
            user_id: this.props.booking.user_id,
            start_date: this.state.start_date,
            end_date: this.state.end_date,
            num_guests: this.state.guests,
            total_price: ((this.state.guests) * (this.state.end_date.getDate() - this.state.start_date.getDate()) * (this.props.booking.spot.price)) - this.state.savings
        }).then(() => {
            this.props.closeModal();
        });
    }


    render(){
        const day_diff = this.state.end_date.getDate() - this.state.start_date.getDate();
        const subtotal = ((this.state.guests) * (day_diff) * (this.props.booking.spot.price)) - this.state.savings;
        const modifiersStyles = {
            selected: {
                color: 'white',
                backgroundColor: '#40d9ac'
            }
        }

        const day_picker = this.state.day_picker_display ? (this.state.day_picker_type === 'in' ? <DayPicker className="day-picker-widget" onDayClick={this.handleDayClickCheckIn} selectedDays={this.state.start_date} modifiersStyles={modifiersStyles} disabledDays={{ before: new Date() }} /> : <DayPicker className="day-picker-widget" onDayClick={this.handleDayClickCheckOut} selectedDays={this.state.end_date} modifiersStyles={modifiersStyles} disabledDays={{ before: new Date() }} />) : null
        debugger;
        return(
            <div className="edit-form-master">
                <div className="edit-form-spot-show">
                    <img className="edit-form-spot-show-image" src={this.props.booking.spot.image_url}/>
                    <h3 className="edit-form-spot-show-name">{this.props.booking.spot.name}</h3>
                    <h5 className="edit-form-spot-show-location">{this.props.booking.spot.city}, {this.props.booking.spot.state}</h5>
                </div>
                <form>
                    <div className='spot-show-booking-div'>
                        <div className="booking-price">
                            <h2>${this.props.booking.spot.price}</h2>
                            <h3 className="price-per-night">average per night</h3>
                        </div>

                        <div className="booking-checking">
                            <div className="booking-check-in" onClick={this.handleDayPickerDisplayCheckIn}>
                                <h3><strong>Check in</strong></h3>
                                <h3>{this.state.start_date.toLocaleDateString()}</h3>
                            </div>

                            <div className="booking-check-out" onClick={this.handleDayPickerDisplayCheckOut}>
                                <h3><strong>Check out</strong></h3>
                                <h3>{this.state.end_date.toLocaleDateString()}</h3>
                            </div>

                            <div className="booking-guests">
                                <h3><strong>Guests</strong></h3>
                                <div className="bookings-guets-calculation">
                                    <span className="guests-minus" onClick={this.handleMinus}>-</span>
                                    <h3>{this.state.guests}</h3>
                                    <span className="guests-plus" onClick={this.handlePlus}>+</span>
                                </div>
                            </div>
                        </div>

                        {day_picker}

                        <div className="booking-savings">
                            <h3>Surprise savings</h3>
                            <h3 className="savings-amount">{`-$${this.state.savings.toFixed(2)}`}</h3>
                        </div>

                        <div className="booking-subtotal">
                            <h3>Subtotal</h3>
                            <h3>{`$${subtotal.toFixed(2)}`}</h3>
                        </div>

                        <div onClick={this.handleSubmit} className="booking-submit">
                            <button>{this.props.formText}</button>
                        </div>

                    </div>
                </form>
            </div>
        );
    }

}

export default EditForm;