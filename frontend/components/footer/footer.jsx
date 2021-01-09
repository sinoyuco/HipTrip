import React from 'react';
import {openModal} from '../../actions/modal_actions';
import { connect } from 'react-redux';

class Footer extends React.Component{

    constructor(props){
        super(props)
        this.handleWalkthrough = this.handleWalkthrough.bind(this);
    }


    handleWalkthrough(e){
        e.preventDefault();
        this.props.openModal('walkthrough');
    }


    render(){
        return(
        <div className="main-footer">
            <div className="footer-content">
                    <div className="footer-content-header">
                        <img src="https://hiptrip-aa-seed.s3.amazonaws.com/logo/green_logo.png" border="0" />
                    </div>

                    <div className="footer-content-body">
                        <div className="footer-content-body-1">
                           <h3>HipTrip cares for your wallet.</h3>
                           <p>All trips booked with HipTrip are fully refundable up until the day of the trip's start. Just check your Bookings and remove as necessary.</p>
                        </div>
                        <div className="footer-content-body-2">
                            <h3>HipTrip is everywhere you want to camp.</h3>
                            <p>Discover unique experiences in volcanoes, beaches, spaceships, tunnel systems and more accross the United States. Book one of the 5 camping experiences we offer!</p>
                        </div>
                    </div>

            </div>
            <div className="footer-banner">
                    <div className="footer-banner-inner">
                        <p>HipTrip is created with &lt;3 and hope for our future</p>
                        <div className="help-button" onClick={this.handleWalkthrough}>
                            <div className="help-button-question-mark">
                                <i class="far fa-question-circle"></i>
                                <h3>Help</h3>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        );
    }
}


const mDTP = dispatch => ({
    openModal: (type) => dispatch(openModal(type))
});

export default connect(null, mDTP)(Footer);

