// Slick slider
  $(document).ready(function(){
$('.add-remove').slick({
  slidesToShow: 3,
  slidesToScroll: 3
});
var slideIndex = 1;
$('.js-add-slide').on('click', function(){
  slideIndex++;
  $('.add-remove').slickAdd('<div><h3>'+slideIndex+'</h3></div>');
});

$('.js-remove-slide').on('click', function(){
  $('.add-remove').slickRemove(slideIndex - 1);
  if (slideIndex !== 0) {
    slideIndex--;
  }
});
});

// Swipe on mobile
  $(document).ready(function() {  
       $("#carousel-example-generic").swiperight(function() {  
          $(this).carousel('prev');  
          });  
       $("#carousel-example-generic").swipeleft(function() {  
          $(this).carousel('next');  
     });  
  });  

//Google maps

var map;
var ponsonby = new google.maps.LatLng(-36.847928, 174.743734);

var MY_MAPTYPE_ID = 'custom_style';

function initialize() {

  var featureOpts = [
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      { color: "#c2aec6" },
      { weight: 2 },
      { visibility: "on" },
      { lightness: 18 }
    ]
  }
];

  var mapOptions = {
    zoom: 16,
    center: ponsonby,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID
  };

  map = new google.maps.Map(document.getElementById('map-container'),
      mapOptions);

        var image = "assets/img/icon.png";
          var marker = new google.maps.Marker({
            position: ponsonby,
            map: map,
            icon: image,
            title: 'Natasha Radonich Hairdresser'
        });

  var styledMapOptions = {
    name: 'Custom Style'
  };

  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
}

google.maps.event.addDomListener(window, 'load', initialize);







