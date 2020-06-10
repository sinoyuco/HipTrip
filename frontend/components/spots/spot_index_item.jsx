import React from 'react';
import { withRouter } from 'react-router-dom';


class SpotIndexItem extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        this.props.history.push(`/spots/${this.props.spot.id}`);
        window.scrollTo(0, 0);
    }

    render(){
        return(
            <div className="spot-item" key={this.props.spot.id} onClick={this.handleClick}>
                <div className="spot-item-image">
                    <img className="index-spot-image" src={this.props.spot.image_url} />
                </div>
                <div className="spot-item-content">
                    <div className="spot-item-content-title">
                        <h3>{this.props.spot.name}</h3>
                        <div className="spot-index-tick">
                            <span>&#10003;</span>
                            <div className="spot-index-tick-arrow"></div>
                            <div className="spot-index-tick-message">
                                <p>The listing's accuracy has been verified by a <strong>HipTrip Associate.</strong>. You can plan your visit without doubts.</p>
                            </div>
                        </div>
                    </div>
                    <h5>{`${this.props.spot.city}, ${this.props.spot.state}`}</h5>
                    <div className="spot-item-content-footer">
                        <div className="spot-item-content-footer-review">
                            <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                            <h3 className="spot-index-header-hundred-percent">100%</h3>
                            <h5 className="spot-show-header-review-count">- 0 Reviews</h5>
                        </div>
                        <h4 className="spot-item-content-footer-price">{`$${this.props.spot.price}/night`}</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(SpotIndexItem);