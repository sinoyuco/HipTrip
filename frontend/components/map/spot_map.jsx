import React from 'react';
import MarkerManager from '../../util/marker_manager';;

class SpotMap extends React.Component{

    constructor(props){
        super(props);
    }
   

    componentDidMount() {
        // set the map to show SF
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 }, // this is SF
            zoom: 13
        };
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);

        this.MarkerManager.updateMarkers(this.props.benches);
    }

    componentDidUpdate(){
        this.MarkerManager.updateMarkers(this.props.benches);
    }

    render(){
        return(
            <div className={this.props.scroll} ref={map => this.mapNode = map}>
                <div ref={map => this.mapNode = map}></div>
            </div>
        );
    }

}

export default SpotMap;


