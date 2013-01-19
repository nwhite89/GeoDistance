# GeoDistance.js
### A Node.js module which takes 2 Lat+Lng (Geolocation) points and returns the distance between the two points in Meters

Installation
-----
npm install geo-distance-js

----
Function
getDistance(toLat, toLng, fromLat, fromLng);

Add the module as a variable in your .js file

var dist = require('geo-distance-js');

Run the function with 

dist.getDistance(toLat, toLng, fromLat, fromLng);
