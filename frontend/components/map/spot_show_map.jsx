import React from 'react';

class SpotShowMap extends React.Component{

    constructor(props){
        super(props)
    }

    componentDidMount() {
        const mapOptions = {
            center: { lat: this.props.latitude, lng: this.props.longitude },
            zoom: 12
        };

        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        const circle = new google.maps.Circle({
            strokeColor: '#40d9ac',
            strokeOpacity: 0.8,
            fillColor: '#40d9ac',
            fillOpacity: 0.35,
            map: this.map,
            center: { lat: this.props.latitude, lng: this.props.longitude },
            radius: 2500
        });
    }

    render() {
        return (
            <div className="spot-show-map" ref={map => this.mapNode = map}>
            <div ref={map => this.mapNode = map}></div> 
        </div>
        );
    }


}

export default SpotShowMap;