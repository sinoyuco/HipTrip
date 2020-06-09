import React from 'react';

class Footer extends React.Component{





    render(){
        return(
        <div className="main-footer">
            <div className="footer-content">
                    <div className="footer-content-header">
                       <img src="https://fontmeme.com/permalink/200603/ef81bf1f1f2d6819aaf0a2e41a177943.png" alt="the-mandalorian-font" border="0" />
                    </div>

                    <div className="footer-content-body">
                        <div className="footer-content-body-1">
                            <div className="footer-content-body-about">
                                <h3>About us</h3>
                                <li>Careers</li>
                                <li>Journal</li>
                                <li>Gift Cards</li>
                                <li>Contact</li>
                                <li>Camper FAQ</li>
                            </div>

                            <div className="footer-content-body-hosting">
                                <h3>Hosting</h3>
                                <li>Becoming a Host</li>
                                <li>Is my land a fit?</li>
                                <li>Insurance</li>
                                <li>Standards</li>
                                <li>Hosting FAQ</li>
                            </div>
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
                        <div className="help-button">
                            <div className="help-button-question-mark">
                                <i className="fa fa-question" aria-hidden="true"></i>
                            </div>
                            <h3>Help</h3>
                        </div>
                    </div>
            </div>
        </div>
        );
    }
}

export default Footer;
