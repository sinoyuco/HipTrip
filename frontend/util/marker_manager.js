
export default class MarkerManager{
    constructor(map){
        this.map = map;
        this.markers = {};
    }

    updateMarkers(spots) {
        const spots_formatted = spots.map(spot => spot.props.spot)
        const spotsObj = {};

        spots_formatted.forEach(spot => spotsObj[spot.id] = spot);
        
        spots_formatted
            .filter(spot => !this.markers[spot.id])
            .forEach(newSpot => this.createMarkerFromSpot(newSpot, this.handleClick))

        Object.keys(this.markers)
            .filter(spotId => !spotsObj[spotId])
            .forEach((spotId) => this.removeMarker(this.markers[spotId]))
    }

    createMarkerFromSpot(spot) {
        const position = new google.maps.LatLng(spot.latitude, spot.longitude);
        const marker = new google.maps.Marker({
            position,
            map: this.map,
            spotId: spot.id
        });

        marker.addListener('click', () => this.handleClick(spot));
        this.markers[marker.spotId] = marker;
    }

    removeMarker(marker) {
        this.markers[marker.spotId].setMap(null);
        delete this.markers[marker.spotId];
    }





}