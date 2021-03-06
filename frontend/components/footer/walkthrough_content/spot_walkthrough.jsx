import React from 'react';
import { Spring } from 'react-spring/renderprops';


const SpotWalkThrough = () => {
    return (
        <Spring from={{ opacity: 0, marginTop: -50 }} to={{ opacity: 1, marginTop: 0 }} config={{duration: 400}}>
            {props => (
                <div style={props} className="walkthrough-body-main">
                    <h4>Oh, there's pictures!</h4>

                    <p>Amenities, essentials, reviews: all the info!</p>

                    <p>If you like the place, use the booking widget to select dates and guests, and book your trip! Make sure you're logged in for this.</p>

                    <p>If you've been to this place before, leave a review below.</p>

                    <p>Not quite what you like? Go back to the 'Search' page and pick a different spot.</p>
                    <img className="walkthrough-gif" src="https://media.giphy.com/media/OU0hzMkCzK8IR9KKGW/giphy.gif" />
                </div>
            )}
        </Spring>
    );


}

export default SpotWalkThrough;