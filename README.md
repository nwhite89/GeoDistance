[![Build Status](https://travis-ci.org/nwhite89/GeoDistance.svg?branch=master)](https://travis-ci.org/nwhite89/GeoDistance)
[![devDependency Status](https://david-dm.org/nwhite89/GeoDistance/dev-status.svg)](https://david-dm.org/nwhite89/GeoDistance#info=devDependencies)
[![Monthly downloads](http://img.shields.io/npm/dm/geo-distance-js.svg)](https://www.npmjs.org/package/geo-distance-js)
[![License](http://img.shields.io/npm/l/geo-distance-js.svg)](https://www.npmjs.org/package/geo-distance-js)

# GeoDistance.js
### A Node.js module which takes 2 Lat+Lng (Geolocation) points and returns the distance between the two points in Meters

Installation
-----
``npm install geo-distance-js``

----
Function
``getDistance(toLat, toLng, fromLat, fromLng);``

Add the module as a variable in your .js file

``var dist = require('geo-distance-js');``

Run the function with

``dist.getDistance(toLat, toLng, fromLat, fromLng);``
