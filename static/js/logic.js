var plates = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_plates.json";
var quakes = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";

// Perform a GET request to the query URL
d3.json(quakes, function (data) {
  
// console.log(data.features[0])
  // Once we get a response, send the data.features object to the createFeatures function
  createFeatures(data.features)

});



function createFeatures(earthquakeData) {

  // Define a function we want to run once for each feature in the features array
  // Give each feature a popup describing the place and time of the earthquake
  function onEachFeature(feature, layer) {
    layer.bindPopup("<h3>" + feature.properties.place +
      "</h3><hr><p>Magnitude: " + feature.properties.mag + "</p><p>" +
      new Date(feature.properties.time) + "</p>");
  }

  function getColor(d) {
    return d > 5 ? '#BD0026' :
      d > 4 ? '#DA4937' :
        d > 3.5 ? '#800026' :
          d > 3 ? '#E31A1C' :
            d > 2.5 ? '#FC4E2A' :
              d > 2 ? '#FD8D3C' :
                d > 1.5 ? '#FEB24C' :
                  d > 1 ? '#FED976' :
                    '#FFEDA0';
  }

  function markerSize(magnitude) {
    return magnitude * 10;
  };
  // style function 
  function style(feature) {
    return {
      "radius": markerSize(feature.properties.mag),
      "fillColor": getColor(feature.properties.mag),
      "fillOpacity": .75,
      "color": "#999",
      "weight": 1
    };
  }

  // Create a GeoJSON layer containing the features array on the earthquakeData object
  // Run the onEachFeature function once for each piece of data in the array
  var earthquakes = L.geoJSON(earthquakeData, {
    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, style(feature));
    },

  })

  // Sending our earthquakes layer to the createMap function
  createMap(earthquakes);
}

function createMap(earthquakes) {

  // Define streetmap and darkmap layers
  var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  });

  var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.dark",
    accessToken: API_KEY
  });

  // Define a baseMaps object to hold our base layers
  var baseMaps = {
    "Street Map": streetmap,
    "Dark Map": darkmap
  };

  // Create overlay object to hold our overlay layer
  var overlayMaps = {
    Earthquakes: earthquakes
  };

  // Create our map, giving it the streetmap and earthquakes layers to display on load
  var myMap = L.map("map", {
    center: [
      37.09, -95.71
    ],
    zoom: 2,
    layers: [streetmap, earthquakes]
  });


  
  // var legend = L.control({ position: 'bottomright' });
  // legend.onAdd = function () {
  //   var div = L.DomUtil.create('div', 'legend');
  //   var labels = ["1", "2", "3", "4", ">5"];
  //   var grades = [1, 2, 3, 4, 5]
  //   div.innerHTML = '<div><b>Legend</b></div>';
  //   for (var i = 0; i < grades.length; i++) {
  //     div.innerHTML += '<i style ="background:' + getColor(grades[i]+1) + '">&nbsp;&nbsp;</i>&nbsp;&nbsp;' + labels[i] + '<br/>'
  //   }
  //   return div;
  // };
  // legend.addTo(myMap);

  // Create a layer control
  // Pass in our baseMaps and overlayMaps
  // Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps,{
    collapsed: false
  }).addTo(myMap);


};

