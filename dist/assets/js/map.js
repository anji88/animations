
var mapLoaded = false
// GoogleMapInitializationcode
function initialize () {
  var mapCanvas = document.getElementById('map')
  if (mapCanvas) {
    var customMapType = new google.maps.StyledMapType([{
      stylers: [{
          hue: "#890000"
      }, {
          visibility: "simplified"
      }, {
          saturation: -100
      }, {
          lightness: 11
      }]
  }],{ name: 'Custom Style' })
  
    // var avanaPos = new google.maps.LatLng(25.0138331, 55.043125)
    var avanaPos = new google.maps.LatLng(25.014926, 55.052496)
    var customMapTypeId = 'custom_style'
    var mapOptions = {
      center: avanaPos,
      zoom: 13.5,
      zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_TOP
      },
      mapTypeControl: false,
      navigationControl: true,
      streetViewControl: false,
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
      }
    }
    var map = new google.maps.Map(mapCanvas, mapOptions)
    map.mapTypes.set(customMapTypeId, customMapType)
    map.setMapTypeId(customMapTypeId)
    var companyImage = new google.maps.MarkerImage('assets/images/pointer.png',
      new google.maps.Size(46, 75),
      new google.maps.Point(0, 0),
      new google.maps.Point(0, 0)
    )
    var companyMarker = new google.maps.Marker({
      position: avanaPos,
      map: map,
      icon: companyImage,
      title: 'Avana',
      zIndex: 3
    })
  }
  // Limit the zoom level
  google.maps.event.addListener(map, 'zoom_changed', function () {
    if (map.getZoom() < 10) {
      map.setZoom(map.getZoom() + 1)
    } else if (map.getZoom() > 20) {
      map.setZoom(map.getZoom() - 1)
    }
  })
  mapLoaded = true
}
