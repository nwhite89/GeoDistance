var expect = require('expect.js'),
    geoDist = require('../index.js');

describe('Get distance', function () {
    var to = [
            {
                lat: -22.853840,
                lng: 19.882812
            },
            {
                lat: 44.514772,
                lng: 20.058594
            }
        ],
        from = {
            lat: 58.114637,
            lng: -4.375000
        };

    it('should have toRad function on number prototype', function () {
        var num = 50;

        expect(num.toRad).to.be.an('function');
        expect(num.toRad()).to.eql(0.8726646259971648);
    });

    it('should export needed functions and objects', function () {
        expect(geoDist.distances).to.be.an('object');
        expect(geoDist.distanceSort).to.be.a('function');
        expect(geoDist.retrieveDistance).to.be.a('function');
        expect(geoDist.getDistance).to.be.a('function');
    });

    describe('Has the correct lengths available', function () {
        var distances = geoDist.distances;

        it('should have the circumfrance of the earth in yards', function () {
            expect(distances.yards).to.eql(6967410);
        });

        it('should have the circumfrance of the earth in km', function () {
            expect(distances.km).to.eql(6371);
        });

        it('should have the circumfrance of the earth in miles', function () {
            expect(distances.miles).to.eql(3959);
        });

        it('should have the circumfrance of the earth in metres', function () {
            expect(distances.metres).to.eql(6371000);
        });

        it('should have the circumfrance of the earth in feet', function () {
            expect(distances.feet).to.eql(20902231);
        });
    });

    describe('Check ordering of objects', function () {
        var toOrder = [
                {
                    distance: 5141690
                },
                {
                    distance: 3265390
                },
                {
                    distance: 5357190
                },
                {
                    distance: 5357190
                }
            ],
            toBe = [
                {
                    distance: 5357190
                },
                {
                    distance: 5141690
                },
                {
                    distance: 3265390
                }
            ];

        it('Should order ascending', function () {
            var ordered = geoDist.distanceSort(toOrder, 'asc');

            expect(ordered[0].distance).to.be(toBe[2].distance);
            expect(ordered[1].distance).to.be(toBe[1].distance);
            expect(ordered[2].distance).to.be(toBe[0].distance);
        });

        it('Should order descending', function () {
            var ordered = geoDist.distanceSort(toOrder, 'desc');

            expect(ordered[0].distance).to.be(toBe[0].distance);
            expect(ordered[1].distance).to.be(toBe[0].distance);
            expect(ordered[2].distance).to.be(toBe[1].distance);
        });

    });

    it('Should return the distance', function () {
        var data = {
                'earthRadius': 6967410,
                'decimals': 2,
                'dLat': -0.7592266063998,
                'dLng': -0.4264466633955314,
                'toLng': 20.058594,
                'fromLat': 1.0142917592513199,
                'toLat': 0.7769293371745812
            },
            distance = geoDist.retrieveDistance(data);

        expect(distance).to.be(5623014900);
    });

    describe('Init function retrieves the distances', function () {

        it('Doesn\'t need decimals or length set', function () {
            var result = geoDist.getDistance(from, to);

            expect(result[0].distance).to.be(3265390);
            expect(result[1].distance).to.be(5141690);
        });

        it('Takes a lng and lat using yards', function () {
            var resultYards = geoDist.getDistance(from, to, 'asc', 'yards', 2);

            expect(resultYards[0].distance).to.be(3571078080);
            expect(resultYards[1].distance).to.be(5623014900);
        });

        it('Takes a lng and lat using km', function () {
            var resultKm = geoDist.getDistance(from, to, 'asc', 'km', 2);

            expect(resultKm[0].distance).to.be(3265390);
            expect(resultKm[1].distance).to.be(5141690);
        });

        it('Takes a lng and lat using miles', function () {
            var resultMiles = geoDist.getDistance(from, to, 'asc', 'miles', 2);

            expect(resultMiles[0].distance).to.be(2029150);
            expect(resultMiles[1].distance).to.be(3195090);
        });

        it('Takes a lng and lat using metres', function () {
            var resultMetres = geoDist.getDistance(from, to, 'asc', 'metres', 2);

            expect(resultMetres[0].distance).to.be(3265393950);
            expect(resultMetres[1].distance).to.be(5141685060);
        });

        it('Takes a lng and lat using feet', function () {
            var resultFeet = geoDist.getDistance(from, to, 'asc', 'feet', 2);

            expect(resultFeet[0].distance).to.be(10713234760);
            expect(resultFeet[1].distance).to.be(16869045500);
        });
    });

});
