import React from 'react';

class LandingWalkThrough extends React.Component {

    render() {
        
        return(
            <div className="walkthrough-body-main">
                <h4>The journey begins!</h4>

                <p>We have created an account for you to ease the journey! Hit the 'Log In' option on the top right, and select 'Demo Login'.</p>

                <p>From the landing, you can search for specific locations, select dates, or types of camping to see filtered results. If you don't have a place in mind, just hit the 'Search' button straight away!</p>

                <p>Below the search bar, there are featured locations and types of camping being shown. Hit these featured places to learn more!</p>
            </div>
        );
    }
}

export default LandingWalkThrough;