export const fetchSpots = data => {
    return $.ajax({
        method: 'GET',
        url: 'api/spots/',
        data
    });
}

export const fetchSpot = (spotId) => {
    return $.ajax({
        method: 'GET',
        url: `api/spots/${spotId}`
    });
}