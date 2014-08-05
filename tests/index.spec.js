var dist = require('../index.js'),
    whitehouse = {
        lat: 38.897096,
        lng: -77.036545
    },
    bigBen = {
        lat: 51.50077,
        lng: -0.124640
    };

exports['getDistance'] = function (test) {
    // Returns zero because is the same
    test.equal(dist.getDistance(whitehouse.lat, whitehouse.lng, whitehouse.lat, whitehouse.lng, 2), 0);

    // Returns 5898770 km
    test.equal(dist.getDistance(whitehouse.lat, whitehouse.lng, bigBen.lat, bigBen.lng, 2), 5898770);

    // Returns 5898770 km with no decimals passed
    test.equal(dist.getDistance(whitehouse.lat, whitehouse.lng, bigBen.lat, bigBen.lng), 5898770);

    // Check toRad to exist
    test.equal(Number.toRad);

    // Check toRad should return correctly
    test.equal(parseFloat(1).toRad(), 0.017453292519943295);

    test.done();
};
