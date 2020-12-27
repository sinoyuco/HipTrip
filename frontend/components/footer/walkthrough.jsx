import React from 'react';

class WalkThrough extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showing: ''
        };
    }



    render(){
        // let content = this.state.showing == '' ? null : {
        //     'Landing': <LandingWalkThrough/>,
        //     'Search': <SearchWalkThrough/>,
        //     'Spot': <SpotWalkThrough/>,
        //     'Bookings': <BookingsWalkThrough/>
        // };

        return(
            <div className="walkthrough-main">
                <div className="walkthrough-nav">
                    <h3 onClick={() => this.setState({showing: 'Landing'})}>Landing</h3>
                    <h3 onClick={() => this.setState({ showing: 'Search' })}>Search</h3>
                    <h3 onClick={() => this.setState({ showing: 'Spot' })}>Spot</h3>
                    <h3 onClick={() => this.setState({ showing: 'Bookings' })}>Bookings</h3>
                </div>
                <div className="walkthrough-body-main">
                    {/* {content[this.state.showing]} */}
                </div>
            </div>
        );
    }

}

export default WalkThrough;