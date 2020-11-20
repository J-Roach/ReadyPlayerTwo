//function to start the Leaflet map
function createMap() {
    "use strict";
    //Varibles for attribution box on the map.
    var mbAttr = '<a href="http://openstreetmap.org">OpenStreetMap</a> |' + '<a href="http://mapbox.com">Mapbox</a>'; //You can add you name to the variable if you want to add yourself to the credits.
    
    //Variable for storing your Mapbox API Token
    var apitoken = 'pk.eyJ1Ijoiai1yb2FjaCIsImEiOiJja2hvejZpbHEwOGdrMnhtbDJsNmpqMXZzIn0.XUikv9nq7Xpmv6WbFx0tlQ'; //Enter your API Token - go to 'https://www.mapbox.com/install/' to yours */
    
     //URL used for Standard MapBox Styles
    var mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}';
    
    //URL used for Custom MapBox Style
    var mbStyleUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/256/{z}/{x}/{y}?access_token={token}';
    
    //For Custome basemaps - Replace your username and StyleID
    var customeBasemap = L.tileLayer(mbStyleUrl, {id: 'j-roach/ckhqdw1wq00mu19nyk9xhwoj4', token: apitoken,  attribution: mbAttr});
    
    //For MabBox Standard Basemaps
    var standardBasemap   = L.tileLayer(mbUrl, {id: 'mapbox.light', token: apitoken, attribution: mbAttr});
    
    //create the map*/
    var map = L.map('map', {
        center: [51.152, -115.554],//Coordinated to center the map
        zoom: 15, //zoom level
        layers:customeBasemap //basemap
    });
    
}

//calling the funcation
$(document).ready(createMap);