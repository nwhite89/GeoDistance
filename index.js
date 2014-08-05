/**
 * Simple node js module to get distance between two coordinates.
 * Code transformed from Chris Veness example code - please refer to his website for licensing questions.
 *
 * Latitude/longitude spherical geodesy formulae & scripts (c) Chris Veness 2002-2011
 * www.movable-type.co.uk/scripts/latlong.html
 */

/** Converts numeric degrees to radians */
if (typeof(Number.prototype.toRad) === 'undefined') {
    Number.prototype.toRad = function () {
        return this * Math.PI / 180;
    };
}

// start and end are objects with latitude and longitude
//decimals (default 2) is number of decimals in the output
//return is distance in kilometers.
exports.getDistance = function (toLat, toLng, fromLat, fromLng, decimals) {
    var earthRadius,
        dLat,
        dLon,
        lat1,
        la2,
        a,
        c,
        d;

    decimals = decimals || 2;
    earthRadius = 6371; // km
    lat1 = parseFloat(toLat);
    lat2 = parseFloat(fromLat);
    lon1 = parseFloat(toLng);
    lon2 = parseFloat(fromLng);

    dLat = (lat2 - lat1).toRad();
    dLon = (lon2 - lon1).toRad();
    lat1 = lat1.toRad();
    lat2 = lat2.toRad();

    a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    d = earthRadius * c;

    return (Math.round(d * Math.pow(10, decimals)) / Math.pow(10, decimals)) *
        1000;
};
