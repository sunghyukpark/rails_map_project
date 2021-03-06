$(document).ready(function(){

	calcAndDisplayDirection();

})




function calcAndDisplayDirection() {

	var origin = $('div.origin')
	var origin = document.getElementById('dir-origin').innerHTML
	var destination = document.getElementById('dir-destination').innerHTML
	var mode = document.getElementById('dir-mode').innerHTML
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var directionsService = new google.maps.DirectionsService;

  var sf_map = initMapOfSanFrancisco();

  directionsDisplay.setMap(sf_map); 


	directionsService.route(
  	{	origin: origin,
    	destination: destination,
    	travelMode: setTravelMode(mode)},
  	function(response, status){
    	if (status === google.maps.DirectionsStatus.OK){
    		console.log("inside request");
    		directionsDisplay.setDirections(response);	
    	} 

    	else { window.alert('Directions request failed due to ' + status);
    	}

  	}
	);

}



function initMapOfSanFrancisco(){
	var selector = document.getElementById('map');
	var options = {
		zoom: 18,
		center: {lat:  37.774501, lng: -122.418432}
	};

	var sf_map = new google.maps.Map(selector, options);
	console.log(sf_map)
	console.log("inside map")
	return sf_map;
}


function setTravelMode(mode){
	if(mode === 'driving')				{return google.maps.TravelMode.DRIVING}
	else if(mode === 'transit')		{return google.maps.TravelMode.TRANSIT}
	else if(mode === 'bicycling')	{return google.maps.TravelMode.BICYCLING}	
	else 													{return google.maps.TravelMode.WALKING}
}




// function calcRoute() {
//   var start = document.getElementById("start").value;
//   var end = document.getElementById("end").value;
//   var request = {
//     origin:start,
//     destination:end,
//     travelMode: google.maps.TravelMode.DRIVING
//   };
//   directionsService.route(request, function(result, status) {
//     if (status == google.maps.DirectionsStatus.OK) {
//       directionsDisplay.setDirections(result);
//     }
//   });
// }


// function createMarker(options, html){
// 	//options => js obj
// 	var marker = new google.maps.Marker(options);
// 	if (html){
// 		google.maps.event.addListener(marker, "click", function(){
// 			infoWindow.setContent(html);
// 			infoWindow.open(options.map, this);
// 		})
// 	}
// 	return marker;
// }


