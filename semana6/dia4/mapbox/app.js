mapboxgl.accessToken =
  "pk.eyJ1IjoidmlsbGF2YW50IiwiYSI6ImNrbXpvMW80djAwNmcydWxvNjF2dW40d3kifQ.dqRXeRLHTgtsDvf0nrtF8A";
let map = new mapboxgl.Map({
  container: "mapa", // container ID
  style: "mapbox://styles/mapbox/streets-v11", // style URL
  center: [-74.5, 40], // starting position [lng, lat]
  zoom: 9, // starting zoom
});
