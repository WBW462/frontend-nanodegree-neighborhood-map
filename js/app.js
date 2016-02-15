// Creates a maker in Anchorage, Alaska using DROP animation.
// Clicking on the marker will toggle the animation BOUNCE for about
// three seconds.
var marker;
var map;
// initializes map
function initMap() {
    //  Lat/Lng starting point and locatons of interest
    var myLatLng = {
        lat: 33.7490631,
        lng: -84.3881399
    };
    var abgLatLng = {
        lat: 33.789203,
        lng: -84.372756
    };
    var darbLatLng = {
        lat: 33.919190,
        lng: -84.504063
    };
    var euLatLng = {
        lat: 33.789441,
        lng: -84.326844
    };
    var fmonhLatLng = {
        lat: 33.774000,
        lng: -84.327745
    };
    var tftLatLng = {
        lat: 33.772620,
        lng: -84.385561
    };
    var giotLatLng = {
        lat: 33.775339,
        lng: -84.396227
    };
    var mcLatLng = {
        lat: 33.745941,
        lng: -84.413834
    };
    var hjaiaLatLng = {
        lat: 33.640863,
        lng: -84.444379
    };
    var sfogLatLng = {
        lat: 33.769882,
        lng: -84.547636
    };
    var smtpLatLng = {
        lat: 33.802728,
        lng: -84.155124
    };
    var tvLatLng = {
        lat: 33.771510,
        lng: -84.389311
    };
    // Create a map object and specify the DOM element for display
    // and starting location on map.
    map = new google.maps.Map(document.getElementById('map'), {
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
        title: 'Georgia Capital'
    });

    // Create a marker and set its position.
    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: abgLatLng,
        title: 'Atlanta Botanical Garden'
    });

    // Create a marker and set its position.
    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: darbLatLng,
        title: 'Dobbins Air Reserve Base'
    });

    // Create a marker and set its position.
    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: euLatLng,
        title: 'Emory University'
    });

    // Create a marker and set its position.
    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: fmonhLatLng,
        title: 'Fernbank Museum Of Natural History'
    });

    // Create a marker and set its position.
    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: tftLatLng,
        title: 'The Fox Theatre'
    });

    // Create a marker and set its position.
    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: giotLatLng,
        title: 'Georgia Institute of Technology'
    });

    // Create a marker and set its position.
    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: mcLatLng,
        title: 'Morehouse College'
    });

    // Create a marker and set its position.
    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: hjaiaLatLng,
        title: 'Hartsfield-Jackson Atlanta International Airport'
    });

    // Create a marker and set its position.
    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: sfogLatLng,
        title: 'Six Flags Over Georgia'
    });

    // Create a marker and set its position.
    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: smtpLatLng,
        title: 'Stone Mountain Theme Park'
    });

    // Create a marker and set its position.
    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: tvLatLng,
        title: 'The Varsity'
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
        setTimeout(function() {
            marker.setAnimation(null);
        }, 2250);
    }
}
// returns array of locations for neighborhood maps
//function locationFinder() {
// initializes an empty array
//var locations = [];
//}
