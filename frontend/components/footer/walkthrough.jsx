import React from 'react';
import LandingWalkThrough from './walkthrough_content/landing_walkthrough';
import SpotWalkThrough from './walkthrough_content/spot_walkthrough';
import SearchWalkThrough from './walkthrough_content/search_walkthrough';
import BookingsWalkThrough from './walkthrough_content/bookings_walkthrough';


class WalkThrough extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showing: 'None'
        };
    }



    render(){
        let defaultGreeting = <div className="walkthrough-body-default">
            <h3>Welcome to HipTrip!!</h3>
            <h4>Click to the navigational headers above to learn more about our functionality.</h4>
        </div>;

        let content = {
            'Landing': <LandingWalkThrough/>,
            'Search': <SearchWalkThrough/>,
            'Spot': <SpotWalkThrough/>,
            'Bookings': <BookingsWalkThrough/>,
            'None': defaultGreeting
        };

        return(
            <div className="walkthrough-main">
                <div className="walkthrough-qm">
                    <div>
                    <i class="far fa-question-circle walkthrough-qm-logo"></i>
                    </div>
                </div>
                <div className="walkthrough-nav">
                    <h3 className={this.state.showing == 'Landing' ? 'active-walkthrough-nav' : ''} onClick={() => this.setState({showing: 'Landing'})}>Landing</h3>
                    <h3 className={this.state.showing == 'Search' ? 'active-walkthrough-nav' : ''} onClick={() => this.setState({ showing: 'Search' })}>Search</h3>
                    <h3 className={this.state.showing == 'Spot' ? 'active-walkthrough-nav' : ''} onClick={() => this.setState({ showing: 'Spot' })}>Spot</h3>
                    <h3 className={this.state.showing == 'Bookings' ? 'active-walkthrough-nav' : ''} onClick={() => this.setState({ showing: 'Bookings' })}>Bookings</h3>
                </div>
                <div className="walkthrough-body">
                    {content[this.state.showing]}
                </div>
            </div>
        );
    }

}

export default WalkThrough;