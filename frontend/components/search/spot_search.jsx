import React from 'react';
import { Link, Route } from 'react-router-dom';
import SpotIndexItem from '../spots/spot_index_item';
import SpotMap from '../map/spot_map';
//import SearchMap from './search_map.js'
// import SpotIndexContainer from '../spots/spot_index'


class SpotSearch extends React.Component{
    constructor(props){
        super(props);
        this.state = { scrollFixed: false }
    }

    componentDidMount(){
        // this.props.fetchSpots();
        document.addEventListener('scroll', () => {
            const belowPictures = window.scrollY > 1300;
            if (belowPictures !== this.state.scrollFixed) {
                this.setState({ scrollFixed: belowPictures });
            }
        });
    }

    render(){

        let spots = this.props.spots.map(spot => <SpotIndexItem key={spot.id} spot={spot}/>)
        const scrollClass = this.state.scrollFixed ? 'map-container-absolute' : 'map-container';
        return(
            <div className="spot-search">
                <div className="spot-index">
                    {spots}
                </div>
                <div className="search-map">
                    <SpotMap updateBounds={this.props.updateBounds} spots={spots} scroll={scrollClass}/>
                </div>
            </div>
        );
    }

}

export default SpotSearch;