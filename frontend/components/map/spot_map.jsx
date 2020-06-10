import React from 'react';
import MarkerManager from '../../util/marker_manager';;

class SpotMap extends React.Component{

    constructor(props){
        super(props);
    }
   

    componentDidMount() {
        
        const mapOptions = {
            center: {
                lat: 39.812057, lng: -98.556008}, // KANSAS
            zoom: 3,
            zoomControl: true,
            zoomControlOptions: {
                position: google.maps.ControlPosition.LEFT_BOTTOM},
            streetViewControl: true,
            streetViewControlOptions: {
                position: google.maps.ControlPosition.RIGHT_CENTER}
            
        };
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers(this.props.spots);

        google.maps.event.addListener(this.map, 'idle', () => {
            const { north, south, east, west } = this.map.getBounds().toJSON();
            const bounds = {
                northEast: { lat: north, lng: east },
                southWest: { lat: south, lng: west }
            };
            this.props.updateBounds(bounds);
        });
    }

    componentDidUpdate(){
        this.MarkerManager.updateMarkers(this.props.spots);
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


