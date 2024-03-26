
// UPDATE THIS WITH A BETTER STARTING LATITUDE AND LONGITUDE AND ZOOM LEVEL
const map = L.map('map').setView([-44.681, 169.265], 11);
L.control.scale().addTo(map);


// REPLACE THIS BLOCK OF CODE WITH YOUR MAPBOX CODE
const tiles = L.tileLayer('https://api.mapbox.com/styles/v1/gdmckenzie/clu1x5j9h026e01pt45kv83dd/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2RtY2tlbnppZSIsImEiOiJjbHNtZjZmdXEwb2h4MmltdGJodXd1MmpyIn0.UrHBVKEcCwL1MBqo8k7bmA', {
	maxZoom: 19,
	tileSize: 512,
    zoomOffset: -1,
	attribution: '&copy; OpenStreetMap'
}).addTo(map);
// END REPLACE BLOCK


// There are four markers below.  Each has a latitude and longitude.  Edit these to be your unique places of interest.
// Also note that each has its own 'pop-up.'  Edit the text in each of these to say why each location is important to you.

  const marker1 = L.marker([-44.6098, 169.25375]).addTo(map)
  	.bindPopup('Lake Hawea Hotel - great views and cheap enough beer');
  
  const marker2 = L.marker([-44.692, 169.179]).addTo(map)
  	.bindPopup('Hook - Best beer garden in the region');

  const marker3 = L.marker([-44.7496, 169.26998]).addTo(map)
	.bindPopup('Luggate Hotel - historic gastro pub');

  const marker4 = L.marker([-44.72281, 169.2400]).addTo(map)
  	.bindPopup('Wanaka Beerworks - craft beer');



// These are the Territorial Authority Polygons that are being accessed from a 3rd party server.
// Edit the style of these polygons (see: https://leafletjs.com/reference.html#path)
var geojsonLayer = new L.GeoJSON.AJAX("https://raw.githubusercontent.com/gdmckenzie123/GISC403/main/TA.geojson", {
		color: 'grey',
		fillOpacity: 0,
		weight: 0.5,
		dashArray: '2,2',
	});
geojsonLayer.addTo(map);




// This creates a polygon on your map with provided coordinates.  Edit this polygon to create your own polygon somewhere in New Zealand
// Edit the style of this polygon (see: https://leafletjs.com/reference.html#path)
  const polygon = L.polygon([
		[-44.620, 169.247],
		[-44.680, 169.191],
		[-44.680, 169.196],
		[-44.682, 169.200],
		[-44.701, 169.193],
		[-44.716, 169.240],
		[-44.738, 169.275],
		[-44.716, 169.294],
		[-44.678, 169.304],
		[-44.619, 169.302]

	],{
		color: '#ff6333',
		opacity: 0.1,
		lineJoin: 'arcs',
		fillColor: '#ff6333',
	}).addTo(map).bindPopup('Deadzone - no beer here');

setTimeout(ReOrder, 1000);
function ReOrder() {
	geojsonLayer.bringToBack();
	polygon.bringToFront();
}



// END OF DOCUMENT