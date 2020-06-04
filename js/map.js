'use strict';

//O bloco de código abaixo, faz o controle do javascript api
let platform = new H.service.Platform({
    'apikey': 'l1BwF1EMH485FGaU91NVsaY1CWw7VcGSeC2LTlDWltY'
});

// Retrieve the target element for the map:
let targetElement = document.getElementById('mapContainer');

// Obtain the default map types from the platform object:
let defaultLayers = platform.createDefaultLayers();

// Instantiate (and display) a map object:
let map = new H.Map(
    document.getElementById('mapContainer'),
    defaultLayers.vector.normal.map,
    {
        zoom: 10,
        center: { lat: 52.5, lng: 13.4 }
    });

// Este bloco de código controla o dimensionamento do mapa
var ui = H.ui.UI.createDefault(map, defaultLayers, 'de-DE');
var mapSettings = ui.getControl('mapsettings');
var zoom = ui.getControl('zoom');
var scalebar = ui.getControl('scalebar');   
mapSettings.setAlignment('top-left');
zoom.setAlignment('top-left');
scalebar.setAlignment('top-left');


// Get an instance of the geocoding service:
var service = platform.getSearchService();

// Call the geocode method with the geocoding parameters,
// the callback and an error callback function (called if a
// communication error occurs):
service.geocode({
    q: '203 Fake St. Mountain View, São Francisco, Califórnia, EUA' //Seu endereço 
}, (result) => {
    // Add a marker for each location found
    result.items.forEach((item) => {
        map.addObject(new H.map.Marker(item.position));
        map.setCenter(item.position);
        map.setZoom(16);
    });
}, alert);

