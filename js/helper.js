
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span>%data%</span><hr>';
var HTMLresumeDownload='<a href="#"><i class="fa fa-download fa-2x" style="float: right" aria-hidden="true"></i></a>';
var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%:</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<br><div class="bold">%data%</div>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';
var HTMLprojectLink='<a href="%data%">I would like to explore !!!</a>';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h2>Online Classes</h2>';
var HTMLonlineclassesStart= '<div class="online"></div>'
var HTMLonlineTitle = '--%data%</a>'
var HTMLonlineSchool = '<a href="#">%data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';

var HTMLfooter = '<a href="%data%"><i class="fa fa-%type% fa-2x" aria-hidden="true"></i></a>';
var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';

$(document).ready(function() {
  $('button').click(function() {
    var $name = $('#name');
    var iName = inName($name.text()) || function(){};
    $name.html(iName);
  });
});

var clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  logClicks(loc.pageX,loc.pageY);
});
var map;
function initializeMap() {
  var locations;
  var mapOptions = {
    disableDefaultUI: true,
    zoom: 5
  };

  map = new google.maps.Map(document.querySelector('#map'), mapOptions);

function locationFinder() {
    var locations = [];
    locations.push(bio.contacts.location);
    education.schools.forEach(function(school){
      locations.push(school.location);
    });
    work.jobs.forEach(function(job){
      locations.push(job.location);
    });
    console.log(locations);
    return locations;
  }

function createMapMarker(placeData) {

    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service`
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });



    var infoWindow = new google.maps.InfoWindow({
      content: name
    });


    google.maps.event.addListener(marker, 'click', function() {
        infoWindow.open(map,marker);
    });


    bounds.extend(new google.maps.LatLng(lat, lon));

    map.fitBounds(bounds);
    map.setCenter(bounds.getCenter());
  }

function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);

    }
  }

function pinPoster(locations) {
    var service = new google.maps.places.PlacesService(map);

      locations.forEach(function(place){
      var request = {
        query: place
      };
      service.textSearch(request, callback);
    });
  }
  window.mapBounds = new google.maps.LatLngBounds();
  locations = locationFinder();
  pinPoster(locations);
}

window.addEventListener('load', initializeMap);
window.addEventListener('resize', function(e) {
map.fitBounds(mapBounds);
});