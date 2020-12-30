import React from 'react';
import { Spring } from 'react-spring/renderprops';


const BookingsWalkThrough = () => {
    return (
        <Spring from={{ opacity: 0, marginTop: -50 }} to={{ opacity: 1, marginTop: 0 }} config={{duration: 400}}>
            {props => (
                <div style={props} className="walkthrough-body-main">
                    <h4>Possible to get a refund?</h4>

                    <p>Here are your trips. If a trip has not started yet, you can edit your booking, or cancel it altogether! If it has, unfortunately you're stuck with us.</p>

                    <p>You can also see your trips if you click on the 'Reviews' tab.</p>
                </div>
            )}
        </Spring>
    );


}

export default BookingsWalkThrough;
