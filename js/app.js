// Creates a maker in Anchorage, Alaska using DROP animation.
// Clicking on the marker will toggle the animation BOUNCE for about
// three seconds.
var marker;

// initializes map
function initMap() {
//  var myLatLng = {lat: 61.197798, lng: -149.785479};
  var myLatLng = {lat: 33.7490631, lng: -84.3881399};

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    scrollwheel: true,
    zoom: 11
  });

  // Create a marker and set its position.
    marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: myLatLng,
    title: 'Where I lived, while in the Air Force!'
  });
  marker.addListener('click', toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
  for (var x = 0; x < 5; x++) {
  //  marker.setAnimation(google.maps.Animation.BOUNCE);  NOT NEEDED???
    stopAnimation(marker);
  }
  function stopAnimation(marker) {
    setTimeout(function () {
      marker.setAnimation(null);
    }, 2250);
  }
}
// returns array of locations for neighborhood maps
//function locationFinder() {
  // initializes an empty array
  //var locations = [];
//}
