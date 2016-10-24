var markers = [];
var nbrMarkers;
var map;
var Loc = function(data) {
    "use strict";
    this.location = data.location; // ko.observable(data.location)
    this.lat = data.lat; // ko.observable(data.lat)
    this.lng = data.lng; // ko.observable(data.lng)
    this.address = data.address; // ko.observable(data.address)
    // TODO: incorporate data.url in the future
    // this.url = data.url; // ko.observable(data.url)
    this.visible = ko.observable(data.visible);

    // wikipedia api
    this.wikiUrl =
        "http://en.wikipedia.org/w/api.php?action=opensearch&search=" +
        data.location + "&format=json&callback=wikiCallback";

    // content window
    this.contentWindow = data.location +
        "<br><img src=\"https://maps.googleapis.com/maps/api/streetview?size=300x250&location=" +
        data.address +
        "' AIzaSyDduns82K5FZBrB7jp8OuqMZdyEMlFvEg8\">'";


    // drops markers to the map
    this.markerItem = new google.maps.Marker({
        position: {
            lat: data.lat,
            lng: data.lng
        },
        title: data.location,
        animation: google.maps.Animation.DROP,
        visible: data.visible
    });
};

// this is the controler or octopus
var controler = function() {
    var self = this;
    this.chosenMarker = ko.observable();
    this.koMarkerArray = ko.observableArray([]);
    venues.forEach(function(datapoint) {

        // used for the filter functionality and the list of venues
        self.koMarkerArray.push(new Loc(datapoint));

        // used for markers on google map
        markers.push(new Loc(datapoint));
    });
    nbrMarkers = markers.length;
    this.filter = ko.observable('');

    // behaviors
    this.goToMarker = function(x) {

        // closes venue list if the media width is <600px
        var list = window.matchMedia("(min-width: 600px)");
        if (list.matches) {

            // do nothing
        } else {
            drawer.venueList.remove('open');
        }
        self.chosenMarker(x.location);
        for (i = 0; i < nbrMarkers; i++) {
            if (x.location == markers[i].markerItem.title) {
                google.maps.event.trigger(markers[i].markerItem,
                    'click');
            }
        }
    };
    this.filteredItems = ko.computed(function() {
        var lcFilter = this.filter().toLowerCase();
        if (!lcFilter) {

            // if there is no filter, then return the whole list
            for (i = 0; i < nbrMarkers; i++) {
                markers[i].markerItem.setVisible(true);
            }
            return this.koMarkerArray();
        } else {

            // if there is a filter then use arrayFilter to shorten the list
            return ko.utils.arrayFilter(this.koMarkerArray(),
                function(item) {
                    var string = item.location.toLowerCase();
                    for (i = 0; i < nbrMarkers; i++) {
                        var str2 = markers[i].markerItem.title.toLowerCase();
                        if (str2.search(lcFilter) >= 0) {
                            markers[i].markerItem.setVisible(
                                true);
                        } else {
                            markers[i].markerItem.setVisible(
                                false);
                        }
                    }
                    if (string.search(lcFilter) >= 0) {
                        return true;
                    } else {
                        return false;
                    }
                });
        }
    }, this);
};

// create and set Google Map with marker
function viewThing() {

    // setup the Map
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(mapCanvas, mapOptions);
    var bounds = new google.maps.LatLngBounds();
    menu = menuSetup();
    for (i = 0; i < markers.length; i++) {
        LinkMarkerToContent(markers[i].markerItem, markers[i].contentWindow,
            markers[i].wikiUrl);
        markers[i].markerItem.setMap(map);
        google.maps.event.addListener(markers[i].markerItem, 'click',
            toggleBounce);
        bounds.extend(markers[i].markerItem.position);
    }
    map.fitBounds(bounds);
}

// menu setup
function menuSetup() {
    var menuControl = document.getElementById("menu");
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(menuControl);
    menuControl.addEventListener('click', function(e) {
        drawer.venueList.toggle('open');
        e.stopPropagation();
    });
    var main = document.querySelector('#map');
    var drawer = document.querySelector('#drawer');
    var exitStep = document.querySelector('#exit');
    main.addEventListener('click', function() {
        drawer.venueList.remove('open');
        menuControl.venueList.remove('open');
    });
    exitStep.addEventListener('click', function() {
        drawer.venueList.remove('open');
    });
}

// link infowindow to marker
function LinkMarkerToContent(marker, string, wikiUrl) {
    var formattedDefaultStr = string;
    var infowindow = new google.maps.InfoWindow({
        content: formattedDefaultStr
    });
    marker.addListener('click', function() {
        if (infowindow.opened === false) {
            infowindow.close();
        } else {
            getWikiArticles(wikiUrl, infowindow,
                formattedDefaultStr);
            infowindow.open(marker.get('map'), marker);
            infowindow.opened = true;

            // set timer to close infowindow after being opened for five seconds
            setTimeout(function() {
                infowindow.close();
            }, 5000);
        }
    });
}

// bounce markers on click and change color of selected markers
// markers bounce five seconds and change back to normal markers after 14 seconds
function toggleBounce(marker) {
    var self = this;
    if (self.getAnimation() !== null) {
        self.setAnimation(null);
    } else {
        self.setAnimation(google.maps.Animation.BOUNCE);
        self.setIcon("http://maps.google.com/mapfiles/kml/paddle/grn-stars.png");
        setTimeout(function() {
            self.setAnimation(null);
        }, 5000);
        setTimeout(function() {
            self.setIcon(null);
        }, 14000);
    }
}

// intialize map
function initMap() {
    var newControl = new controler();
    ko.applyBindings(newControl);
    google.maps.event.addDomListener(window, 'load', function() {
        viewThing();
    });
}

// error handling for map
function errorHandling() {
    console.log("there was an error in the google load");
    $("#map").append("Error in google map load");
}

function getWikiArticles(wikiURL, infowindow, string) {
    $.ajax({
        url: wikiURL,
        dataType: "jsonp",
        timeout: 8000,

        // jsonp: "callback"
    }).done(function(response) {
        var articleStr = response[0];
        console.log(articleStr);
        var url = 'http://en.wikipedia.org/wiki/' + articleStr + "";
        infowindow.setContent(string + '<p><a href="' + url +
            '"  "">' + 'Wikipedia Link to ' + articleStr +
            '</a>');
    }).error(function(error) {
        alert('failed to get wikipedia resources');
    });
}
