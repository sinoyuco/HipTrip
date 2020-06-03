import React from 'react';
import { Link, Route } from 'react-router-dom';
//import SearchMap from './search_map.js'
// import SpotIndexContainer from '../spots/spot_index'


class SpotSearch extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchSpots();
    }

    render(){

        let spots = this.props.spots.map(spot => <div className="spot-item" key={spot.id}>
            <div className="spot-item-image">
                <img className="index-spot-image" src={spot.image_url}/>
            </div>
            <div className="spot-item-content">
                <p>{`${spot.price}$/night`}</p>
                <p>{`${spot.city}, ${spot.state}`}</p>
            </div>
            </div>)

        return(
            <div className="spot-search">
                <div className="spot-index">
                    {spots}
                </div>
                <div className="search-map">
                    
                </div>
            </div>
        );
    }

}

export default SpotSearch;