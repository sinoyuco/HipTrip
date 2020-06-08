import React from 'react';

class BookingForm extends React.Component{
    constructor(props){
        super(props)
        const today = new Date();
        this.state={
            start_date: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
            end_date: new Date(today.getFullYear(), today.getMonth(), today.getDate()+1),
            guests: 1,
            savings: (this.props.spot.price/4)
        }
        this.handlePlus = this.handlePlus.bind(this);
        this.handleMinus = this.handleMinus.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handlePlus(e){
        e.preventDefault();
        this.setState({guests: this.state.guests + 1});
        this.setState({ savings: (this.props.spot.price / 4) * (this.state.guests + 1) });
    }

    handleMinus(e) {
        e.preventDefault();
        if(this.state.guests > 1){
            this.setState({ guests: this.state.guests - 1 });
            this.setState({ savings: (this.props.spot.price / 4) * (this.state.guests - 1) });
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.action({
            spot_id: this.props.spot.id,
            user_id: window.currentUser.id,
            start_date: this.state.start_date,
            end_date: this.state.end_date,
            num_guests: this.state.guests,
            total_price: ((this.state.guests) * (this.state.end_date.getDate() - this.state.start_date.getDate()) * (this.props.spot.price)) - this.state.savings
        }).then(() => this.props.history.push(`/users/${window.currentUser.id}/bookings`));
    }


    render(){
        const day_diff = this.state.end_date.getDate() - this.state.start_date.getDate();
        const subtotal = ((this.state.guests) * (day_diff) * (this.props.spot.price)) - this.state.savings;
        return(
            <div className={this.props.scroll}>
                <div className="booking-price">
                    <h2>${this.props.spot.price}</h2>
                    <h3 className="price-per-night">average per night</h3>
                </div>

                <div className="booking-checking">
                    <div className="booking-check-in">
                        <h3><strong>Check in</strong></h3>
                        <h3>{this.state.start_date.toLocaleDateString()}</h3>
                    </div>

                    <div className="booking-check-out">
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

                <div className="booking-savings">
                    <h3>Weeknight savings</h3>
                    <h3 className="savings-amount">{`-$${this.state.savings.toFixed(2)}`}</h3>
                </div>

                <div className="booking-subtotal">
                    <h3>Subtotal</h3>
                    <h3>{`$${subtotal.toFixed(2)}`}</h3>
                </div>

                <div onClick={this.handleSubmit} className="booking-submit">
                    <button>Book</button>
                </div>

            </div>
        );
    }
}


export default BookingForm;