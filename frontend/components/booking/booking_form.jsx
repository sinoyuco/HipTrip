import React from 'react';

class BookingForm extends React.Component{
    constructor(props){
        super(props)
        this.state={guests: 1, nights: 1}
    }

    render(){
        return(
            <div className={this.props.scroll}>
                <div className="booking-price">
                    <h2>${this.props.price}</h2>
                    <h3 className="price-per-night">average per night</h3>
                </div>

                <div className="booking-checking">
                    <div className="booking-check-in">
                        <h3>Check in</h3>
                        <h3>Date</h3>
                    </div>

                    <div className="booking-check-out">
                        <h3>Check out</h3>
                        <h3>Date</h3>
                    </div>

                    <div className="booking-guests">
                        <h3>Guests</h3>
                        <div className="bookings-guets-calculation">
                            <span className="guests-minus">-</span>
                            <h3>{this.state.guests}</h3>
                            <span className="guests-plus">+</span>
                        </div>
                    </div>
                </div>

                <div className="booking-savings">
                    <h3>Weeknight savings</h3>
                    <h3 className="savings-amount">-$30.00</h3>
                </div>

                <div className="booking-subtotal">
                    <h3>Subtotal</h3>
                    <h3>$90.00</h3>
                </div>

                <div className="booking-submit">
                    <button>Book</button>
                </div>

            </div>
        );
    }
}

export default BookingForm;