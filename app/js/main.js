$(document).ready(function () {
	var now = new Date();
	var daysMonth = now.getDate();

	$("#d"+daysMonth).addClass("day-today");

	//alert( now.getDate() );
});