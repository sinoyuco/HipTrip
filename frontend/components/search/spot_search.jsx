import React from 'react';
import { Link, Route } from 'react-router-dom';
import SpotIndexItem from '../spots/spot_index_item';
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

        let spots = this.props.spots.map(spot => <SpotIndexItem key={spot.id} spot={spot}/>)

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