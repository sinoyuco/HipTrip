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
    }

    render(){
        return(
            <div className="spot-item" key={this.props.spot.id} onClick={this.handleClick}>
                <div className="spot-item-image">
                    <img className="index-spot-image" src={this.props.spot.image_url} />
                </div>
                <div className="spot-item-content">
                    <p>{this.props.spot.name}</p>
                    <p>{`${this.props.spot.price}$/night`}</p>
                    <p>{`${this.props.spot.city}, ${this.props.spot.state}`}</p>
                </div>
            </div>
        );
    }
}

export default withRouter(SpotIndexItem);