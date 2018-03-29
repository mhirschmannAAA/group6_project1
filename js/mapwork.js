var imartaAPIKEy = "56a19e24260049d499ff8ea90f306b0d";
var imartaUrl = "http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=" + imartaAPIKEy;

$.ajax({
    url: imartaUrl,
    method: "GET"
})

// We store all of the retrieved data inside of this “response”
.then(function(response) {

    console.log(response);
     results = JSON.parse(response);
    console.log(results[0].geography.latitude);

    mapMarkers();

})

function mapMarkers() {
    for (var i = 0; i < results.length; i++) {
   
      var longitude = results[i].geography.longitude;
      var latitude = results[i].geography.latitude;
      console.log(longitude);
      console.log(latitude);
      var latlng = new google.maps.LatLng(latitude, longitude);
   
      var marker = new google.maps.Marker({
        position: latlng,
        map: map
      });
    }
   }
   
   var map;
   
   function initMap() {
      map = new google.maps.Map(document.getElementById(map), {
          center: {
              lat: 33.640411,
              lng: -84.419853
          },
          zoom: 12
      });  
   }
