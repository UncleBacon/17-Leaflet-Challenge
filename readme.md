<h1>Leaflet Earthquake Challenge</h1>
<h3>Week 17 Homework</h3>
<h4>Bill Bastan Submitted: 15Dec2019</h4>

<a href ="https://github.com/UncleBacon/17-Leaflet-Challenge/blob/master/Images/leafletgif.gif" >
    <img src = "https://github.com/UncleBacon/17-Leaflet-Challenge/blob/master/Images/leafletgif.gif" alt = "map gif"></a>

<p>
    In this homework I used D3 and leaflet to generate custom maps from geoJSON files obtained using API calls from the<a href ="https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php"> USGS website.</a> The
    visualization uses circle markers to show the location of each recorded earthquake over the last 24 hours. 
</p>
<P>
    Magnitude of each earthquake can be seen in both the size and color of the marker. The darker and larger the marker the larger the magnitude.
    Clicking on each marker will display details including approximate location, time of day and recorded magnitude of each earthquake.
 </P>

 <h2>To run Dynamic Website</h2>
<ol>
    <li>You will need to obtain a <a href="https://docs.mapbox.com/api/maps/#maps"> mapbox API </a> key by signing up at their website.</li>
      <li> Clone Repository</li>
      <li>Open html with live server
           <ol>
                  <li> In gitbash terminal navigate to 17-leaflet-Challenge directory with <strong>Index.html</strong>.</li>
                  <li>Ensure Python is installed and type  <strong>python -m http.server</strong></li>
                  <li> Open web browser and go to <a href="http://127.0.0.1:8000/">http://127.0.0.1:8000/</a></li>
            </ol>
      </li>
      <li>Select markers to see data for each earthquake</li>
</ol>

<h2>Directories</h2>
<ol>
      <li><h3>CSS</h3></li>
          <ul><li>style sheet for html elements</li></ul></ul>
      <li><h3>JS</h3></li>
            <ol><li>Logic.js</li>
            <ul><li><p>Primary code to create and update map</p></li></ul>
            <li>Config.js</li>
            <ul><li><p>File that holds API key for mapbox account</p></li>
            <li>After creating a <a href="https://docs.mapbox.com/api/maps/#maps"></a>mapbox account<a href="https://docs.mapbox.com/api/maps/#maps"></a> update this file with your API key in order to render maps.</li></ul></ol>
</ol>

<h2>Files</h2>
<ol>
      <li><h3>Index</h3></li>
    <ul><li><h4>Main HTML file</h4></li></ul>
</ol>
